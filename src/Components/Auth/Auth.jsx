import React from 'react'
import { connect } from 'react-redux'
import { useStyles } from './styles'
import logo from '../../assets/img/logo.png'
import Authentication from '../Authentication'
import Registration from '../Registration'

const Auth = ({ isActiveForm }) => {
  const classes = useStyles()

  return (
    <>
      <article className={classes.login}>
        <img className={classes.logo} src={logo} alt="Логотип" />
        {isActiveForm ? <Authentication /> : <Registration />}
      </article>
    </>
  )
}

const mapStateToProps = ({ SystemData }) => {
  return {
    isActiveForm: SystemData.isActiveForm
  }
}

export default connect(mapStateToProps)(Auth)
