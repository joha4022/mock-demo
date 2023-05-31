//original - change all undefined to make it work
// const { PersonDataAccessObject } = require('./index');

// describe('the PersonDataAccessObject', () => {
//   it('calls the function that would save Ada Lovelace to the database', () => {
//     /* Arrange */
//     const mockSaveMethod = undefined;
//     const mockDatabase = undefined;
//     const personDataAccessObject = new PersonDataAccessObject(undefined)

//     const expectedArgument = {firstName: 'Ada', lastName: 'Lovelace'}

//     /* Act */
//     personDataAccessObject.saveToDatabase(expectedArgument);

//     /* Assert */
//     expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
//   })
// })

const { PersonDataAccessObject } = require('./index');

describe('the PersonDataAccessObject', () => {
  it('calls the function that would save Ada Lovelace to the database', () => {
    /* Arrange */
    const mockSaveMethod = jest.fn(person => this.person = person);
    const mockDatabase = {save: mockSaveMethod};
    const personDataAccessObject = new PersonDataAccessObject(mockDatabase)

    const expectedArgument = {firstName: 'Ada', lastName: 'Lovelace'}

    /* Act */
    personDataAccessObject.saveToDatabase(expectedArgument);

    /* Assert */
    expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
  })
})