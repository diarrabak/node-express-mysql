// Model de l'utilisateur/etudiant
import { Etudiant } from "../models/index.js"

// Le module du hachage
import bcrypt from 'bcryptjs'

// Le module pour la creation du jeton (token)
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {

    const { email, mot_de_passe } = req.body

    // Idealement utiliser une regex pour valider l'email
    if (!email) return res.status(404).json({ message: "L'email est obligatoire!" })
    try {
        //Chercher l'utilisateur dans la base de donnees
        const user = await Etudiant.findOne({ where: { email } })

        if (!user) return res.status(404).json({ message: "Pas d'utilisateur avec cet email" })

        //Verification du mot de passe
        const mdpVerifie = bcrypt.compareSync(mot_de_passe, user.mot_de_passe)

        if (!mdpVerifie) return res.status(400).json({ message: "Mot de passe incorrect" })

        const payload = { id: user.id }

        const token = jwt.sign(payload, process.env.CODE_SECRET)

        res.status(200).json({ data: user, token })


    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}