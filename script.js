// ============================================================
// LOGIQUE DU SITE : affichage, recherche et filtres
// ============================================================

const grille = document.getElementById("grille-recettes");
const conteneurFiltres = document.getElementById("filtres-categories");
const conteneurSousFiltres = document.getElementById("filtres-sous-categories");
const champRecherche = document.getElementById("recherche");
const messageVide = document.getElementById("message-vide");
const listeSuggestions = document.getElementById("suggestions-recherche");

let categorieActive = "Toutes";
let sousCategorieActive = "Toutes";

const CLE_HISTORIQUE_RECHERCHE = "recherche-historique";
const MAX_HISTORIQUE_RECHERCHE = 8;

function chargerHistoriqueRecherche() {
  try {
    return JSON.parse(localStorage.getItem(CLE_HISTORIQUE_RECHERCHE)) || [];
  } catch {
    return [];
  }
}

function sauvegarderRecherche(terme) {
  if (!terme) return;
  let historique = chargerHistoriqueRecherche()
    .filter(t => t.toLowerCase() !== terme.toLowerCase());
  historique.unshift(terme);
  historique = historique.slice(0, MAX_HISTORIQUE_RECHERCHE);
  localStorage.setItem(CLE_HISTORIQUE_RECHERCHE, JSON.stringify(historique));
  mettreAJourSuggestions();
}

function mettreAJourSuggestions() {
  const historique = chargerHistoriqueRecherche();
  const titres = recettes.map(r => r.titre);
  const suggestions = [...new Set([...historique, ...titres])];

  listeSuggestions.innerHTML = "";
  suggestions.forEach(texte => {
    const option = document.createElement("option");
    option.value = texte;
    listeSuggestions.appendChild(option);
  });
}

function creerBoutonsCategories() {
  conteneurFiltres.innerHTML = "";
  const categoriesUniques = [...new Set(recettes.map(r => r.categorie))];
  categoriesUniques.sort((a, b) => {
    const numA = parseInt(a, 10) || 0;
    const numB = parseInt(b, 10) || 0;
    return numA - numB;
  });
  const categories = ["Toutes", ...categoriesUniques];

  categories.forEach(categorie => {
    const bouton = document.createElement("button");
    bouton.textContent = categorie;
    bouton.classList.add("bouton-filtre");
    if (categorie === categorieActive) {
      bouton.classList.add("actif");
    }
    bouton.addEventListener("click", () => {
      categorieActive = categorie;
      sousCategorieActive = "Toutes";
      creerBoutonsCategories();
      creerBoutonsSousCategories();
      afficherRecettes();
    });
    conteneurFiltres.appendChild(bouton);
  });
}

function creerBoutonsSousCategories() {
  conteneurSousFiltres.innerHTML = "";

  if (categorieActive === "Toutes") {
    conteneurSousFiltres.hidden = true;
    return;
  }

  const sousCategories = [...new Set(
    recettes
      .filter(r => r.categorie === categorieActive && r.sousCategorie)
      .map(r => r.sousCategorie)
  )];

  if (sousCategories.length === 0) {
    conteneurSousFiltres.hidden = true;
    return;
  }

  conteneurSousFiltres.hidden = false;

  ["Toutes", ...sousCategories].forEach(sousCategorie => {
    const bouton = document.createElement("button");
    bouton.textContent = sousCategorie;
    bouton.classList.add("bouton-filtre-secondaire");
    if (sousCategorie === sousCategorieActive) {
      bouton.classList.add("actif");
    }
    bouton.addEventListener("click", () => {
      sousCategorieActive = sousCategorie;
      creerBoutonsSousCategories();
      afficherRecettes();
    });
    conteneurSousFiltres.appendChild(bouton);
  });
}

function creerCarteRecette(recette) {
  const carte = document.createElement("a");
  carte.href = recette.lien;
  carte.target = "_blank";
  carte.rel = "noopener noreferrer";
  carte.classList.add("carte-recette");

  carte.innerHTML = `
    <h2>${recette.titre}</h2>
    <span class="lien-ouvrir">Ouvrir le PDF →</span>
  `;

  return carte;
}

function afficherRecettes() {
  const texteRecherche = champRecherche.value.trim().toLowerCase();

  const recettesFiltrees = recettes.filter(r => {
    const correspondCategorie = categorieActive === "Toutes" || r.categorie === categorieActive;
    const correspondSousCategorie = sousCategorieActive === "Toutes" || r.sousCategorie === sousCategorieActive;
    const correspondRecherche = r.titre.toLowerCase().includes(texteRecherche);
    return correspondCategorie && correspondSousCategorie && correspondRecherche;
  });

  grille.innerHTML = "";
  recettesFiltrees.forEach(r => grille.appendChild(creerCarteRecette(r)));

  messageVide.hidden = recettesFiltrees.length > 0;
}

champRecherche.addEventListener("input", afficherRecettes);
champRecherche.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sauvegarderRecherche(champRecherche.value.trim());
  }
});

creerBoutonsCategories();
creerBoutonsSousCategories();
mettreAJourSuggestions();
afficherRecettes();
