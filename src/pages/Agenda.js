import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import Input from 'components/Input'

const classes = makeStyles(theme => ({
  container: {
    margin: '10vh',
    marginTop: '10vh',
    width: '100vw',
    marginBottom: 0,
    backgroundColor: '#ddd'
  }
}))

const Agenda = () => {
  const [agenda, setAgenda] = useState({
    id: '',
    data: '',
    descricao: '',
    historico: '',
    hora: ''
  })

  const handlerChange = field => event => setAgenda({ ...agenda, [field]: event.target.value })
  const style = classes()
  return (
    <Fragment>
      <Container fixed className={style.container}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Input
              value={agenda.descricao}
              onChange={handlerChange('descricao')}
            />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Agenda;