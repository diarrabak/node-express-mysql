//Validation avec nos propres fonctions 

const validerEtudiant = etudiant => {
    const { nom,prenom, naissance,email, mot_de_passe } = etudiant
    const nomRegex = /^[a-zA-Z]+$/
    const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/i
    let estValide = true  //Resultat de la validation reussie
    let erreurs = {}      //Resultat de la validation echouee
    if (!nomRegex.test(nom)) {
        erreurs['nom'] = "Le nom doit contenir seulement des caracteres de l'alphabet"
        estValide = false
    }

    if (!nomRegex.test(prenom)) {
        erreurs['prenom'] = "Le nom doit contenir seulement des caracteres de l'alphabet"
        estValide = false
    }

    if (!mdpRegex.test(mot_de_passe)) {
        erreurs['mdp'] = "Le mot de passe doit contenir ..."
        estValide = false
    }

    if (email) {
        erreurs['email'] = "L'email de passe doit contenir au moins ..."
        estValide = false
    }

    if (naissance==='') {
        erreurs['naissance'] = "La date doit suivre le format DD-MM-YYYY"
        estValide = false
    }



    if (estValide) return estValide
    return erreurs
}

export default validerEtudiant