export const data = [
  [
    {
      type: 'text',
      name: 'cardNumber',
      label: 'Номер карты:',
      testId: 'number_card',
      placeholder: '0000 0000 0000 0000',
    },
    {
      type: 'text',
      name: 'expiryDate',
      label: 'Срок действия:',
      testId: 'date_card',
      placeholder: '01/01'
    },
  ],
  [
    {
      type: 'text',
      name: 'cardName',
      label: 'Имя владельца:',
      testId: 'name_card',
      placeholder: 'CARD HOLDER'
    },
    {
      type: 'password',
      name: 'cvc',
      label: 'CVC:',
      testId: 'key_card',
      placeholder: 'CVC'
    },
  ],
]
