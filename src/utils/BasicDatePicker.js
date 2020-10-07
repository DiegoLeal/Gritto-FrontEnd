import React, {useState, useContext} from "react";
import { Grid } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,    
  KeyboardDatePicker,
}  from '@material-ui/pickers';
import {UsuarioContext} from '../context/UsuarioContext';

function BasicDatePicker() { 
    const [postUsuario, setPostUsuario] = useContext(UsuarioContext);
    const handleDateChange = (date) => {
      const d = new Intl.DateTimeFormat("ca-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(date);
      setPostUsuario({...postUsuario, dataNascimento: d});
    };

  return (
    
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item md={4}>
          <KeyboardDatePicker
            autoOk
            clearable
            value={postUsuario.dataNascimento}
            onChange={date => handleDateChange()}
            format="dd/MM/yyyy"
            inputVariant="standard"
            style={{width: '13rem', marginTop: '15px'}}

            /*disableToolbar
            format="dd/MM/yyyy"
            label="Data de nascimento" 
            variant="inline"                                                   
            views={["year", "month", "date"]}
            onChange={handleDateChange}
            value={postUsuario.dataNascimento}
            KeyboardButtonProps={{
              'aria-label': 'change date',
          }}
            style={{ width: "13rem" }}*/
          />
        </Grid>
      </MuiPickersUtilsProvider>    
    </>
    
  );
}

export default BasicDatePicker;
