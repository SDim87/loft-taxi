import React, { useState, useEffect } from 'react'
import {
  Grid,
  Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button
} from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchRoute } from '../../Redux/Actions/Actions'
import useStyles from './styles'


const OrderForm = ({ addressList, fetchRoute }) => {
  const classes = useStyles()
  const [from, setFrom] = useState('')
  const [where, setWhere] = useState('')
  console.log('OrderForm -> where', where)

  const [fromList, setFromList] = useState(addressList)
  const [whereList, setWhereList] = useState(addressList)

  useEffect(() => {

  }, [])


  let isDisabled = true

  if (from && where) {
    isDisabled = false
  }

  const onChangeFromInputHandle = (el) => {
    const address = el.target.value
    const idx = addressList.findIndex((item) => item === address)
    const newAddressList = [...addressList]

    newAddressList.splice(idx, 1)

    setWhereList(newAddressList)
    setFrom(address)
  }

  const onChangeWhereInputHandle = (el) => {
    const address = el.target.value
    const idx = addressList.findIndex((item) => item === address)
    const newAddressList = [...addressList]

    newAddressList.splice(idx, 1)

    setFromList(newAddressList)
    setWhere(el.target.value)
  }

  const onClickGetRoute = (el) => {
    el.preventDefault()

    if (from && where) {
      fetchRoute({ address1: from, address2: where })
    }
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
              {fromList.map((address) => {
                return (
                  <MenuItem key={address} value={address}>
                    {address}
                  </MenuItem>
                )
              })}
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
              {whereList.map((address) => {
                return (
                  <MenuItem key={address} value={address}>
                    {address}
                  </MenuItem>
                )
              })}
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

const mapDispatchToProps = { fetchRoute }

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
