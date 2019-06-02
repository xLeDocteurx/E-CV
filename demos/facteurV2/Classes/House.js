class House {
  constructor() {
    const streets = city.get_streets
    const street = streets[Math.floor(Math.random() * streets.length)]
    street.add_house = this
    
    this.number = street.get_houses.length
    this.street = street.get_name

    this.residents = []
    this.mailBox = {
      content:[],
      get_content: () => ( this.mailBox.content ),
      set_content: (letters) => { this.mailBox.content += letters },
      add_content: (letter) => { this.mailBox.content.push(letter) }
    }

    //   document.getElementById('body').innerHTML += `
    //   <img class="house-i" src="http://www.xn--icne-wqa.com/images/icones/6/0/go-home-5.png" alt="house"/>
    // `
  }
  get get_residents() { return this.residents }
  set set_residents(residents) { this.residents = residents }
  set add_resident(resident) { this.residents = [...this.residents, resident] }
}
