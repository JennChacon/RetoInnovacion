import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CircularProgress, Container, Grid, LinearProgress } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import logoGef from '../static/img/logoCargaGef.png';
import logoBabyF from '../static/img/logoCargaBF_1.png';
import logoPuntoB from '../static/img/logoCargaPB_1.png';
import logoGalax from '../static/img/logoCargaGlx.png';
import Header from './Header';

export default function Cargando() {
  const [marca,setmarca]=useState(window.location.pathname.split("/")[1])
  const validarMarca = () => {
    let marca = window.location.pathname.split("/")[1]
    if (marca === 'BabyF') {
      return logoBabyF
    } else {
      if (marca === 'PuntoB') {
        return logoPuntoB
      } else {
        if (marca === 'Galax') {
          return logoGalax
        } else {
          return logoGef
        }
      }
    }
  }

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Container className={`${marca}`} sx={style}>
      <Grid sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign:'center'
            }}>
        <Grid >
          <img width={50} src={`${validarMarca()}`} />
        </Grid>
        <CircularProgress className='color' />
      </Grid>
    </Container>
  );
}
