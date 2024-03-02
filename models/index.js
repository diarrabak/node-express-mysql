//Importer les modeles

import Etudiant from "./Etudiant.js";
import Note from "./Note.js";
import Role from "./Role.js";

//Associations

Etudiant.hasMany(Note)
Note.belongsTo(Etudiant)

Role.hasMany(Etudiant)
Etudiant.belongsTo(Role)


export { Etudiant, Note, Role }