import { Note } from "../models/index.js";

export const listeNote = async (req, res) => {

    try {
        const result = await Note.findAll()
        res.status(200).json({ data: data })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}