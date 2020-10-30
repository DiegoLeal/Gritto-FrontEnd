import React, { Fragment, useContext } from "react";
import { Grid } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import ptBr from 'dayjs/locale/pt-br'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UsuarioContext } from 'context/UsuarioContext';

function BasicDatePicker() {
  const [postUsuario, setPostUsuario] = useContext(UsuarioContext)

  const handleDateChange = (date) => {
    setPostUsuario({ ...postUsuario, dataNascimento: date })
  }

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locate={ptBr}>
        <Grid item md={4}>
          <KeyboardDatePicker
            autoOk
            clearable
            value={postUsuario.dataNascimento}
            onChange={date => handleDateChange(date)}
            format="dd/MM/yyyy"
            inputVariant="standard"
            style={{ width: '13rem', marginTop: '15px' }}
            variant='inline'
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Fragment>
  )
}

export default BasicDatePicker;
