import { useState,useEffect } from 'react';
import { Button, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import md5 from 'md5';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import SliderProducts from '../componentes/SliderProducts';
import Header from '../componentes/Header';
import TablaHistorial from './TablaHistorial';
import Cargando from '../componentes/Cargando';
import Footer from '../componentes/Footer';

const Info = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [cargar, setCargar] = useState(true);
    console.log(marca);

    useEffect(() => {
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);

    return (
        <Container className={`${marca}`}>{
            cargar ?
                <Cargando /> :
                <div>
                    <Header />
                    <Stack sx={{ marginTop: '10px' }} spacing={2}>
                        <Breadcrumbs sx={{fontSize:'15px'}} className='tamanioLetraNav tipoLetraTexto' separator="›" aria-label="breadcrumb">
                            <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                Inicio
                            </Link>
                            <Link
                                underline="hover"
                                key="2"
                                color="#aeaeae"
                            >
                                Información
                            </Link>
                        </Breadcrumbs>
                    </Stack>
                    <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginTop: '15px', fontSize: '20px', textAlign: 'center' }}>
                        Hola!!, Jennifer Chacon
                    </Typography>
                    <Container sx={{ marginTop: '10px', padding: '5px' }}>
                        <Typography className='color tipoLetraTitulo tamanioLetraTitulo' sx={{ textAlign: 'center', marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Te recomendamos..
                        </Typography>
                        <SliderProducts ean='7703081745626' />
                    </Container>
                    <Container sx={{ marginTop: '10px', padding: '5px', textAlign: 'center' }}>
                        <Typography className='color tipoLetraTitulo tamanioLetraTitulo' sx={{ marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Escanea una prenda
                        </Typography>
                        <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Si deseas más información de una prenda de la tienda..
                        </Typography>
                        <Button className='bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px' }} variant='contained' href={`/${marca}/Info/Escaneo`} >
                            Escanea su código de barras
                        </Button>
                    </Container>
                    <Container sx={{ marginTop: '10px', padding: '5px' }}>
                        <Typography className='color tipoLetraTitulo tamanioLetraTitulo' sx={{ textAlign: 'center', marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Puedes usar los siguientes descuentos..
                        </Typography>
                        <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '10px', marginLeft: '15px' }} variant='h6' component='h2'>
                            Descuento de cumpleaños
                        </Typography>
                        <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '10px', marginLeft: '15px' }} variant='h6' component='h2'>
                            Descuento del 10% en toda la tienda
                        </Typography>
                    </Container>
                    <Container sx={{ marginTop: '10px', padding: '5px', textAlign: 'center'  }}>
                        <Typography className='color tipoLetraTitulo tamanioLetraTitulo' sx={{ textAlign: 'center', marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Estado de tus últimos pedidos
                        </Typography>
                        <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '10px' }} variant='h6' component='h2'>
                            Vea los pedidos realizados y pendientes de aprobación, y los detalles de pedidos individuales
                        </Typography>
                        <Button className='bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '3px' }} variant='contained' href={`/${marca}/Info/HistorialPedidos`} >
                            Historial de pedidos
                        </Button>
                    </Container>
                    <Footer/>
                </div>
        }
        </Container>
    );
}

export default Info
