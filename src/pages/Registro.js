import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField, Container, Stack, Modal, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from '../componentes/Footer';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';



const Registro = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cargar, setCargar] = useState(true);

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
        width: 200,
        height: 100,
        bgcolor: 'background.paper',
        border: '2px solid grey',
        borderRadius: '30px',
        color: '3d228e',
        textAlign: 'center',
        fontWeight: 600,
        p: 5,
    };

    const history = useHistory();

    const enviar = ()=>{
        console.log("aa")
        return history.push(`/${marca}/Registro/Validar`)
    }

    const [values, setValues] = useState({
        amount: '',
        password1: '',
        password2: '',
        weight: '',
        weightRange: '',
        showPassword1: false,
        showPassword2: false,
    });

    const [clave1, setClave1] = useState({
        password1: '',
        showPassword1: false,
    });
    const [clave2, setClave2] = useState({
        password2: '',
        showPassword2: false,
    });

    const handleChange1 = (prop) => (event) => {
        setClave1({ ...clave1, [prop]: event.target.value });
    };
    const handleChange2 = (prop) => (event) => {
        setClave2({ ...clave2, [prop]: event.target.value });
    };

    const handleClickShowPassword1 = () => {
        setClave1({
            ...clave1,
            showPassword1: !clave1.showPassword1,
        });
    };

    const handleMouseDownPassword1 = (event) => {
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
    const back = () => {
        window.history.back();
    }
    return (
        <Container className={`${marca}`}>
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '10px' }} spacing={2}>
                            <Breadcrumbs sx={{ fontSize: '15px' }} className='tamanioLetraNav tipoLetraTexto' separator="›" aria-label="breadcrumb">
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                    Inicio
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="#aeaeae"
                                >
                                    Registro
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Container className='formulario' sx={{ marginTop: '10px', padding: '15px', border: '1px solid #bcbcbc', borderRadius: '20px', textAlign: 'center' }}>
                            <Typography className='color tipoLetraTitulo' variant='h5' component='h2'>
                                Registrarse
                            </Typography>
                            <Box
                                component='form'
                                sx={{
                                    '& > :not(style)': { m: 1.5, width: '30ch' },
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
                                <TextField
                                    noValidate
                                    required
                                    id='ConCorreo'
                                    label='Confirmar correo'
                                />
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password1">Clave *</InputLabel>
                                    <OutlinedInput
                                        id="password1"
                                        type={clave1.showPassword1 ? 'text' : 'password'}
                                        value={clave1.password1}
                                        onChange={handleChange1('password1')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="password1"
                                                    onClick={handleClickShowPassword1}
                                                    onMouseDown={handleMouseDownPassword1}
                                                    edge="end"
                                                >
                                                    {clave1.showPassword1 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Clave *"
                                    />
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password2">Verificar clave *</InputLabel>
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
                                        label="Verificar clave *"
                                    />
                                </FormControl>
                                <TextField
                                    noValidate
                                    required
                                    id='Cédula'
                                    label='Cédula'
                                    type='number'
                                />
                                <TextField
                                    noValidate
                                    required
                                    id='Correo'
                                    label='Correo'
                                />
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Button size="medium" className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px', width: 275 }} variant='contained' onClick={enviar} >
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className={`color BoxMensajes ${marca}`} sx={style}>
                                <Typography className='tituloMensaje' variant='h5' component='h2'>
                                    Se envió una clave temporal al correo
                                </Typography>
                                <Button className='botonMensaje' variant='text' href={`/${marca}/Login`}>
                                    Cerrar
                                </Button>
                            </Box>
                        </Modal>
                        <Footer />
                    </div>
            }
        </Container>

    );
}

export default Registro
