// Importer les types de donnees
import { DataTypes } from "sequelize";

//Impoerter la base de donnee (connexion)

import database from "../connexion.js";

//Notre modele (entite ou la table)

const Role = database.define('Role', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

export default Role