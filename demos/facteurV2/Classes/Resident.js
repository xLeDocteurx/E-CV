class Resident extends People {
  constructor(firstName, lastName, sex, status) {
    super(firstName, lastName, sex, status)
    this.job = Generate.job()
    this.house = ''
  }
}