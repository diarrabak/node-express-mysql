import { DataTypes } from "sequelize";

import database from "../connexion.js";


const Note = database.define('Note', {
    note: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date: DataTypes.DATE,
    observations: {
        type: DataTypes.TEXT
    }
})


export default Note