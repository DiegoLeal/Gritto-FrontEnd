import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import { cpfMask } from './Mask'
import {UsuarioContext} from '../context/UsuarioContext'

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

const Cpf = () => {
  const [postUsuario, setPostUsuario] = useContext(UsuarioContext)

  const handlechange = (e) => {
    e.preventDefault();
    setPostUsuario({ ...postUsuario, cpf: cpfMask(e.target.value) })
  }

    return (
            <>
                <Grid item md={4}>
                <InputField                               
                    label="CPF"
                    margin="dense"                    
                    size="medium"
                    maxLength='14'
                    placeholder="999.999.999-99"
                    name='cpf'
                    onChange={handlechange}                        
                    style={{width: "13rem"}}   
                    fullWidth                         
                />
                </Grid >             
            </>
        )
}

export default Cpf;