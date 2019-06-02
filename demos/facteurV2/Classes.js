class Generate {
  static report() {
    console.log(`/////////////////////////`)
    console.log(`:::::::::::::::::::::::::`)
    console.log(`CITY REPORT :`)
    console.log(`:::::::::::::::::::::::::`)
    console.log(city)
    console.log(`:::::::::::::::::::::::::`)
    console.log(`/////////////////////////`)
    document.getElementById("CityName").innerText = city.name
    document.getElementById("houseCount").innerText = city.houses.length
    document.getElementById("lettersCount").innerText = city.letters.length
    document.getElementById("streetsCount").innerText = city.streets.length

  }

  static getDatas() {
    // Fetch method used for SWAPI.
    let people = fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(function(data){
        return data.results
    })
    .catch( e => console.log(e) )
    people.then(data => console.log(data))
    return people
  }
  
  static streets(number) {
    let streets = []
    for (let i=0;i<number;i++) { 
      streets.push(new Street())
    }
    return streets
  }

  static streets_suffixes() {
    return ['Street','Avenue','Road']
  }
  
  static houses(number) {
    let houses = []
    for (let i=0; i<number; i++) { 
      houses.push(new House())
    }
    return houses
  }
// some_city.get_streets[Math.floor(Math.random() * some_city.get_streets.lengths)]

  static residents(number) {
    let residents = []
    for (let i=0;i<number;i++) {
      residents.push(new Resident())
    }
    return residents
  }

  static letters(number) {
    let letters = []
    for (let i=0;i<number;i++) {
      let house = city.houses[Math.floor(Math.random() * city.houses.length)]
      let address = `${house.number} ${house.street}`
      let content = faker.lorem.paragraph()
      letters.push(new Letter(address, content))
    }
    return letters
  }

  static job() {
    const jobs = ['Electricien','Plombier','Infirmier','Conducteur d\'engins','Dentiste','Pompier','Gendarme','Informaticien','Policier','Docteur','Boulanger','Bibliothèquère']
    return jobs[Math.floor(Math.random() * jobs.length)]
  }
}