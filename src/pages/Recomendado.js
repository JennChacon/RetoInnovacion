import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Avatar, Box, Breadcrumbs, Container, Divider, Link, Rating, Stack, Typography } from '@mui/material';
import Header from '../componentes/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import Cargando from '../componentes/Cargando';
import Footer from '../componentes/Footer';

const Recomendado = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [cargar, setCargar] = useState(true);
    const pro = [
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-rayas-40194-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCO RAYAS L',
            'precio': '29.900',
            'ean': '7703081904696',
            'calificacion': 2.5,
            'url': 'https://www.gef.co/727584-040194'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujer_adulta/camisas/livis/1000x1263/camisa-mujer-adulta-livis-blanco-900-frente-gef.jpg',
            'descripcion': 'CAMISA LIVIS BLANCA L',
            'precio': '89.900',
            'ean': '7703081904726',
            'calificacion': 3.5,
            'url': 'https://www.gef.co/727584-000900'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2022/gef/es-co/imagenes/mujeres/camisas/letit/1000x1263/camisa-mujer-letit-negro-estampado-9277-frente-gef.jpg',
            'descripcion': 'CAMISA LETIT NEGRO ESTAMPADO M',
            'precio': '64.990',
            'ean': '7703081912103',
            'calificacion': 5,
            'url': 'https://www.gef.co/727425-009277'
        },
        {
            'id': 1,
            'img': 'https://www.gef.co/dx/Api/dam/custom/2021/gef/es-co/imagenes/mujer_adulta/camisas/elilena/1000x1263/camisa-mujer-adulta-elilena-blanco-estampado-39690-frente-gef.jpg',
            'descripcion': 'CAMISA ELILENA BLANCO ESTAMPADO S',
            'precio': '89.900',
            'ean': '7703081745626',
            'calificacion': 4,
            'url': 'https://www.gef.co/camisa-mujer-elilena-711556-039690'
        },
    ]

    useEffect(() => {
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);

    const styleA = {
        textDecoration: 'none',
        color: 'black',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        fontWeight: 'bold'
    }
    const back = () => {
        window.history.back();
    }
    return (
        <Container className={`${marca}`} sx={{ maxWidth: 500 }}>
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
                                    Recomendado
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <Typography className='color tipoLetraTitulo' sx={{ marginTop: '20px', textAlign: 'center' }} variant='h5' component='h2'>
                            Prendas recomendadas
                        </Typography>
                        <ImageList>
                            {pro.map((item) => (
                                <a style={styleA} href={`/${marca}/Info/Escaneo/${item.ean}`} >
                                    <ImageListItem key={item.img} sx={{ width: 145 }}>
                                        <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.id}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar className='tamanioLetraTexto tipoLetraTexto'
                                            title={item.descripcion}
                                            subtitle={`$ ${item.precio}`}
                                            position='below'
                                        />

                                    </ImageListItem>
                                </a>

                            ))}
                        </ImageList>
                        <Footer/>
                    </div>
            }
        </Container>

    );
}
export default Recomendado
