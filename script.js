/* =========================================================
   PASSEPORT NUMÉRIQUE — script.js

   Ce fichier contient, dans l'ordre :
     1. LA CONFIGURATION     → liens, adresse mail, cahier des charges (À MODIFIER)
     2. LES COMPÉTENCES      → titres et consignes (modifiables)
     3. LE FONCTIONNEMENT    → code technique (inutile d'y toucher)

   Règles simples pour modifier sans rien casser :
     - Gardez les guillemets "..." ou les accents graves `...` autour des textes.
     - Gardez la virgule à la fin de chaque ligne ou bloc, comme dans les exemples.
     - Dans les consignes, <strong>...</strong> met un texte en gras.
   ========================================================= */

"use strict";


/* =========================================================
   1. CONFIGURATION — À MODIFIER PAR LE FORMATEUR
   Remplacez chaque valeur entre crochets [ ] par la vraie valeur.
   Tant qu'une valeur commence par « [ », elle s'affiche surlignée
   en jaune sur le site pour vous rappeler de la compléter.
   ========================================================= */
const CONFIG = {

  // Nom affiché en haut de la page
  nomEtablissement: "IRTS Parmentier",
  titrePasseport: "Mon passeport numérique",

  // Adresses des plateformes (commencez par https://)
  urlEcampus: "[URL_ECAMPUS]",
  urlMoodle: "[URL_MOODLE]",
  urlPortailParmentier: "[URL_PORTAIL_PARMENTIER]",   // ex. : "https://www.office.com"

  // Formateur destinataire du document de la compétence 5
  nomFormateur: "[NOM_FORMATEUR]",
  mailFormateur: "[MAIL_FORMATEUR]",

  // À qui s'adresser en cas de problème (identifiants perdus, compte bloqué…)
  contactAide: "[CONTACT_AIDE]",   // ex. : "le secrétariat pédagogique, bureau 12"

  // Compétence 5 : objet du mail et nom du fichier attendus
  objetMail: "Passeport numérique – Document test – Prénom NOM",
  nomFichierWord: "NOM_Prenom_document-test.docx",

  // Compétence 5 : cahier des charges de mise en page (une ligne = une consigne)
  cahierDesCharges: [
    "Une seule page, format A4, orientation portrait.",
    "Marges de 2,5 cm en haut, en bas, à gauche et à droite.",
    "Police Arial, taille 11, pour tout le texte.",
    "En haut à gauche, sur trois lignes : votre prénom et NOM, votre formation et promotion, la date du jour.",
    "Un titre « Mon parcours vers le travail social » : centré, en gras, taille 14.",
    "Un paragraphe de 5 à 10 lignes pour vous présenter et expliquer votre choix de formation, aligné en mode « justifié ».",
    "Une liste à puces de 3 qualités que vous jugez importantes dans votre futur métier.",
    "Interligne de 1,15.",
    "Le numéro de page en bas de la page (pied de page), centré.",
  ],
};


/* =========================================================
   2. LES COMPÉTENCES DU PASSEPORT

   Chaque compétence est un bloc { ... } qui contient :
     id       : identifiant court, unique, sans espace ni accent.
                Ne le modifiez plus une fois le site utilisé par les
                étudiants (il sert à retrouver leur progression).
     titre    : intitulé de la compétence.
     objectif : une phrase qui explique à quoi sert la compétence.
     etapes   : liste des consignes, dans l'ordre (une consigne par ligne).
     astuce   : conseil rassurant affiché sous les consignes (facultatif).

   Pour AJOUTER une compétence : copiez un bloc complet { ... },
   collez-le avant le crochet ] final, puis changez l'id et les textes.

   Outils disponibles dans les textes :
     ${lien(CONFIG.urlMoodle, "Ouvrir Moodle")}  → crée un lien cliquable
     ${mail(CONFIG.mailFormateur)}               → crée une adresse mail cliquable
     ${valeur(CONFIG.nomFormateur)}              → affiche une valeur de la configuration
   ========================================================= */
const COMPETENCES = [

  /* ---------- Compétence 1 ---------- */
  {
    id: "identifiants",
    titre: "Je connais mes identifiants et mots de passe",
    objectif: "Retrouver les identifiants qui vous ont été remis par l'institut et les conserver en lieu sûr. C'est la clé de tous les autres outils.",
    etapes: [
      "Retrouvez le courriel ou le document papier qui vous a été remis à l'inscription avec vos identifiants.",
      "Pour chaque outil (<strong>ecampus</strong>, <strong>Moodle</strong>, <strong>messagerie et Word Parmentier</strong>), repérez l'identifiant et le mot de passe à utiliser. Ils peuvent être identiques ou différents d'un outil à l'autre.",
      "Rangez-les en lieu sûr : un carnet conservé chez vous, ou le gestionnaire de mots de passe de votre téléphone. Évitez le post-it collé sur l'écran.",
      "Si l'on vous demande de changer votre mot de passe à la première connexion, choisissez-en un d'au moins 12 caractères, facile à retenir pour vous (une petite phrase, par exemple), et notez-le aussitôt.",
      "Ne communiquez jamais votre mot de passe, même à un camarade. L'institut ne vous le demandera jamais par mail ni par téléphone.",
    ],
    astuce: `Mot de passe oublié ou compte bloqué ? C'est très fréquent, pas d'inquiétude. Adressez-vous à ${valeur(CONFIG.contactAide)}.`,
  },

  /* ---------- Compétence 2 ---------- */
  {
    id: "ecampus",
    titre: "J'accède à la plateforme ecampus",
    objectif: "Vous connecter à votre espace ecampus et savoir le retrouver facilement.",
    etapes: [
      "Ouvrez votre navigateur internet (Chrome, Firefox, Edge ou Safari).",
      `Cliquez sur ce lien : ${lien(CONFIG.urlEcampus, "ouvrir ecampus")}. Vous pouvez aussi recopier l'adresse dans la barre tout en haut du navigateur.`,
      "Saisissez votre identifiant et votre mot de passe ecampus, puis cliquez sur le bouton de connexion.",
      "Vérifiez que votre nom apparaît à l'écran : vous êtes bien connecté(e).",
      "Ajoutez la page à vos favoris (l'étoile ☆ dans la barre d'adresse) pour la retrouver en un clic.",
      "Parcourez les menus quelques minutes, puis déconnectez-vous, surtout si vous êtes sur un ordinateur partagé.",
    ],
    astuce: "Le mot de passe ne s'affiche pas quand vous le tapez : c'est normal. En cas d'erreur, vérifiez que la touche « Verr. Maj » (majuscules) n'est pas activée.",
  },

  /* ---------- Compétence 3 ---------- */
  {
    id: "moodle",
    titre: "J'accède à la plateforme moodle",
    objectif: "Vous connecter à Moodle, où vous trouverez les cours et documents de votre formation.",
    etapes: [
      `Cliquez sur ce lien : ${lien(CONFIG.urlMoodle, "ouvrir Moodle")}.`,
      "Cliquez sur « Connexion » (souvent en haut à droite), puis saisissez votre identifiant et votre mot de passe Moodle.",
      "Sur votre tableau de bord, repérez l'espace de votre formation ou de votre promotion et cliquez dessus.",
      "Ouvrez un document ou une ressource de votre choix pour vérifier que tout fonctionne.",
      "Ajoutez la page à vos favoris, puis déconnectez-vous si vous êtes sur un ordinateur partagé.",
    ],
    astuce: "Vous ne voyez pas l'espace de votre formation ? Il n'est peut-être pas encore ouvert : signalez-le simplement à votre formateur.",
  },

  /* ---------- Compétence 4 ---------- */
  {
    id: "microsoft",
    titre: "J'accède aux outils Microsoft Outlook et Word via mes accès Parmentier",
    objectif: "Utiliser votre compte Parmentier pour lire vos mails (Outlook) et créer des documents (Word), depuis n'importe quel ordinateur.",
    etapes: [
      `Cliquez sur ce lien : ${lien(CONFIG.urlPortailParmentier, "ouvrir le portail Parmentier")}.`,
      "Connectez-vous avec votre <strong>adresse mail Parmentier</strong> et son mot de passe (et non avec votre adresse personnelle).",
      "Ouvrez <strong>Outlook</strong> (icône bleue avec un « O ») et consultez votre boîte de réception.",
      "Revenez à l'accueil du portail, ouvrez <strong>Word</strong> (icône bleue avec un « W ») et créez un « Document vierge ».",
      "Vérifiez en haut à droite (rond avec vos initiales) que c'est bien votre compte Parmentier qui est affiché.",
    ],
    astuce: "Si un autre compte Microsoft (personnel) s'ouvre automatiquement, utilisez une fenêtre de navigation privée : touches Ctrl + Maj + N (ou Cmd + Maj + N sur Mac), puis reconnectez-vous.",
  },

  /* ---------- Compétence 5 ---------- */
  {
    id: "document-word",
    titre: "Je rédige un document test d'une page respectant un petit cahier des charges de mise en page via Word et je l'adresse via mon mail Parmentier à mon formateur",
    objectif: "Mettre en pratique Word et Outlook : produire un document propre et l'envoyer en pièce jointe, comme vous le ferez pour vos travaux écrits.",
    etapes: [
      "Ouvrez Word (en ligne via le portail Parmentier, ou installé sur votre ordinateur) et créez un document vierge.",
      `Rédigez votre document en respectant ce cahier des charges : ${listeCahierDesCharges()}`,
      `Enregistrez-le sous le nom : <code>${CONFIG.nomFichierWord}</code>. Dans Word en ligne, l'enregistrement est automatique : cliquez simplement sur le titre du document, en haut, pour le renommer.`,
      "Ouvrez Outlook avec votre compte Parmentier et cliquez sur « Nouveau message ».",
      `Dans « À », saisissez l'adresse de votre formateur, ${valeur(CONFIG.nomFormateur)} : ${mail(CONFIG.mailFormateur)}. Dans « Objet », écrivez : <code>${CONFIG.objetMail}</code> (en remplaçant par vos prénom et nom).`,
      "Cliquez sur « Joindre » (trombone 📎) et choisissez votre document, sur votre ordinateur ou dans OneDrive.",
      "Écrivez quelques lignes : « Bonjour », une phrase pour présenter votre envoi, une formule de politesse et votre prénom et nom. Cliquez ensuite sur « Envoyer ».",
      "Vérifiez dans le dossier « Éléments envoyés » que votre message est bien parti, avec sa pièce jointe.",
    ],
    astuce: "La mise en page n'a pas besoin d'être parfaite du premier coup : l'objectif est de découvrir les outils. Dans Word, presque tout se trouve dans l'onglet « Accueil » (police, gras, alignement) et l'onglet « Mise en page » (marges).",
  },

];


/* =========================================================
   3. FONCTIONNEMENT DU SITE
   Code technique : il n'est pas nécessaire de le modifier.
   ========================================================= */

/* ---------- 3.1 Petits outils utilisés dans les consignes ---------- */

// Vrai si la valeur n'a pas encore été remplacée (elle commence par « [ »)
function estACompleter(valeurConfig) {
  return typeof valeurConfig === "string" && valeurConfig.trim().startsWith("[");
}

// Affiche une valeur à compléter surlignée en jaune
function marqueACompleter(valeurConfig) {
  return `<mark class="a-completer" title="À renseigner dans la configuration (script.js)">${valeurConfig}</mark>`;
}

// Crée un lien qui s'ouvre dans un nouvel onglet
function lien(url, texte) {
  if (estACompleter(url)) return marqueACompleter(url);
  return `<a href="${url}" target="_blank" rel="noopener">${texte}<span class="sr-only"> (s'ouvre dans un nouvel onglet)</span></a>`;
}

// Crée une adresse mail cliquable
function mail(adresse) {
  if (estACompleter(adresse)) return marqueACompleter(adresse);
  return `<a href="mailto:${adresse}">${adresse}</a>`;
}

// Affiche simplement une valeur de la configuration
function valeur(texte) {
  return estACompleter(texte) ? marqueACompleter(texte) : texte;
}

// Transforme le cahier des charges de la configuration en liste à puces
function listeCahierDesCharges() {
  const lignes = CONFIG.cahierDesCharges.map((consigne) => `<li>${consigne}</li>`).join("");
  return `<ul class="cahier">${lignes}</ul>`;
}


/* ---------- 3.2 Enregistrement de la progression dans le navigateur ---------- */

const CLE_STOCKAGE = "passeport-numerique-progression";

// État courant : compétences validées (id → date ISO)
const etat = {
  validations: {},
};

let stockageDisponible = true;

function chargerProgression() {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    if (brut) {
      const donnees = JSON.parse(brut);
      etat.validations = donnees.validations || {};
    }
  } catch (erreur) {
    stockageDisponible = false;
  }
}

function enregistrerProgression() {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(etat));
  } catch (erreur) {
    stockageDisponible = false;
    document.getElementById("alerte-stockage").hidden = false;
  }
}


/* ---------- 3.3 Construction de la liste des compétences ---------- */

function construireListe() {
  const liste = document.getElementById("liste-competences");

  liste.innerHTML = COMPETENCES.map((competence, index) => {
    const numero = index + 1;
    const etapes = competence.etapes.map((etape) => `<li>${etape}</li>`).join("");
    const astuce = competence.astuce
      ? `<p class="astuce"><strong>Astuce :</strong> ${competence.astuce}</p>`
      : "";

    return `
      <li class="competence" data-id="${competence.id}">
        <h3 class="competence__titre">
          <button type="button" class="competence__bouton"
                  id="bouton-${competence.id}"
                  aria-expanded="false"
                  aria-controls="panneau-${competence.id}">
            <span class="competence__numero" aria-hidden="true">${numero}</span>
            <span class="competence__libelle">
              <span class="sr-only">Compétence ${numero} : </span>${competence.titre}
            </span>
            <span class="competence__statut"></span>
            <span class="competence__chevron" aria-hidden="true"></span>
          </button>
        </h3>

        <div class="competence__panneau" id="panneau-${competence.id}"
             role="region" aria-labelledby="bouton-${competence.id}" hidden>
          <p class="objectif"><strong>Objectif :</strong> ${competence.objectif}</p>
          <ol class="etapes">${etapes}</ol>
          ${astuce}
          <div class="competence__validation">
            <button type="button" class="bouton btn-valider" data-id="${competence.id}"></button>
            <p class="date-validation" aria-live="polite"></p>
          </div>
        </div>
      </li>`;
  }).join("");

  COMPETENCES.forEach((competence) => mettreAJourCompetence(competence.id));
}


/* ---------- 3.4 Mise à jour de l'affichage ---------- */

function formaterDate(dateIso) {
  const date = new Date(dateIso);
  if (isNaN(date)) return "";
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

// Met à jour l'aspect d'une compétence (validée ou non)
function mettreAJourCompetence(id) {
  const element = document.querySelector(`.competence[data-id="${id}"]`);
  if (!element) return;

  const dateValidation = etat.validations[id];
  const estValidee = Boolean(dateValidation);

  element.classList.toggle("est-validee", estValidee);
  element.querySelector(".competence__statut").textContent = estValidee ? "✓ Validée" : "À faire";

  const bouton = element.querySelector(".btn-valider");
  bouton.classList.toggle("bouton--principal", !estValidee);
  bouton.classList.toggle("bouton--valide", estValidee);
  bouton.textContent = estValidee ? "✓ Compétence validée — annuler" : "Je valide cette compétence";

  element.querySelector(".date-validation").textContent = estValidee
    ? `Validée le ${formaterDate(dateValidation)}`
    : "";
}

// Met à jour le compteur et la barre de progression
function mettreAJourProgression() {
  const total = COMPETENCES.length;
  const validees = COMPETENCES.filter((c) => etat.validations[c.id]).length;
  const pourcentage = total ? Math.round((validees / total) * 100) : 0;

  const pluriel = validees > 1 ? "s" : "";
  document.getElementById("texte-progression").textContent =
    `${validees} compétence${pluriel} sur ${total} validée${pluriel}`;

  document.getElementById("barre-remplissage").style.width = `${pourcentage}%`;
  const barre = document.getElementById("barre-progression");
  barre.setAttribute("aria-valuenow", String(pourcentage));
  barre.setAttribute("aria-valuetext", `${validees} sur ${total}`);

  document.getElementById("message-felicitations").hidden = validees !== total || total === 0;
}


/* ---------- 3.5 Actions de l'utilisateur ---------- */

// Ouvrir / fermer les consignes d'une compétence
function basculerPanneau(bouton) {
  const ouvert = bouton.getAttribute("aria-expanded") === "true";
  bouton.setAttribute("aria-expanded", String(!ouvert));
  document.getElementById(bouton.getAttribute("aria-controls")).hidden = ouvert;
}

// Valider / annuler la validation d'une compétence
function basculerValidation(id) {
  if (etat.validations[id]) {
    delete etat.validations[id];
  } else {
    etat.validations[id] = new Date().toISOString();
  }
  enregistrerProgression();
  mettreAJourCompetence(id);
  mettreAJourProgression();
}

function reinitialiser() {
  const confirmation = window.confirm(
    "Voulez-vous vraiment effacer toute votre progression ?\nCette action est définitive."
  );
  if (!confirmation) return;

  etat.validations = {};
  try {
    localStorage.removeItem(CLE_STOCKAGE);
  } catch (erreur) {
    /* stockage indisponible : rien à effacer */
  }
  construireListe();
  mettreAJourProgression();
}


/* ---------- 3.6 Démarrage ---------- */

function demarrer() {
  // Textes de l'en-tête depuis la configuration
  document.getElementById("nom-etablissement").textContent = CONFIG.nomEtablissement;
  document.getElementById("titre-passeport").textContent = CONFIG.titrePasseport;
  document.title = `${CONFIG.titrePasseport} – ${CONFIG.nomEtablissement}`;

  chargerProgression();
  if (!stockageDisponible) {
    document.getElementById("alerte-stockage").hidden = false;
  }

  construireListe();
  mettreAJourProgression();

  // Un seul écouteur pour toute la liste (ouvrir/fermer et valider)
  document.getElementById("liste-competences").addEventListener("click", (evenement) => {
    const boutonTitre = evenement.target.closest(".competence__bouton");
    if (boutonTitre) {
      basculerPanneau(boutonTitre);
      return;
    }
    const boutonValider = evenement.target.closest(".btn-valider");
    if (boutonValider) {
      basculerValidation(boutonValider.dataset.id);
    }
  });

  document.getElementById("btn-reinitialiser").addEventListener("click", reinitialiser);
}

document.addEventListener("DOMContentLoaded", demarrer);
