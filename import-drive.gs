// ============================================================
// SCRIPT D'IMPORTATION — à utiliser une seule fois (ou au besoin)
// ============================================================
// Ce script ne fait PAS partie du site web. Il se lance séparément,
// depuis Google Apps Script (script.google.com), directement sur ton
// compte Google. Il sert à générer automatiquement le contenu de
// recettes.js à partir de ton dossier Drive existant.
//
// CE QUE LE SCRIPT FAIT :
//   1. Parcourt ton dossier de recettes et tous ses sous-dossiers
//   2. Pour chaque PDF trouvé :
//      - active le partage "Toute personne disposant du lien" (lecture seule)
//      - déduit la categorie à partir du nom du dossier parent
//      - déduit la sousCategorie à partir du nom du sous-dossier (s'il y en a un)
//      - récupère le lien de partage
//   3. Crée un nouveau Google Doc contenant le code prêt à coller dans recettes.js
//
// COMMENT L'UTILISER :
//   1. Va sur https://script.google.com > Nouveau projet
//   2. Supprime le code par défaut et colle tout ce fichier
//   3. Remplace la valeur de ID_DOSSIER_RACINE ci-dessous (voir note plus bas)
//   4. Clique sur ▶ Exécuter (choisis la fonction "genererListeRecettes")
//   5. La première fois, Google demande une autorisation : clique sur
//      "Advanced" / "Paramètres avancés" puis "Go to [nom du projet] (unsafe)"
//      — c'est normal, c'est TON script qui accède à TON propre Drive.
//   6. Une fois terminé, regarde le journal d'exécution (en bas de l'écran) :
//      il contient un lien vers un Google Doc avec le résultat.
//   7. Ouvre ce Doc, sélectionne tout, copie, et colle dans recettes.js
//      (à l'intérieur de const recettes = [ ... ], en remplaçant les
//      exemples existants).
//
// TROUVER L'ID DU DOSSIER RACINE :
//   Ouvre ton dossier principal de recettes sur Google Drive.
//   L'adresse ressemble à : https://drive.google.com/drive/folders/XXXXXXXXXXXXXXXX
//   Le ID_DOSSIER_RACINE, c'est la partie XXXXXXXXXXXXXXXX à la fin.
//
// NOTE : seuls les fichiers PDF sont détectés (comme le reste de tes
// recettes). Les titres sont générés à partir du nom des fichiers —
// un petit nettoyage manuel après coup est normal et attendu.

function genererListeRecettes() {
  var ID_DOSSIER_RACINE = "COLLE_ICI_L_ID_DE_TON_DOSSIER";
  var dossierRacine = DriveApp.getFolderById(ID_DOSSIER_RACINE);

  var blocs = [];

  function nettoyerTitre(nomFichier) {
    return nomFichier
      .replace(/\.pdf$/i, "")
      .replace(/[_-]+/g, " ")
      .trim();
  }

  function echapper(texte) {
    return texte.replace(/"/g, '\\"');
  }

  function traiterFichiersDuDossier(dossier, chemin) {
    var fichiers = dossier.getFilesByType(MimeType.PDF);
    while (fichiers.hasNext()) {
      var fichier = fichiers.next();
      fichier.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      var categorie = chemin[0] || "Non classé";
      var sousCategorie = chemin.length > 1 ? chemin.slice(1).join(" / ") : null;

      var lignesBloc = [
        "  {",
        "    titre: \"" + echapper(nettoyerTitre(fichier.getName())) + "\",",
        "    categorie: \"" + echapper(categorie) + "\","
      ];
      if (sousCategorie) {
        lignesBloc.push("    sousCategorie: \"" + echapper(sousCategorie) + "\",");
      }
      lignesBloc.push("    lien: \"" + fichier.getUrl() + "\"");
      lignesBloc.push("  }");

      blocs.push(lignesBloc.join("\n"));
    }
  }

  function parcourir(dossier, chemin) {
    traiterFichiersDuDossier(dossier, chemin);

    var sousDossiers = dossier.getFolders();
    while (sousDossiers.hasNext()) {
      var sousDossier = sousDossiers.next();
      parcourir(sousDossier, chemin.concat([sousDossier.getName()]));
    }
  }

  // Fichiers directement à la racine (rare, mais on ne les oublie pas)
  traiterFichiersDuDossier(dossierRacine, []);

  // Dossiers de catégories
  var dossiersCategories = dossierRacine.getFolders();
  while (dossiersCategories.hasNext()) {
    var dossierCategorie = dossiersCategories.next();
    parcourir(dossierCategorie, [dossierCategorie.getName()]);
  }

  var texteFinal = "const recettes = [\n" + blocs.join(",\n") + "\n];";

  var doc = DocumentApp.create("recettes.js genere - " + new Date().toLocaleString());
  doc.getBody().setText(texteFinal);

  Logger.log(blocs.length + " recette(s) trouvee(s).");
  Logger.log("Resultat pret a copier ici : " + doc.getUrl());
}
