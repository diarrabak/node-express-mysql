import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'

// Importation des routes
import routeEtudiant from './routes/routeEtudiant.js'
import routeNote from './routes/routeNote.js'

// const PORT = dotenv.config().parsed.PORT

// console.log('process',process.env.PORT)
//Import de la base de donnees
import database from './connexion.js'
import routerLogin from './routes/routeLogin.js'
//Creation des tables
database.sync({ alter: true })

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Utilisation des routes

app.get('/api/bonjour', (red, res) => {
    res.send("Bonjour tout le monde")
})

app.use('/api/etudiants', routeEtudiant)
app.use('/api/notes', routeNote)
app.use('/api/login', routerLogin)


app.listen(process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}`))