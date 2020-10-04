import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import { cpfMask } from './Mask'

const InputField = withStyles({
    root: {                 
         
        "& label.Mui-focused": {            
            color: "#3f51b5",
        },
        "& label": {            
            color: "#a0a0a0",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {               
                borderColor: "#a0a0a0",                
            },
            "&:hover fieldset": {                
                borderColor: "#a0a0a0",
            },                
            "&.Mui-focused fieldset": {               
                borderColor: "#3f51b5",
            },
        },
    },
})(TextField);

class Cpf extends Component {
  constructor(props) {
    super(props)

    this.state = { documentId: '' }
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange(e) {

    this.setState({ documentId: cpfMask(e.target.value) })
  }

  render() {
    const { documentId } = this.state
    return (
            <>
                <Grid item md={4}>
                <InputField                               
                    label="CPF"
                    margin="dense"                    
                    size="medium"
                    maxLength='14'
                    placeholder="999.999.999-99"
                    name='documentId'
                    value={documentId}
                    onChange={this.handlechange}                        
                    style={{width: "13rem"}}                            
                />
                </Grid >             
            </>
        )
    }
}

export default Cpf;