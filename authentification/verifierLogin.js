// Module pour verifier le token
import jwt from 'jsonwebtoken'

export const verifierLogin = (req, res, next) => {
    // Recuperer le token

    const bearerToken = req.headers.authorization

    if (!bearerToken) return res.status(401).json({ message: "Vous devez etre authentifie!" })

    // Extraire le token
    const token = bearerToken.split(' ')[1]

    jwt.verify(token, process.env.CODE_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ message: err.message, notre:"Ici on a un souci" })
        req.userId = payload.id
        next()
    })



}