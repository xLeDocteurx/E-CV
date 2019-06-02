class City {
  // Constructeur
  constructor() {
    this.name = ''
    this.streets = []
    this.houses = []
    this.residents = []

    this.postman = []
    this.postOffice = {
      mailBox: {
        content:[],
        get_content: () => ( this.postOffice.mailBox.content ),
        set_content: (letters) => { this.postOffice.mailBox.content = letters },
        add_content: (letter) => { this.postOffice.mailBox.content.push(letter) }
      }
    }
    this.letters = []
    
    this.init()
  }
  // Accesseurs
  get get_name() { return this.name }
  set set_name(name) { this.name = name }

  get get_streets() { return this.streets }
  set set_streets(streets) { this.streets = streets }
  set add_street(street) { this.streets = [...this.streets, street] }

  get get_houses() { return this.houses }
  set set_houses(houses) { this.houses = houses }
  set add_house(house) { this.houses = [...this.houses, house] }

  get get_residents() { return this.residents }
  set set_residents(residents) { this.residents = residents }
  set add_resident(resident) { this.residents = [...this.residents, resident] }

  get get_postman() { return this.postman }
  set set_postman(postman) { this.postman = postman }

  get get_letters() { return this.letters }
  set set_letters(letters) { this.letters = letters }

  //initialisation de la ville :
  init(streets_number, houses_number, residents_number, letters_number) {
    this.set_name = faker.address.city()
    this.set_streets = Generate.streets(streets_number)
    this.set_houses = Generate.houses(houses_number)
    this.set_residents = Generate.residents(residents_number)
    this.set_postman = new Postman()
    this.set_letters = Generate.letters(letters_number)
    this.postOffice.mailBox.set_content(this.get_letters)
  }
}