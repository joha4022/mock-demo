class PersonDataAccessObject {
    constructor(database) {
      this.database = database
    }
  
    saveToDatabase(person) {
      this.database.save(person)
    }
  }

  module.exports.PersonDataAccessObject = PersonDataAccessObject;