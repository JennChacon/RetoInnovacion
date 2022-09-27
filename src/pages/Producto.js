import * as React from 'react';
import { Box, Breadcrumbs, Button, CardActions, Grid, IconButton, Input, Link, Modal } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SliderProducts from '../componentes/SliderProducts';
import Rating from '@mui/material/Rating';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { styled } from '@mui/material/styles';
import { Avatar, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useState } from 'react';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';

const Producto = ({ datos }) => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [Favorito, setFavorito] = useState(false);
    const [NoFavorito, setNoFavorito] = useState(false);
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
    const back = () => {
        window.history.back();
    }
    const Input = styled('input')({
        display: 'none',
    });
    const FavoritoClick = () => {
        if (Favorito) {
            setFavorito(false);
        } else {
            setFavorito(true);
        }
    }
    const NoFavoritoClick = () => {
        if (NoFavorito) {
            setNoFavorito(false);
        } else {
            setNoFavorito(true);
        }
    }
    return (
        <Container className={`${marca}`}>
            {
                cargar ?
                    <Cargando /> :
                    <div>
                        <Header />
                        <Stack sx={{ marginTop: '10px' }} spacing={2}>
                            <Breadcrumbs className='tipoLetraTexto' separator="›">
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                    Inicio
                                </Link>
                                <Link underline="hover" key="1" color="inherit" href={`/${marca}/Info`} >
                                    Información
                                </Link>
                                <Link
                                    underline="hover"
                                    key="2"
                                    color="#aeaeae"
                                >
                                    {datos.Nombre}
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Container>
                            <Typography className='tamanioLetraTitulo tipoLetraTitulo' sx={{ marginBlockEnd: '10px', marginTop: '15px' }} variant='h5' component='h2'>
                                {datos.Nombre}
                            </Typography>
                            <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ color: 'red', marginTop: '5px', fontWeight:'600' }} variant='h5' component='h2'>
                                {`$ ${datos.Precio}`}
                            </Typography>
                            <img
                                width={285}
                                src={datos.Imagen}
                                alt={datos.Nombre}
                            />
                            <Typography className="Me-Gusta" disableSpacing >
                                <label htmlFor='icon-button-file'>
                                    <Input id='icon-button-file' onClick={FavoritoClick} />
                                    <IconButton className='botonFavorito' color='primary' aria-label='upload picture' component='span'>
                                        {
                                            Favorito ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />
                                        }
                                    </IconButton>
                                </label>
                            </Typography>
                            <Typography className="No-Me-Gusta" disableSpacing>
                                <label htmlFor='icon-button-file2'>
                                    <Input id='icon-button-file2' onClick={NoFavoritoClick} />
                                    <IconButton className='botonFavorito' color='primary' aria-label='upload picture' component='span'>
                                        {
                                            NoFavorito ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />
                                        }
                                    </IconButton>
                                </label>
                            </Typography>
                            {datos.Descripcion.map(ele => {
                                if (ele) {
                                    return <Typography className='tamanioLetraTexto tipoLetraTexto' variant='h5' component='h2'>
                                        {ele}
                                    </Typography>
                                }
                            })}
                            <br></br>
                            <Typography className='tamanioLetraTexto tipoLetraTexto' variant='h5' component='h2'>
                                {datos.Talla}
                            </Typography>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColorSeleccionada' src={datos.ImgTalla}></img>
                            </a>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColor' src='https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/gef/es-co/imagenes/swatches/swatches_tallas/negros/adultos/adulto_s.png'></img>
                            </a>
                            <Typography className='tamanioLetraTexto tipoLetraTexto' variant='h5' component='h2'>
                                {datos.Composicion}
                            </Typography>
                            <Typography className='tamanioLetraTexto tipoLetraTexto' variant='h5' component='h2'>
                                {datos.Color}
                            </Typography>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColorSeleccionada' src={datos.ImgColor}></img>
                            </a>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColor' src='https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/gef/es-co/imagenes/swatches/swatches_genericos/terracota-42029.png'></img>
                            </a>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColor' src={datos.ImgColor}></img>
                            </a>
                            <a href={`/${marca}/Info/Escaneo/${datos.Ean}`}>
                                <img className='estiloImgColor' src={datos.ImgColor}></img>
                            </a>
                            <Typography className='tamanioLetraTexto tipoLetraTexto' variant='h5' component='h2'>
                                Código del artículo: {datos.Ean}
                            </Typography>
                            <Typography className='tamanioLetraTexto tipoLetraTexto botonLink' variant='h5' component='h2' sx={{ marginTop: '15px' }}>
                                <a href={`/${marca}/Info/Escaneo/${datos.Ean}/Mapa`}>
                                    Ver ubicación de la prenda
                                </a>
                            </Typography>
                            <Button className='tamanioLetraTexto tipoLetraTexto botonLink' sx={{ color: 'black', float: 'right', marginTop: '10px' }} variant='text' target={'_blank'} href={datos.Url} endIcon={<ArrowRightAltIcon />}>
                                Ir al ecommerce
                            </Button>
                            <Container sx={{textAlign:'center'}}>
                                <Button className='tamanioBoton bgColor tipoLetraTitulo' sx={{ marginBlockEnd: '5px', marginTop: '10px'}} variant='contained' href={`/${marca}/Info/Escaneo`}>
                                    Escanear otra prenda
                                </Button>
                            </Container>
                        </Container>
                    </div>
            }
        </Container>
    );
}

export default Producto
