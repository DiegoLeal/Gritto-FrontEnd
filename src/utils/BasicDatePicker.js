import React from "react";
import { Grid } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,    
  KeyboardDatePicker,
}  from '@material-ui/pickers';

function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item md={4}>
          <KeyboardDatePicker
            disableToolbar
            openTo="year"
            format="dd/MM/yyyy"
            label="Data de nascimento" 
            variant="inline"                                                   
            views={["year", "month", "date"]}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
          }}
            style={{width: "13rem"}}
          />
        </Grid>
      </MuiPickersUtilsProvider>      
    </>
  );
}

export default BasicDatePicker;