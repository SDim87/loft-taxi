import React from 'react'
import { connect } from 'react-redux'
import Map from '../Map'
import OrderAddress from '../OrderAddress'
import { fetchAddressList } from '../../Redux/Actions/Actions'

const MapPage = ({ fetchAddressList }) => {
  fetchAddressList()
  return (
    <>
      <Map/>
      <OrderAddress/>
    </>
  )
}

const mapDispatchToProps = { fetchAddressList }
export default connect(null, mapDispatchToProps)(MapPage)
