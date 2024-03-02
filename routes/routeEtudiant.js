import { Router } from "express";

const router = Router()

//Importer les controllers

import { listeEtudiant, ajouterEtudiant, detailsEtudiant, editerEtudiant, supprimerEtudiant } from "../controllers/etudiants.js";
import { verifierLogin } from "../authentification/verifierLogin.js";
import { isAdmin } from "../authentification/autorisation.js";
import etudiantRules from "../validations/EtudiantValidations.js";

//Definition des routes

router.get('/',verifierLogin, listeEtudiant)
    .post('/',etudiantRules, ajouterEtudiant)
    .get('/:id',verifierLogin, detailsEtudiant)
    .put('/:id',verifierLogin, editerEtudiant)
    .delete('/:id',verifierLogin, supprimerEtudiant)

export default router