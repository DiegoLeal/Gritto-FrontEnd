import React, { useContext } from 'react';
import { Grid, NativeSelect, InputLabel, FormControl } from '@material-ui/core';
import { UsuarioContext } from 'context/UsuarioContext';

export default function Services() { 
   
    const [postUsuario, setPostUsuario] = useContext(UsuarioContext)

    const handleChange = (event) => {
      event.preventDefault();
      setPostUsuario({ ...postUsuario (event.target.value) })
    }    
       
    return (
         <>                          
            <Grid item md={4}>
                <FormControl>
                    <InputLabel>Profissão</InputLabel>
                        <NativeSelect                               
                            size="medium"                                  
                            style={{ width: "13rem", marginTop: '21px' }}
                            name="profissao"
                            onChange={handleChange}
                            inputProps={{
                                name: 'profissao',
                                id: 'uncontrolled-native',
                            }}
                            >
                            <option aria-label="None" value="" />                          
                                <option value="A/C">Ar condicionado e ventilação</option>
                                <option value="Carp">Carpinteiro</option>
                                <option value="Cha">Chaveiro</option>
                                <option value="C/E">Conserto de eletrodomésticos</option>
                                <option value="Dia">Diarista</option>
                                <option value="Ele">Eletricista</option>
                                <option value="Enc">Encanador</option>
                                <option value="Fot">Fotógrafo</option>
                                <option value="Gar">Garçom</option>
                                <option value="Jar">Jardineiro</option>
                                <option value="Man">Manicure</option>
                                <option value="Maq">Maquiador</option>
                                <option value="Marc">Marceneiro</option>
                                <option value="Mot">Motoboy</option>
                                <option value="Mot">Motorista</option>
                                <option value="Pad">Padeiro</option>
                                <option value="P/T">Personal trainer</option>
                                <option value="Pin">Pintor</option>
                                <option value="Ser">Serralheiro</option>
                                <option value="Tap">Tapeceiro</option>
                                <option value="T/I">Técnico de informática</option>
                                <option value="Vid">Vidraceiro</option>                            
                        </NativeSelect>               
                </FormControl>
            </Grid >  
        </>       
    );    
}


