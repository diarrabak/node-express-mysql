import { Router } from "express";

const router=Router()

import { listeNote } from "../controllers/notes.js";

router.get('/', listeNote)


export default router