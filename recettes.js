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
//
// Liste importée automatiquement depuis Google Drive via import-drive.gs
// le 2026-08-26. Les titres viennent des noms de fichiers PDF — un
// nettoyage manuel ponctuel est normal (espaces doubles, noms de sites, etc).

const recettes = [
  {
    titre: "Carpaccio de chou rave au sésame",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1MhXbtZUdT8d-1Mz7hcrs8Q8IodY-1xye/view?usp=drivesdk"
  },
  {
    titre: "carpaccio chou rave",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1fyCG3m2780C_Pl9-dOq1HS9epn8ckduY/view?usp=drivesdk"
  },
  {
    titre: "patates jaunes au miel ric",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1r7F_dk7kU5Cko2AHK8DvicDFY1BMFVdo/view?usp=drivesdk"
  },
  {
    titre: "Frites maison chaudron",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1v2K-Fy7xCLAolcSXdgDFARvoLonZnbab/view?usp=drivesdk"
  },
  {
    titre: "Chips de kale   Josée di Stasio",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1JR48_W-r3yFiVYvC4vPp_-N5abeKzYVn/view?usp=drivesdk"
  },
  {
    titre: "sauté de pois mange tout aux graines de sésame",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1dJLOCoPOBN3iz_lp4hVdtwSVwtgN6eEp/view?usp=drivesdk"
  },
  {
    titre: "Dips de légumes (topinambour et betterave rouge) | BelOrta",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1svDN8yl7DM17yiK7Sa9-O86QxHW5Z3wu/view?usp=drivesdk"
  },
  {
    titre: "vinaigrette asiatique",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1AegI96HduMFf4Q0Y1Jffj0DaaZVP-SF2/view?usp=drivesdk"
  },
  {
    titre: "legumes racines marinés érable ail romarin",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/12lh91iCjewIkJFTefzzIULyJnsOYUbm6/view?usp=drivesdk"
  },
  {
    titre: "purée haricots",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1YbHo6Hca5mVxS2MSpO-cm3LXwoh_2slP/view?usp=drivesdk"
  },
  {
    titre: "radis marinés DiStasio",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1rEhAy9naNo5dXoso8hYc0h76adMkcZTM/view?usp=drivesdk"
  },
  {
    titre: "Beignets aux tomates",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/14uWV2CCH-By5hdVsBcZIve0Y00dDdSOw/view?usp=drivesdk"
  },
  {
    titre: "Patates douces farcies au cheddar",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/15n_bOha--rMH-ek2cRTZHrkb2dkhRq5i/view?usp=drivesdk"
  },
  {
    titre: "Dattes farcies au fromage bleu",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/17WZdp8MyWE9v3tKa0kducRSbTIa7uV42/view?usp=drivesdk"
  },
  {
    titre: "brie chaud raisins porto",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1OORhyD-C-ib_OdKr9plk-PAI1G2GG3rY/view?usp=drivesdk"
  },
  {
    titre: "Trempette au cari",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1ZaSH4ijkl3FyAvXNogCuYGbixY0Q62JG/view?usp=drivesdk"
  },
  {
    titre: "Purée de patate douce et maïs",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1tDSwXjGfGzsS0VJCdJWWLc5PpCGBEjnm/view?usp=drivesdk"
  },
  {
    titre: "Ailes de chou fleur sauce miel & moutarde",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1vXRM-ptf48mljAx_mPK6kmaG6Iy-5_1E/view?usp=drivesdk"
  },
  {
    titre: "Ketchup aux fruits à la québécoise",
    categorie: "3. Entrées, salades, encas, accompagnements",
    lien: "https://drive.google.com/file/d/1z__ke0sTGEgWRP2-X0E99EmzT1y_DKhM/view?usp=drivesdk"
  },
  {
    titre: "Recette de salade de poulet à l'estragon dans un bol   Zeste",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1xKslFOmx9QvM_Q39DqBF6rrILmdFCEL5/view?usp=drivesdk"
  },
  {
    titre: "Salade de chou Di Stasio",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1-HyzdDyFcugrFUH0Jf-fwaqTfu7oFBXP/view?usp=drivesdk"
  },
  {
    titre: "Salade de pâtes, d'asperges et de bocconcinis",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1TqbHVR1-z1oLjFNuKXybwJVb3Fwk9Exq/view?usp=drivesdk"
  },
  {
    titre: "Salade de pâtes à la grecque",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1_ZQPCOySwosW9_n4UPLvPXaDaAQK6AZA/view?usp=drivesdk"
  },
  {
    titre: "Salade d'edamame aux poivrons grillés et aux bocconcinis",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1cIEYHedPc4xQWYDargAPz6Gq3NKB5hhG/view?usp=drivesdk"
  },
  {
    titre: "Salade de pois chiches, poivrons rôtis, haricots verts et amandes",
    categorie: "3. Entrées, salades, encas, accompagnements",
    sousCategorie: "salades",
    lien: "https://drive.google.com/file/d/1uPuZNUG6UmGrn0gul_k9Rr6F_FCG4RgZ/view?usp=drivesdk"
  },
  {
    titre: "Galettes pattes d ours",
    categorie: "8. Desserts",
    lien: "https://drive.google.com/file/d/11Fbk1QFrAp0L_JqUBrFZ-JTV4kWsg110/view?usp=drivesdk"
  },
  {
    titre: "Biscuits double chocolat",
    categorie: "8. Desserts",
    lien: "https://drive.google.com/file/d/1F3imcnfwThc2ZeLOgS2yUBOVLWjRgpRv/view?usp=drivesdk"
  },
  {
    titre: "No Bake Nutella S'mores Granola Bars   Inside BruCrew Life",
    categorie: "8. Desserts",
    lien: "https://drive.google.com/file/d/1hmhpNHjFmS3ZZVAu4JISMEkJ-4CUjGEz/view?usp=drivesdk"
  },
  {
    titre: "caramel salé",
    categorie: "8. Desserts",
    lien: "https://drive.google.com/file/d/1Bsepq5C_TLMThPbyl7HIC4ePMRjN15Nv/view?usp=drivesdk"
  },
  {
    titre: "Pâte à pizza   Josée di Stasio",
    categorie: "7. Pizza et tartes salées",
    lien: "https://drive.google.com/file/d/1T3tyg9YliYIjFSSIirgBFKGpdXWHxBRC/view?usp=drivesdk"
  },
  {
    titre: "Sauce à pizza",
    categorie: "7. Pizza et tartes salées",
    lien: "https://drive.google.com/file/d/1YTENotVW2rRxxYCgLT_Lt2oKXsF2j4Wc/view?usp=drivesdk"
  },
  {
    titre: "Special Scalloped Corn Recipe   Taste of Home",
    categorie: "7. Pizza et tartes salées",
    lien: "https://drive.google.com/file/d/1-qU7coevrzXnYfFehqL8Le7IkTpMXcK2/view?usp=drivesdk"
  },
  {
    titre: "muffin simple",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1xCaRgtozYKjmUZf6igf2BTCxavtPF8nM/view?usp=drivesdk"
  },
  {
    titre: "pain courgette+dattes+noix",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/145Jw5CoSz7ieb_BIwIN3LfqvSV9nQahH/view?usp=drivesdk"
  },
  {
    titre: "pain bleuets cannelle sur le feu",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1iE_4vn1Sb_4rIINIyjFGAQLCXZZ3QYT1/view?usp=drivesdk"
  },
  {
    titre: "Fèves au lard sans lard",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1GW976SdNiM1sOoFmgeodsE11e3h1rR9G/view?usp=drivesdk"
  },
  {
    titre: "Recette de pain",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1LQzxV1Nb2vaTJvaXcpx9YpzRrQtBgnM3/view?usp=drivesdk"
  },
  {
    titre: "Cretons de chorizo",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1ZK51k1uRPYm-ldQnEYvVJrrss47dn4Wv/view?usp=drivesdk"
  },
  {
    titre: "Fèves au lard au sirop d'érable à la mijoteuse",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1jd85mODr5S5xQ4K7S3YYQp1uQUhhtqtT/view?usp=drivesdk"
  },
  {
    titre: "Morning Glory Muffins   Sally s Baking Addiction",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1lm3jKpn5FCHwwN5K3h5J4Js_dfqlyMAD/view?usp=drivesdk"
  },
  {
    titre: "Zucchini Muffins with Chocolate Chips   Once Upon a Chef",
    categorie: "1. Déjeuners et collations",
    lien: "https://drive.google.com/file/d/1yKT6w4U2ZqwRqC2yQc5nxSs6jXd3cKtz/view?usp=drivesdk"
  },
  {
    titre: "Kébab de boeuf épicé",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Boeuf",
    lien: "https://drive.google.com/file/d/1riCqsG-BoeuEO9fuv_TM9dL19cOJJHZ8/view?usp=drivesdk"
  },
  {
    titre: "Tartare de bœuf de base | Mordu",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Boeuf",
    lien: "https://drive.google.com/file/d/1RUW_Mzb-Pd4pB5kYRQqBoBUYg3gy37pn/view?usp=drivesdk"
  },
  {
    titre: "Steak Diane   intérieur de ronde simple",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Boeuf",
    lien: "https://drive.google.com/file/d/1SF9bwKlAUHymHNakVJyCGQvnD5OPfpnB/view?usp=drivesdk"
  },
  {
    titre: "Recette   Pilons de poulet aux épices et frites au four   Josée di Stasio",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1YyggZWzvF1LWaJ-v3fQMdCTvodUQQ-hN/view?usp=drivesdk"
  },
  {
    titre: "Chaudrée poulet, maïs et chorizo",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1rcPqDSFRoJ6_YNj136M2mJOQgRQc06sh/view?usp=drivesdk"
  },
  {
    titre: "Poulet citron olives",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1E_JEwTx_kkj2xYanNEgku2LLxCuuT5wH/view?usp=drivesdk"
  },
  {
    titre: "Poulet à la mexicaine",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1A0kmcbvDQdEqsYR_Z8JKmVRBebfjMint/view?usp=drivesdk"
  },
  {
    titre: "Cari de poulet   Recettes simple",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1Xqb6-s93NyVE5UxnTwWdBwHO2DTuu-M-/view?usp=drivesdk"
  },
  {
    titre: "Poulet au beurre (le meilleur)   RICARDO",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1Y2yf4QbpTbA7_gP64WlGY9xFRTdn8E0L/view?usp=drivesdk"
  },
  {
    titre: "Poulet grillé à la portugaise (le meilleur)   RICARDO",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poulet",
    lien: "https://drive.google.com/file/d/1gxy8xtowvdyrws8MqhgXT9ypkO1KTzfC/view?usp=drivesdk"
  },
  {
    titre: "tacos al pastor steven raichland 2",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1-x_ayzBByq9egepd8ICz2UPi9yV3SZG2/view?usp=drivesdk"
  },
  {
    titre: "tacos al pastor 1ere 2",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1zlLTdPaT-EfAg2QBQZESi8ram4a1KQJI/view?usp=drivesdk"
  },
  {
    titre: "Pâtes soba aux arachides et au poulet",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1skPMLSQdvZ5AIp3ygSMT1rroqsjOHjsT/view?usp=drivesdk"
  },
  {
    titre: "Mexican Barbacoa Beef   Mijoteuse",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/105jAqVQ92Eq_IMhBVVFbg07ZKrUZneLu/view?usp=drivesdk"
  },
  {
    titre: "Sandwichs bánh mì 2",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1Dh2tVl2_TgmMyuJIteHZ_KWV1Gor89WF/view?usp=drivesdk"
  },
  {
    titre: "Tacos de carnitas à la mijoteuse   PLANbouffe",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1cKoEC5_XEGZDNBIuNsGVvM8VVSZ_cNoX/view?usp=drivesdk"
  },
  {
    titre: "Carnitas (Mexican Slow Cooker Pulled Pork)   RecipeTin Eats",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1iVOPYQLaR-gZAtFmSbEioBvKAT-PA9Ys/view?usp=drivesdk"
  },
  {
    titre: "Sandwich vietnamien Banh mi 1",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Mexicain_oriental",
    lien: "https://drive.google.com/file/d/1l5kcLlL3WDa3lV_NIYdmkrgpF2RzlrIz/view?usp=drivesdk"
  },
  {
    titre: "Plaque de crevettes, de bacon & de maïs épicé   Trois fois par jour",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poissons_fruits-mer",
    lien: "https://drive.google.com/file/d/1-_WAPvs9KbYjUcgJvfQVahkrZbPFEVZ5/view?usp=drivesdk"
  },
  {
    titre: "saumon en croute d epices",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Poissons_fruits-mer",
    lien: "https://drive.google.com/file/d/1Pm1TuoY4MhEDXyi4ZuUXxTdMIKWi1gU3/view?usp=drivesdk"
  },
  {
    titre: "Filet de porc agrume érable",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1KKDdhqpSBfmxaGLXtUMP2KXGHJNvCS98/view?usp=drivesdk"
  },
  {
    titre: "épaule picnic mijoteuse au whisky",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1SvbfJs2Gzeq0hK83yI3i-x2xkK0pJpJR/view?usp=drivesdk"
  },
  {
    titre: "Longe de porc à l'érable et au romarin | Érable du Québec",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1x_NLXsbZlMh6NgpNK7aMz7Hdm9mFwy1-/view?usp=drivesdk"
  },
  {
    titre: "Gyros de porc grillé et tzadiki",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1pulT9bRn8i0_L8jdhOVixq8SnEKSYTKC/view?usp=drivesdk"
  },
  {
    titre: "Longe de porc à l'érable et au romarin",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1U2gxaTUIT6QV2vvu4mV_uDd1ZUUFGKSV/view?usp=drivesdk"
  },
  {
    titre: "Burgers de porc côtes levées",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1bbgpeM7LlMfQs4dwGNkQ857FWVtFJ5yo/view?usp=drivesdk"
  },
  {
    titre: "Porc sauté au caramel",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/13OuM4XIP-l0aOUIWWqPXgtBNo7INTs2l/view?usp=drivesdk"
  },
  {
    titre: "Filets de porc glacés à l érable",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/14DWyE7O__Tsngqisz1GUJYa8iNJdexJ3/view?usp=drivesdk"
  },
  {
    titre: "Pork Schnitzel Recipe   NatashasKitchen.com",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/166sH7cEtg7yvwp4mpq5BDnV3xsdyoBCz/view?usp=drivesdk"
  },
  {
    titre: "Porc effiloché mexicain Mijouteuse",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1DOsYEWW1AEyCqiCj9tDVEdDrGy1imEsm/view?usp=drivesdk"
  },
  {
    titre: "Porc effiloché asiatique à la mijoteuse",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1SKvfwyfKGLQLyqhHOztp3MDYqIqB55nO/view?usp=drivesdk"
  },
  {
    titre: "Porc effiloché de Marilou (à la mijoteuse)",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1qWy92S-NLRJYGuJ0F3ClqzEU4snn8Kcv/view?usp=drivesdk"
  },
  {
    titre: "Hot dogs laqués à l asiatique",
    categorie: "4. Plats principaux – Viandes et poissons",
    sousCategorie: "Porc",
    lien: "https://drive.google.com/file/d/1szY8lwuZ0yUCjCq28_8Zw-7EQpeFC6fc/view?usp=drivesdk"
  },
  {
    titre: "riz frit vide frigo",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1BnaZJhfMZ5y-4m6BY8iNjZJJdbRwRItp/view?usp=drivesdk"
  },
  {
    titre: "Pâtes crémeuses au saumon et au brocoli",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/12MpbFXoT-M8ISFn7f_y-SlH3ykt9cT5g/view?usp=drivesdk"
  },
  {
    titre: "Pâtes au citron et au parmesan",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1CpbjrRQQnwO4CzEHqC2hEYnWIoAmOsyt/view?usp=drivesdk"
  },
  {
    titre: "boulettes à l italienne",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1KSLPH-0liV2nlvUsPJ-CAK9nDP4M_F8o/view?usp=drivesdk"
  },
  {
    titre: "Macaroni au fromage «full cool»",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1MXKXna0iw-PgYXTlEE7bJ9Ym8PLSqrJ8/view?usp=drivesdk"
  },
  {
    titre: "Mac n'cheese  à la patate douce et au chou fleur",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1OhmDYbgn-jHSq6jPEnZDaLcscnZ7FoQp/view?usp=drivesdk"
  },
  {
    titre: "Sauce à spaghetti express de Marilou   Trois fois par jour",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1rYagBMjjzTuuf0sZonmN4G7nEHZw48-0/view?usp=drivesdk"
  },
  {
    titre: "Risotto Recipe for Beginners",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1EkI8QvbB25Y_CQuK9OuBY5YI506NrBHz/view?usp=drivesdk"
  },
  {
    titre: "Risotto saucisses et cidre",
    categorie: "6. Pâtes, riz, risottos et plats d'inspiration italienne",
    lien: "https://drive.google.com/file/d/1_AZfCeyESMjNMzCFO7dpqR5NX8SU_boT/view?usp=drivesdk"
  },
  {
    titre: "Poutine à la plaque   Savourer x Mordu",
    categorie: "5. Plats principaux – Végétariens",
    lien: "https://drive.google.com/file/d/1AXbIx5Qfg3AjYj4Ys1ebCbWn697kDlpL/view?usp=drivesdk"
  },
  {
    titre: "bol egg roll tempeh",
    categorie: "5. Plats principaux – Végétariens",
    lien: "https://drive.google.com/file/d/186Ct8548epL5uuODxy4O5xCMi8Mn28rk/view?usp=drivesdk"
  },
  {
    titre: "rouleaux de printemps",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/11xhzh2igWNg-zpovgmtBj5JxZsZPZpOb/view?usp=drivesdk"
  },
  {
    titre: "Burritos végés",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/14l8mQU6efToC3zzFmx4DrKX4LnyCoHSp/view?usp=drivesdk"
  },
  {
    titre: "tacos pois chiche salsa fraise et melon",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/1UJdbEpSrna3p2JjxEEaZfOViY_sg6hA6/view?usp=drivesdk"
  },
  {
    titre: "Pita aux pois chiches « taouk »",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/1h3sEvzn2uAfLixCv161ulh8SnVUaG0UW/view?usp=drivesdk"
  },
  {
    titre: "Vegan Quesadillas",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/1hG60Ts_ejQ-mSgo1-5JjEIStZAsOAqsW/view?usp=drivesdk"
  },
  {
    titre: "Burritos mexicains",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Mexicaine_asiatique",
    lien: "https://drive.google.com/file/d/1zgrJvUqaqJfIdDoHaVcE1YRjohnbn5dV/view?usp=drivesdk"
  },
  {
    titre: "Tacos tofu coréen",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1dtKREInzBkZTBXz7_ll0K1QWb_FKx-nm/view?usp=drivesdk"
  },
  {
    titre: "Brochettes de tofu à la coréenne   Mordu",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/17rYj940-RBT8jOJU2wDt0AXBvNf_cTjr/view?usp=drivesdk"
  },
  {
    titre: "Sauté de tofu au sésame   sauce",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1TD3SoiJIpbRnnuI1fHck_EzSYkyJQ4TO/view?usp=drivesdk"
  },
  {
    titre: "VEGAN MISO GARLIC BAKED TOFU RECIPES - Plant Based And Vegan",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1-jS5F3-OE_SNZ3c7i_p-nugD_SQht5Xg/view?usp=drivesdk"
  },
  {
    titre: "Pain de viande et tofu sauce barbecue",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/168ckHTco9GDL8iP2J59SvJYU75QmFqMX/view?usp=drivesdk"
  },
  {
    titre: "Tofu caramélisé à l'érable",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/19I4csbHaqdcs0Ji-y4Nror-a4c0ntXaZ/view?usp=drivesdk"
  },
  {
    titre: "Tofu barbecue et frites au four",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1AZ-OwMRy0MgL69nPk4pcz9znHwtk0oXj/view?usp=drivesdk"
  },
  {
    titre: "Tofu caramélisé aux graines de citrouille",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1Ek_iQlLbkEl1LrYlhSxF1wJ2Kpc36Juc/view?usp=drivesdk"
  },
  {
    titre: "Tofu au miso et à la tomate",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1OVDLiR6Z_wQNARoOIonFnKuRk860phMW/view?usp=drivesdk"
  },
  {
    titre: "Tofu au beurre",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1QRaQnMuJK_MnAm1ozHj5V7GQa8S77ikx/view?usp=drivesdk"
  },
  {
    titre: "Quesadilla au Tofu Tex Mex",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1TAfeYKLHT_bVza1z3hKLD0mS2OauZWMS/view?usp=drivesdk"
  },
  {
    titre: "Boulettes de tofu pizza",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1_1AdPRi_CUU3iiL3zl6G-CZPXwOCYppp/view?usp=drivesdk"
  },
  {
    titre: "Sauté de tofu au cari",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1a7lCy3UYO1kW2CogbIm9NsXT3PePwrPX/view?usp=drivesdk"
  },
  {
    titre: "Tofu croustillant et haricots verts",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1dratta53kdl_A72wi4Jrp0h7CyUiftRF/view?usp=drivesdk"
  },
  {
    titre: "Tofu magique selon Loounie",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1oXfViC35dT5VYiBsBIGaufWhQVbQ-9J3/view?usp=drivesdk"
  },
  {
    titre: "Tofu korma   Deliacious",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1vvDB_-gusIsyiPedT7ln23nNFqr_6q6B/view?usp=drivesdk"
  },
  {
    titre: "Tofu Général Tao",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1yXSaK8ZGn_O-2Py8MgKI2IH6bvPpXXOb/view?usp=drivesdk"
  },
  {
    titre: "Burgers au tofu pané",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/138HojNuenEtEAkqrDZOiQlow_KuFKPuS/view?usp=drivesdk"
  },
  {
    titre: "Quésadilla au tofu à la plaque   Cuisinez   Télé Québec",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "tofu",
    lien: "https://drive.google.com/file/d/1J8WO7JH3ejSap50FxZGjLnhPKQpilQ19/view?usp=drivesdk"
  },
  {
    titre: "Macaroni végétarien «avec pas de viande»",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Pâtes",
    lien: "https://drive.google.com/file/d/1yGujs5xO-SSQm-3O2DrpRwSvSKIfvnfA/view?usp=drivesdk"
  },
  {
    titre: "Pad thaï   Mordu",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1HDM_90nztPns2pLxwCKz8vYTGN2BUwl7/view?usp=drivesdk"
  },
  {
    titre: "Lasagne crémeuse aux légumes rôtis",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/10tYW5KN4Cgi7oyawjzH_izGkm00Q_iHh/view?usp=drivesdk"
  },
  {
    titre: "Recette curry de chou fleur au lait de coco",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1syzVIHaLkpizdC1GVvGp7U4vvBmPFdbH/view?usp=drivesdk"
  },
  {
    titre: "paté chinois aux légumes",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/13Ycey-RTR-01hbsbJou8elfnuaBgkHKY/view?usp=drivesdk"
  },
  {
    titre: "Chow mein",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1R9GFM0bEfhY7nT4wuxkjG3L55GZoCb9t/view?usp=drivesdk"
  },
  {
    titre: "Chow mein aux légumes   Cuisinez   Télé Québec",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1dqmJhu4m_ftZD4PblbDQPsMn7_Vw4zi5/view?usp=drivesdk"
  },
  {
    titre: "Tourte végé au quinoa et à la patate douce",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1prIknH3AInNaQJbLddtUklBSfrfjFQUM/view?usp=drivesdk"
  },
  {
    titre: "Gratin dauphinois à la patate douce",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Legumes",
    lien: "https://drive.google.com/file/d/1TAQXSyyrxBvKZES58uY9YjsGpqRz6Ir1/view?usp=drivesdk"
  },
  {
    titre: "Cari de lentilles et de courge",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Légumineuses",
    lien: "https://drive.google.com/file/d/1-xGqJ_8Xl5-BH18iMgBHaXvWAMopIyqB/view?usp=drivesdk"
  },
  {
    titre: "Burger aux lentilles",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Légumineuses",
    lien: "https://drive.google.com/file/d/1QcXvPc8thKZSTyf4IeRzLtdYBJbt1nyt/view?usp=drivesdk"
  },
  {
    titre: "Pain de viande végétarien",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Légumineuses",
    lien: "https://drive.google.com/file/d/1V93nXC1_pqp71LCL3hXibDHmma5Vaxsg/view?usp=drivesdk"
  },
  {
    titre: "Chili végétarien cuisine futé",
    categorie: "5. Plats principaux – Végétariens",
    sousCategorie: "Légumineuses",
    lien: "https://drive.google.com/file/d/1kF5uXQ4smHucM_fJ9sCbkzU2X8F8z45Q/view?usp=drivesdk"
  },
  {
    titre: "soupe gourganes AG",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1I2Ixc9vU6f_ZiLiP3lVqmS9S6WUggY1G/view?usp=drivesdk"
  },
  {
    titre: "soupe wonton citronnelle+anis",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1ZZoaOHWE8mddgu4pmlqoMoTJ_NZnBQ5G/view?usp=drivesdk"
  },
  {
    titre: "soupe gourgane AudreyGirard",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1WTwz_1OBfpY8vkoeF321FF6PRfwEGsZJ/view?usp=drivesdk"
  },
  {
    titre: "Chaudrée de maïs, bacon & Kale",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1-HAfqdUSDzHCb4LMzQ9HVihDWPI0iU8C/view?usp=drivesdk"
  },
  {
    titre: "Soupe de lentilles à la courge et au lait de coco",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1mrGrhLNkZuxhWyodb0O7lZREDNkcNJf-/view?usp=drivesdk"
  },
  {
    titre: "Soupe aux gourganes du Lac",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1xQlbJkdcaeHV0tYATMQMucxgR3w3wM5-/view?usp=drivesdk"
  },
  {
    titre: "Soupe Minestrone et pesto",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1-w_JZ0JQInG-RVklk5ZI8pSwlDrXCyWi/view?usp=drivesdk"
  },
  {
    titre: "Soupe à l'orge et aux légumineuses",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1Frb-Fwv1JlQ3wOsIfaFe3ck1mhSBNwSv/view?usp=drivesdk"
  },
  {
    titre: "Crème de carottes, patates douces et gingembre",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1gsUQK31wpSVYfjK_z35EKaF7Fum7dEzv/view?usp=drivesdk"
  },
  {
    titre: "Soupe ramen au tofu",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1j_VX3bcSxJ-0dxBK4YWckRRfyKmFLLX4/view?usp=drivesdk"
  },
  {
    titre: "Soupe asiatique à la coriandre",
    categorie: "2. Soupes et potages",
    lien: "https://drive.google.com/file/d/1xvmLUXh8PZIwPzp9F7PXa6MyRN2EKhk2/view?usp=drivesdk"
  },
  {
    titre: "Poutine à la plaque   Savourer x Mordu",
    categorie: "Autres",
    lien: "https://drive.google.com/file/d/1gq8_R2-pqEJdLYfwdJi10E-mvjUhNv4-/view?usp=drivesdk"
  }
];
