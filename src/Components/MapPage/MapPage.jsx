import React from 'react'
import Map from '../Map'
import OrderAddress from '../OrderAddress'


const MapPage = ({ fetchAddressList }) => {
  return (
    <>
      <Map/>
      <OrderAddress/>
    </>
  )
}


export default MapPage
