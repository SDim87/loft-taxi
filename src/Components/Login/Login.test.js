describe('test to login', () => {
  const user = {
    login: null,
    pass: null,
  }

  const objLogin = {
    isLoggedIn: false,
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    },
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

  describe('Login', () => {
    it('login to sistem', () => {
      objLogin.login()
      expect(objLogin.isLoggedIn).toBe(true)
    })
  })
})
