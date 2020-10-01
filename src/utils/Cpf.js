import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { cpfMask } from './Mask'
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
                <TextField                               
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