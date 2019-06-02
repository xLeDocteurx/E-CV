let streets_number = 20
const houses_number = streets_number * 5
const residents_number = Math.round(houses_number * 1.25)
let letters_number = Math.round(Math.random() * residents_number)

// Instanciation de la nouvelle ville
let city = new City()
// Déclenchement de la méthode d'initialisation de la ville
// city.init(streets_number, houses_number, residents_number, letters_number)
// Créer un report pour pouvoir surveiller la génération de la ville
const report = () => {
Generate.report()
city.init(streets_number, houses_number, residents_number, letters_number)
console.log(streets_number)
console.log(houses_number)
console.log(residents_number)
console.log(letters_number)
}

// Déclenchement du facteur

const getMail = () => {
    city.postman.get_mail_from_postoffice()
}

const startTour = () => {
    city.postman.start_tour()
}