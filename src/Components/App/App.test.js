
describe('person', () => {
  it('Проверка первого теста', () => {
    const person = {
      name: 'Dima',
      lastName: null,
      setLastName(lastName) {
        this.lastName = lastName
      }
    }

    person.setLastName('Sorokin')
    expect(person.lastName === 'Sorokin').toBeTruthy()
  })
})
