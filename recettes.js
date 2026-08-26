// ============================================================
// LISTE DE TES RECETTES
// ============================================================
// Pour ajouter une nouvelle recette :
// 1. Sur Google Drive, clic droit sur le PDF > Partager > "Toute personne
//    disposant du lien" (rôle "Lecteur") > Copier le lien
// 2. Ajoute un bloc { ... } ci-dessous (n'oublie pas la virgule après
//    chaque bloc, sauf le dernier)
//
// Champs :
//   titre        : le nom de la recette (affiché sur la carte)
//   categorie    : le nom du dossier/catégorie sur ton Drive
//   sousCategorie: (optionnel) le nom du sous-dossier, si ta recette en a un
//   lien         : le lien de partage Google Drive copié à l'étape 1
//
// Astuce : utilise les MÊMES noms de catégorie (et sous-catégorie) que tes
// dossiers Drive, ça te évitera de t'y perdre. Le champ sousCategorie peut
// simplement être omis si la recette n'a pas de sous-catégorie.

const recettes = [
  {
    titre: "Cretons de chorizo",
    categorie: "Déjeuner",
    lien: "https://drive.google.com/file/d/1ZK51k1uRPYm-ldQnEYvVJrrss47dn4Wv/view?usp=drive_link"
  },
  {
    titre: "Soupe aux gourganes-AG",
    categorie: "Soupes et potages",
    lien: "https://drive.google.com/file/d/1I2Ixc9vU6f_ZiLiP3lVqmS9S6WUggY1G/view?usp=drive_link"
  },
  {
    titre: "Exemple - Poulet au four",
    categorie: "Plats principaux",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/EXEMPLE_ID_3/view?usp=sharing"
  }
];
