class Postman extends People {
  constructor(firstName, lastName, sex, status) {
    super(firstName, lastName, sex, status)
    this.job = 'Postman'

    this.mailBag = {
      content:[],
    }
    // this.start_tour
  }

  start_tour() {
    let tour_count = 0;
    const mailBag_count = this.mailBag.content.length
    if (this.mailBag.content.length > 0) {
      console.log(`/////////////////////////`)
      console.log(`This is postman "${this.firstName} ${this.lastName}". \n 
                    Starting my mission`)
      city.streets.forEach(element => {
      console.log(`:::::::::::::::::::::::::`)
      console.log(`STREET : ${element.name}`)
        element.houses.forEach(house => {
          console.log(`HOUSE : ${house.number} ${house.street}`)
          let house_mail = this.mailBag.content.filter(letter => {
            return letter.address == `${house.number} ${house.street}`
          })
          console.log(`House mail : ${house_mail}`)
          console.log(house_mail)
          if (house_mail.length != 0) {
            console.log(`Il y a du courrier pour cette maison ! \n
                          Je le met dans la boite aux lettres de la maison`)
            tour_count += 1
            house.mailBox.set_content(house_mail) 
          } else {
            console.log(`Il n'y a rien pour cette maison`)
          }
        })
      })
      console.log(`/////////////////////////`)
    } else {
      console.log(`Je n'ai pas de courrier ! Je ne peux donc pas entamer la course`)
    }
    console.log(`J'ai fini ma tourné.
                  Lettres déposées : ${tour_count} / ${mailBag_count} : récupérées à la poste`)
  }

  get_mail_from_postoffice() {
    console.log(`Je vais chercher le courrier au bureau de poste ! \n
                  Nombre de lettres : ${city.postOffice.mailBox.get_content().length}`)
    this.mailBag.content = city.postOffice.mailBox.get_content()
  }
}