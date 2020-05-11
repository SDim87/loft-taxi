import {
  changeAuthStatus,
  registration,
  registrationData,
  fetchToken,
  login,
  loginData,
  changeCard,
  changeCardData,
  fetchCard,
  fetchCardData
} from './Actions/Actions'


export const middleware = (store) => (next) => (action) => {
  const token = store.getState().SystemData.tokenUser
  const authStatus = store.getState().SystemData.changeAuthStatus

  switch (action.type) {
    case registration.toString():
      fetch('https://loft-taxi.glitch.me/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      }).then((res) => res.json())
        .then((data) => {
          if (data.success) {
            store.dispatch(fetchToken(data.token))
          } else {
            store.dispatch(registrationData(data))
          }
        })
      break
    case login.toString():
      fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload
        })
      }).then((res) => res.json())
        .then((data) => {
          if (data.success) {
            store.dispatch(fetchToken(data.token))
            store.dispatch(changeAuthStatus(!authStatus))
          } else {
            store.dispatch(loginData(data))
          }
        })
      break
    case changeCard.toString():
      fetch('https://loft-taxi.glitch.me/card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...action.payload,
          token
        })
      }).then((res) => res.json())
        .then((data) => {
          if (data.success) {
            store.dispatch(changeCardData(data))
          } else {
            store.dispatch(changeCardData(data))
          }
        })
      break
    case fetchCard.toString():
      fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => res.json())
        .then((data) => {
          store.dispatch(fetchCardData(data))
        })
      break

    default:
      break
  }
  next(action)
}
