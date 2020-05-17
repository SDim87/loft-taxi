import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Map from '../Map'
import OrderForm from '../OrderForm'
import { fetchCard } from '../../Redux/Actions/Actions'

const MapPage = ({ fetchCard, token }) => {
  useEffect(() => {
    fetchCard(token)
  }, [])

  return (
    <>
      <Map/>
      <OrderForm/>
    </>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    token: SystemData.tokenUser
  }
}

const mapDispatchToProps = { fetchCard }

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
