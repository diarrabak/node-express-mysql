//Importer le model etudiant (la table)
import { Etudiant } from "../models/index.js";

//Module pour hacher le mot de passe
import bcrypt from 'bcryptjs'

//Ajout des validations
import { validationResult } from "express-validator";

//Ajout validation a nous meme
import validerEtudiant from "../validations/validationsDeLEtudiant.js";
//La liste de tous les etudiants

export const listeEtudiant = async (req, res) => {

    try {
        const result = await Etudiant.findAll()

        res.status(200).json({ data: result })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


// Ajout d'un etudiant a la table etudiants
export const ajouterEtudiant = async (req, res) => {
    // const etudiantACreer = req.body

    const { nom, prenom, email, mot_de_passe, naissance, RoleId } = req.body

    //Erreurs de validation
   // const resultatDeLaValidation = validerEtudiant(req.body)
   // if (typeof resultatDeLaValidation === 'object') return res.status(400).json({ message: resultatDeLaValidation })


   const errors = validationResult(req) //Fonction par defaut
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })   
   }
    const mdpHache = bcrypt.hashSync(mot_de_passe, 10)

    const etudiant = { nom, prenom, email, mot_de_passe: mdpHache, naissance, RoleId }


    try {
        // Fonction qui cree un nouvel etudiant
        await Etudiant.create(etudiant)

        res.status(201).json({ message: 'Etudiant ajoute avec succes' })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation de l'etudiant" })
    }

}

export const detailsEtudiant = async (req, res) => {
    // Numero de l'etudiant dans la table
    const id = req.params.id

    if (!parseInt(id)) {
        return res.status(404).json({ message: "He, l'id doit toujours etre un entier!" })
    }
    try {
        //Fonction pour recuperer un etudiant avec son numero (id)
        const etudiantATrouver = await Etudiant.findByPk(id)
        res.status(200).json({ data: etudiantATrouver })

    } catch (error) {
        res.status(404).json({ message: "Etudiant non trouve" })
    }
}

export const editerEtudiant = async (req, res) => {
    const { id } = req.params

    //Nouvelles informations a ajouter
    const nouvelInformation = req.body
    try {
        await Etudiant.update(nouvelInformation, { where: { id } })
        res.status(201).json({ message: `Etudiant no ${id} a ete mis a jour avec succes` })


    } catch (error) {
        res.status(400).json({ message: `Etudiant no ${id} n'a pas ete mis a jour` })

    }
}

export const supprimerEtudiant = async (req, res) => {
    const { id } = req.params
    try {
        await Etudiant.destroy({ where: { id } })
        res.status(200).json({ message: `Etudiant numero ${id} supprime avec succes` })

    } catch (error) {
        res.status(400).json({ message: `Etudiant numero ${id} n'a pas ete supprime` })
    }
}
