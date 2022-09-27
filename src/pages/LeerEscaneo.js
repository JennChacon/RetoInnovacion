import React, { useState } from 'react'
import Scanner from '../componentes/Scanner';
import '../static/css/styles.css';
import Container from '@mui/material/Container';
import { useParams, Redirect } from 'react-router-dom';
import { DivIcon } from 'leaflet';
import { useEffect } from 'react';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';

const LeerEsca = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [ean, setEan] = useState('');
    const [cargar, setCargar] = useState(true);

    useEffect(() => {
        const cargar=()=>{
          setTimeout(() => {
            setCargar(false);
          }, 1000);
        }
        
        cargar();
      }, []);

    const Detectar = (ean) => {
        if (ean) {
            setEan(ean);
        }
    };

    return (
        <Container className={`${marca}`} >
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '10px' }} spacing={2}>
                            <Breadcrumbs className='tamanioLetraNav tipoLetraTexto' separator="›" s>
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                    Inicio
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="inherit"
                                    href={`/${marca}/Info`}
                                >
                                    Información
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="#aeaeae"
                                >
                                    Escaneo
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '5px',marginTop:'10px' }} variant='h5' component='h2'>
                            Ubíca el código de barras que se encuentra en la etiqueta de la prenda
                        </Typography>
                        {
                            ean ?
                                <Redirect to={`/${marca}/Info/Escaneo/${ean}`} />
                                :
                                <div className='App'>
                                    <div className='container-princi'>
                                        <div className={`${marca} container-barcode`}>
                                            <Scanner onDetected={Detectar} />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
            }
        </Container>
    );

}
export default LeerEsca