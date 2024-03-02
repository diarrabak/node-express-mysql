//Validation en utilisant express-validator

import { body, check } from "express-validator";
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const etudiantRules = [
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide')
        .isAlpha().withMessage('Le nom contenir seulement des lettres')
        .isLength({ min: 4 }).withMessage('Le nom doit contenir au moins 4 lettres'),
    body('prenom').notEmpty().isLength({ min: 4 }).withMessage('Le prenom ne peut pas etre vide'),
    body('email').isEmail(),
    body('mot_de_passe').matches(mdpRegex).withMessage('Mot de passe ne suit pas les regles'),
    check('naissance', { delimiters: '-' }).not().isEmpty().withMessage("Ceci n'est pas une date")
]

export default etudiantRules