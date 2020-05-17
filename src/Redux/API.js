export const setRegistration = (action) => {
  return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.payload)
  }).then((res) => res.json())
}

export const setLogin = (action) => {
  return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.payload)
  }).then((res) => res.json())
}

export const setCard = (action) => {
  return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.payload)
  }).then((res) => res.json())
}

export const getCard = (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => res.json())
}

export const getAddressList = () => {
  return fetch('https://loft-taxi.glitch.me/addressList')
    .then((res) => res.json())
}

export const getRoute = (action) => {
  const { address1, address2 } = action.payload

  return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => res.json())
}
