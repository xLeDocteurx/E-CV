class Street {
  constructor(name) {
    this.name = `${faker.address.streetName()} ${Generate.streets_suffixes()[Math.floor(Math.random() * Generate.streets_suffixes().length)]}`
    this.houses = []
  }
  get get_name() { return this.name }
  set set_name(name) { this.name = name }
  get get_houses() { return this.houses }
  set add_house(house) { this.houses = [...this.houses, house] }
}