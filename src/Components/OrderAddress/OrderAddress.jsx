import React, { useState, useEffect } from 'react'
import {
  Grid, Paper, FormControl, Select, MenuItem, InputLabel, Button
} from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchRoute, fetchAddressList } from '../../Redux/Actions/Actions'
import useStyles from './styles'

const OrderForm = ({ addressList, fetchRoute, fetchAddressList }) => {
  const classes = useStyles()
  const [from, setFrom] = useState('')
  const [where, setWhere] = useState('')

  useEffect(() => {
    fetchAddressList()
  }, [fetchAddressList])

  let isDisabled = true

  if (from && where) {
    isDisabled = false
  }

  const onChangeFromInputHandle = (el) => {
    const address = el.target.value
    const idx = addressList.findIndex((item) => item === address)
    const newAddressList = [...addressList]

    newAddressList.splice(idx, 1)

    setFrom(address)
  }

  const onChangeWhereInputHandle = (el) => {
    const address = el.target.value
    const idx = addressList.findIndex((item) => item === address)
    const newAddressList = [...addressList]

    newAddressList.splice(idx, 1)

    setWhere(el.target.value)
  }

  const onClickGetRoute = (el) => {
    el.preventDefault()

    if (from && where) {
      fetchRoute({ address1: from, address2: where })
    }
  }

  const renderOptions = (arr) => {
    return arr.map((el) => {
      return (
        <MenuItem key={el} value={el}>
          {el}
        </MenuItem>
      )
    })
  }

  return (
    <Paper className={classes.orderForm} elevation={2}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Откуда</InputLabel>
            <Select
              value={from}
              onChange={onChangeFromInputHandle}
              inputProps={{
                'data-testid': 'fromInput',
              }}
            >
              {addressList.length > 0 ? renderOptions(addressList) : null}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Куда</InputLabel>
            <Select
              value={where}
              onChange={onChangeWhereInputHandle}
              inputProps={{
                'data-testid': 'whereInput',
              }}
            >
              {addressList.length > 0 ? renderOptions(addressList) : null}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.btn}
            type="submit"
            variant="contained"
            color="primary"
            onClick={onClickGetRoute}
            disabled={isDisabled}
            data-testid="btn"
          >
            Вызвать такси
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const mapStateToProps = ({ MapData }) => {
  return {
    addressList: MapData.addressList,
  }
}

const mapDispatchToProps = { fetchRoute, fetchAddressList }

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
