import { useState } from 'react';
import { Box, Button, TextField, Modal, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Container, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logoGef from '../static/img/LogoGef.png';
import logoBabyF from '../static/img/LogoBabyF.png';
import logoPuntoB from '../static/img/LogoPuntoB.png';
import logoGalax from '../static/img/LogoGalax.png';
import md5 from 'md5';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Header from '../componentes/Header';
import Cargando from '../componentes/Cargando';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../componentes/Footer';

const ClaveNueva = () => {
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

    const [clave3, setClave3] = useState({
        password3: '',
        showPassword3: false,
    });

    const [clave, setClave] = useState({
        password: '',
        showPassword: false,
    });
    const [clave2, setClave2] = useState({
        password2: '',
        showPassword2: false,
    });
    const history = useHistory();
    const handleClose = () => {
        setOpen(false);
        console.log("stop");
        return history.push(`/${marca}/Login`)
    }

    const handleChange = (prop) => (event) => {
        setClave({ ...clave, [prop]: event.target.value });
    };
    const handleChange2 = (prop) => (event) => {
        setClave2({ ...clave2, [prop]: event.target.value });
    };
    const handleChange3 = (prop) => (event) => {
        setClave3({ ...clave3, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setClave({
            ...clave,
            showPassword: !clave.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword2 = () => {
        setClave2({
            ...clave2,
            showPassword2: !clave2.showPassword2,
        });
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword3 = () => {
        setClave3({
            ...clave3,
            showPassword3: !clave3.showPassword3,
        });
    };

    const handleMouseDownPassword3 = (event) => {
        event.preventDefault();
    };
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

    return (
        <Container className={`${marca}`}>
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '5px' }} spacing={2}>
                            <Breadcrumbs className='tipoLetraTexto' separator="›" aria-label="breadcrumb">
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
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
                                    href={`/${marca}/OlvidoClave`}
                                >
                                    Recuperar contraseña
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Container className='formulario' sx={{ marginTop: '30px', padding: '15px', border: '1px solid #bcbcbc', borderRadius: '20px', textAlign: 'center' }}>
                            <Typography className='color tipoLetraTitulo' sx={{ marginBlockEnd: '5px' }} variant='h5' component='h2'>
                                Recuperar contraseña
                            </Typography>
                            <Box
                                component='form'
                                sx={{
                                    '& > :not(style)': { m: 1.5, width: '30ch' }
                                }}
                                noValidate
                                autoComplete='off'
                                id='form'
                            >
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password3">Clave actual*</InputLabel>
                                    <OutlinedInput
                                        id="password3"
                                        type={clave3.showPassword3 ? 'text' : 'password'}
                                        value={clave3.password3}
                                        onChange={handleChange3('password3')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="password3"
                                                    onClick={handleClickShowPassword3}
                                                    onMouseDown={handleMouseDownPassword3}
                                                    edge="end"
                                                >
                                                    {clave3.showPassword3 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password1">Clave nueva*</InputLabel>
                                    <OutlinedInput
                                        id="password1"
                                        type={clave.showPassword ? 'text' : 'password'}
                                        value={clave.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="password1"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {clave.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password2">Confirmar clave nueva*</InputLabel>
                                    <OutlinedInput
                                        id="password2"
                                        type={clave2.showPassword2 ? 'text' : 'password'}
                                        value={clave2.password2}
                                        onChange={handleChange2('password2')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="password2"
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                    edge="end"
                                                >
                                                    {clave2.showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password2"
                                    />
                                </FormControl>
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
                                    Clave modificada correctamente
                                </Typography>
                                <Button className='botonMensaje' variant='text' href={`/${marca}/Login`}>
                                    Cerrar
                                </Button>
                            </Box>
                        </Modal>
                    </div>
            }
        </Container>
    );
}

export default ClaveNueva
