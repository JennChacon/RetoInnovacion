import { useState } from 'react';
import { Box, Button, TextField, Modal, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Container, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import md5 from 'md5';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Header from '../componentes/Header';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Cargando from '../componentes/Cargando';
import useAuth from '../auth/useAuth';
import Footer from '../componentes/Footer';

const Login = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [cargar, setCargar] = useState(true);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const auth = useAuth();
    const history = useHistory();

    const [clave, setClave] = useState({
        password: '',
        showPassword: false,
    });

    useEffect(() => {
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);

    const login = () => {
        console.log("login")
        auth.login();
        setTimeout(() => {
            setCargar(false);
        }, 1000);
        loguearse();
    }

    const loguearse = () => {
        console.log("log")
        console.log(user)
        console.log(marca)
        setCargar(true);
        setTimeout(() => {
            setCargar(false);
            history.push(`/${marca}/Info`)
        }, 1000);
        //history.push(`/${marca}/Info`)
    }

    const handleChange = (prop) => (event) => {
        setClave({ ...clave, [prop]: event.target.value });
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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 100,
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
                        <Stack sx={{ marginTop: '10px', textDecoration: 'double' }} spacing={2}>
                            <Breadcrumbs className='tamanioLetraNav tipoLetraTexto' separator="›">
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
                                    color="#aeaeae"
                                >
                                    Inicio de sesión
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Typography className='tipoLetraTexto' sx={{ marginTop: '20px',fontSize:'18px' }}>
                            Hola!!, queremos saber quien eres..
                        </Typography>
                        <Container className='formulario' sx={{ marginTop: '10px', padding: '15px', border: '1px solid #bcbcbc', borderRadius: '20px',textAlign:'center' }}>
                            <Typography className='color tipoLetraTitulo' variant='h5' component='h2'>
                                Iniciar Sesión
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
                                    id='Usuario'
                                    label='Usuario'
                                />
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="password1">Clave *</InputLabel>
                                    <OutlinedInput
                                        id="password1"
                                        type={clave.showPassword ? 'text' : 'password'}
                                        value={clave.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {clave.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Clave *"
                                    />
                                </FormControl>

                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Button className='tipoLetraTexto botonLink' href={`/${marca}/OlvidoClave`} size="medium">¿Olvidaste tu clave?</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '5px', width:275 }} variant='contained' onClick={login} >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                        <Footer/>
                    </div>
            }
        </Container>
    );
}

export default Login
