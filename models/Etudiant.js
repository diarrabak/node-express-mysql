// Importer les types de donnees
import { DataTypes } from "sequelize";

//Impoerter la base de donnee (connexion)

import database from "../connexion.js";

//Notre modele (entite ou la table)

const Etudiant = database.define('Etudiant', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    naissance: {
        type: DataTypes.DATEONLY,
    },
    email: {
        type: DataTypes.STRING
    },
    mot_de_passe: DataTypes.STRING

})

export default Etudiant