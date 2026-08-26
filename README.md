# Mon livre de recettes

Un catalogue web simple pour retrouver rapidement mes recettes (en PDF, stockées sur Google Drive), classées par catégorie.

## Comment ça marche

- Les PDF restent sur Google Drive, rien n'est dupliqué.
- Le fichier `recettes.js` contient la liste des recettes (titre, catégorie, sous-catégorie optionnelle, lien).
- Le site (`index.html`) affiche cette liste sous forme de cartes, avec recherche et filtres par catégorie (et par sous-catégorie, quand la catégorie sélectionnée en a).

## Ajouter une nouvelle recette

1. Sur Google Drive, clic droit sur le PDF → **Partager** → choisir **"Toute personne disposant du lien"** (rôle *Lecteur*) → **Copier le lien**.
2. Ouvrir `recettes.js` et ajouter un bloc à la liste, par exemple :

   ```js
   {
     titre: "Ma nouvelle recette",
     categorie: "Desserts",
     lien: "https://drive.google.com/file/d/XXXXXXXXXXXX/view?usp=sharing"
   }
   ```

   Si ta recette a une sous-catégorie (ex. un sous-dossier "Poulet" dans "Plats principaux"), ajoute le champ `sousCategorie` :

   ```js
   {
     titre: "Poulet au four",
     categorie: "Plats principaux",
     sousCategorie: "Poulet",
     lien: "https://drive.google.com/file/d/XXXXXXXXXXXX/view?usp=sharing"
   }
   ```

   Ce champ est optionnel — omets-le simplement si la recette n'a pas de sous-catégorie. Dès qu'au moins une recette d'une catégorie a une `sousCategorie`, une rangée de boutons de sous-catégories apparaît automatiquement sur le site quand on clique sur cette catégorie.

3. Sauvegarder le fichier. Le site se met à jour automatiquement (aucune autre étape).

Astuce : réutilise exactement les mêmes noms de catégorie (et sous-catégorie) que tes dossiers Drive, pour t'y retrouver facilement.

## Tester en local

Comme `recettes.js` est chargé par le navigateur, tu peux ouvrir `index.html` directement en double-cliquant dessus (pas besoin de serveur).

## Importer plusieurs recettes d'un coup

Si tu as beaucoup de recettes déjà organisées sur Drive, `import-drive.gs` est un script à usage ponctuel (Google Apps Script) qui génère automatiquement le contenu de `recettes.js` à partir de ton dossier Drive — voir les instructions en commentaire au début du fichier.

## Déploiement (Netlify ou GitHub Pages)

Le site est composé uniquement de fichiers statiques (`index.html`, `style.css`, `script.js`, `recettes.js`) : il suffit de déposer le dossier tel quel sur Netlify (glisser-déposer) ou de le pousser sur un dépôt GitHub avec Pages activé. Aucune configuration de build n'est nécessaire.
