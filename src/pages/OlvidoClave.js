import { useEffect, useState } from 'react';
import { Box, Button, TextField, Modal, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Container, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../componentes/Header';
import md5 from 'md5';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Cargando from '../componentes/Cargando';
import { Redirect, useHistory } from 'react-router-dom';
import Footer from '../componentes/Footer';

const OlvidoClave = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [cargar, setCargar] = useState(true);
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    console.log(marca);
    useEffect(() => {
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 250,
        border: '2px solid grey',
        borderRadius: '30px',
        color: '3d228e',
        textAlign: 'center',
        bgcolor: 'white',
        p: 5,
        justifyContent: 'center',
        alignContent: 'center'

    };

    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        console.log("stop");
        return history.push(`/${marca}/OlvidoClave/Nuevo`)
    }

    return (
        <Container className={`${marca}`}>
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '5px' }} spacing={2}>
                            <Breadcrumbs className='tipoLetraTexto' separator="›">
                                <Link
                                    underline="hover"
                                    key="1"
                                    color="inherit"
                                    href={`/${marca}`} >
                                    Inicio
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="inherit"
                                    href={`/${marca}/Login`}
                                >
                                    Inicio de sesión
                                </Link>
                                <Link
                                    underline="hover"
                                    key="3"
                                    color="#aeaeae"
                                >
                                    Recuperar
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Container className='formulario' sx={{ marginTop: '30px', padding: '15px', border: '1px solid #bcbcbc', borderRadius: '20px', textAlign: 'center' }}>
                            <Typography className='color tipoLetraTitulo' sx={{ marginBlockEnd: '5px' }} variant='h5' component='h2'>
                                Recuperar clave
                            </Typography>
                            <Typography className='tipoLetraTexto' variant='h6' component='h2'>
                                Te enviaremos una clave temporal al correo..
                            </Typography>
                            <Box
                                component='form'
                                sx={{
                                    '& > :not(style)': { m: 1.5, width: '30ch' }
                                }}
                                noValidate
                                autoComplete='off'
                            >
                                <TextField
                                    noValidate
                                    required
                                    id='Correo'
                                    label='Correo'
                                />
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '5px', width: 275 }} variant='contained' onClick={handleOpen} >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>

                        </Container>
                        <Footer/>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className={`color BoxMensajes ${marca}`} sx={style}>
                                <Typography className='tituloMensaje' variant='h5' component='h2'>
                                    Se envió una clave temporal al correo
                                </Typography>
                                <Button className='botonMensaje' variant='text' href={`/${marca}/OlvidoClave/Nuevo`}>
                                    Cerrar
                                </Button>
                            </Box>
                        </Modal>

                    </div>
            }
        </Container>
    );
}

export default OlvidoClave
