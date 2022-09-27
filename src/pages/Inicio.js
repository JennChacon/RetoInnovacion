import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Divider, Grid, Stack } from '@mui/material';
import BannerGef from '../static/img/BannerGef.png';
import BannerBabyF from '../static/img/BannerBabyF.jpg';
import BannerPuntoB from '../static/img/BannerPuntoB.jpg';
import BannerGalax from '../static/img/BannerGalax.png';
import Container from '@mui/material/Container';
import image from '../static/img/inicio.jpg';
import Slide from '@mui/material/Slide';
import { deepPurple } from '@mui/material/colors';
import Header from '../componentes/Header';
import { useState } from 'react';
import Cargando from '../componentes/Cargando';
import { useEffect } from 'react';


const Inicio = () => {
  const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
  const [cargar, setCargar] = useState(true);
  console.log("ver")

  useEffect(() => {
    const cargar=()=>{
      setTimeout(() => {
        setCargar(false);
      }, 1000);
    }
    
    cargar();
  }, []);

  const validarMarcaBanner = () => {
    if (marca === 'BabyF') {
      return BannerBabyF
    } else {
      if (marca === 'PuntoB') {
        return BannerPuntoB
      } else {
        if (marca === 'Galax') {
          return BannerGalax
        } else {
          return BannerGef
        }
      }
    }
  }

  const ValidarNombreMarca = () => {
    if (marca === 'BabyF') {
      return 'BABY FRESH'
    } else {
      if (marca === 'PuntoB') {
        return 'PUNTO BLANCO'
      } else {
        if (marca === 'Galax') {
          return 'GALAX'
        } else {
          return 'GEF'
        }
      }
    }
  }

  const style = {
    width: '318px',
    border: '2px solid #b1b1b1',
    borderRadius: '20px',
    boxShadow: 24,
    p: '2% 5% 5% 5%',
    position: 'absolute',
    bottom: 0
  }

  return (
    <Container className={`${marca}`}>
      {
        cargar ?
          <Cargando /> :
          <Container sx={style}>
            <Header/>
            <Box>
              <img style={{ borderRadius: '20px', marginTop: '5px' }} width={270} src={`${validarMarcaBanner()}`} />
            </Box>
            <Typography className='color tipoLetraTitulo' id='modal-modal-title' component='h4' sx={{ marginTop: '5px', textTransform: 'uppercase', fontSize: '20px' }}>
              {ValidarNombreMarca()} TE DA LA BIENVENIDA
            </Typography>
            <Typography className='tipoLetraTexto' id='modal-modal-description' sx={{ marginBlockEnd: '10px', fontSize: '17px' }}>
              Dejanos conocerte...
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px' }} variant='contained' href={`/${marca}/Login`} >
                  Iniciar Sesión
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px' }} variant='contained' href={`/${marca}/Registro`}>
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </Container>
      }
    </Container>
  );
}
export default Inicio