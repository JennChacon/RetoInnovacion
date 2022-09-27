import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logoGef from '../static/img/LogoGef.png';
import logoBabyF from '../static/img/LogoBabyF.png';
import logoPuntoB from '../static/img/LogoPuntoB_1.png';
import logoGalax from '../static/img/LogoGalax.png';
import { useState } from 'react';
import { Avatar, Container, Divider, Grid } from '@mui/material';
import useAuth from '../auth/useAuth';
import { useHistory } from 'react-router-dom';
import datosFooter from '../datosFooter.json';
import CerrarSesion from '../componentes/CerrarSesion';


export default function Footer() {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const user = useAuth();
    const history = useHistory();
    console.log(datosFooter[marca].social)

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
        position: 'absolute',
        top: 5,
        right: -15,
        margin: '0 auto',
    }

    const datosF = datosFooter[marca];

    console.log(datosF)

    const estilo ={
        margin: '0px 8px 0px 0px'
    }

    return (
        <div>
            <Container className='social'>
                {
                    datosF.social.map(a => {
                        return <a href={`${a.ruta}`} target='_blank'>
                            <img style={estilo} width={40} src={`${a.logo}`} />
                        </a>
                    })
                }
            </Container>
            <Divider />
            <Container className='linea'>
                <Typography sx={{ color: 'gray', fontSize: '12px', float: 'right', marginBlockEnd: '10px' }} className='tipoLetraTexto' variant='h5' component='h2'>
                    {datosF.linea}
                </Typography>
                <Divider />
                <Typography sx={{ color: 'gray', fontSize: '12px', float: 'right', marginTop: '10px', textAlign: 'center' }} className='tipoLetraTexto' variant='h5' component='h2'>
                    {datosF.marca}
                </Typography>
            </Container>
        </div >
    );
}
