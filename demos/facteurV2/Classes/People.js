class People {
  constructor() {
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.sex = Math.floor(Math.random() * 2) ? 'Female' : 'Male'
    this.status = 'Alive'
  }
}