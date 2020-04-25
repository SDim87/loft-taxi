describe('test to login', () => {
  const user = {
    login: null,
    pass: null,
  }

  beforeAll(() => {
    user.login = 'user'
    user.pass = 'user'
  })

  afterAll(() => {
    user.login = null
    user.pass = null
  })

  it('check obj', () => {
    expect(user).toBeTruthy()
  })

  it('check login user', () => {
    expect(user.login).toBe('user')
  })

  it('check pass user', () => {
    expect(user.pass).toBe('user')
  })
})
