import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Map from '../Map'
import OrderForm from '../OrderForm'
import { fetchCard } from '../../Redux/Actions/Actions'
import { useStyles } from './styles'

const MapPage = ({ fetchCard, token }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchCard(token)
  }, [])

  return (
    <>
      <Map/>
      <div className={classes.container}>
        <OrderForm/>
      </div>
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
