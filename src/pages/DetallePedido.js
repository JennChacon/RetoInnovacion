import { useState } from 'react';
import { useEffect } from 'react';
import { Breadcrumbs, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import datosPedidos from '../pedidos.json';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';


const DetallePedido = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const [pedido, setPedido] = useState(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
    const [cargar, setCargar] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    console.log(pedido)

    useEffect(() => {
        const cargar = () => {
            setTimeout(() => {
                setCargar(false);
            }, 1000);
        }

        cargar();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const abrir = () => {
        alert("abrió")
    }

    const cedula = "1152222096";

    const infoPedidos = datosPedidos[pedido];

    return (
        <Container className={`${marca}`}>{
            cargar ?
                <Cargando /> :
                <div>
                    <Header />
                    <Stack sx={{ marginTop: '10px' }} spacing={2}>
                        <Breadcrumbs sx={{ fontSize: '15px' }} className='tamanioLetraNav tipoLetraTexto' separator="›" aria-label="breadcrumb">
                            <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                                Inicio
                            </Link>
                            <Link underline="hover" key="2" color="inherit" href={`/${marca}/Info`}>
                                Información
                            </Link>
                            <Link underline="hover" key="2" color="inherit" href={`/${marca}/Info`}>
                                Historial de pedidos
                            </Link>
                            <Link
                                underline="hover"
                                key="2"
                                color="#aeaeae"
                            >
                                Detalle
                            </Link>
                        </Breadcrumbs>
                    </Stack>
                    <Typography sx={{ textAlign: 'center', marginTop: '15px' }} className='color tipoLetraTitulo' variant='h5' component='h2'>
                        Detalle de pedido
                    </Typography>
                    <Container>
                        {
                            infoPedidos.productos.map(a => {
                                return <Container>
                                    <Grid container spacing={2} sx={{ marginBlockEnd: '10px', marginTop: '2px' }}>
                                        <Grid sx={{ textAlign: 'center' }} className='tipoLetraTitulo' item xs={12}>{a.nombre}</Grid>
                                        <Grid sx={{ textAlign: 'center' }} item xs={12}><img width={100} src={a.imagen}></img></Grid>
                                        <Grid className='tipoLetraTitulo' item xs={6}>Sku:</Grid>
                                        <Grid className='tipoLetraTexto' item xs={6}>{a.sku}</Grid>
                                        <Grid className='tipoLetraTitulo' item xs={6}>Talla:</Grid>
                                        <Grid className='tipoLetraTexto' item xs={6}>{a.talla}</Grid>
                                        <Grid className='tipoLetraTitulo' item xs={6}>Color:</Grid>
                                        <Grid className='tipoLetraTexto' item xs={6}>{a.color}</Grid>
                                        <Grid className='tipoLetraTitulo' item xs={6}>Cantidad:</Grid>
                                        <Grid className='tipoLetraTexto' item xs={6}>{a.cantidad}</Grid>
                                        <Grid className='tipoLetraTitulo' item xs={6}>Precio:</Grid>
                                        <Grid className='tipoLetraTexto' item xs={6}>{a.precio}</Grid>
                                    </Grid>
                                    <Container sx={{ textAlign: 'center' }} >
                                        <Button className='tipoLetraTitulo' href='' >
                                            Volver a comprar
                                        </Button>
                                    </Container>
                                    <Divider />
                                </Container>
                            })
                        }
                    </Container>
                    <Typography sx={{ textAlign: 'center', marginTop: '20px', marginBlockEnd: '10px' }} className='color tipoLetraTitulo' variant='h5' component='h2'>
                        Detalle de Envío
                    </Typography>
                    <Container>
                        <Typography sx={{ marginTop: '15px', fontSize: '18px', fontWeight: '600' }} className='tipoLetraTexto' variant='h6' component='h2'>
                            Dirección de envío
                        </Typography>
                        <Grid container spacing={2} sx={{ marginBlockEnd: '10px', marginTop: '1px', marginLeft: '5px' }}>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.nombre}</Grid>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.celular}</Grid>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.direccion}</Grid>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.departamento}</Grid>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.ciudad}</Grid>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.detalleEnvio.pais}</Grid>
                        </Grid>
                        <Typography sx={{ marginTop: '15px', fontSize: '18px', fontWeight: '600' }} className='tipoLetraTexto' variant='h6' component='h2'>
                            Metodo de envío
                        </Typography>
                        <Grid container spacing={2} sx={{ marginBlockEnd: '10px', marginTop: '1px', marginLeft: '5px' }}>
                            <Grid className='tipoLetraTexto' item xs={12}>{infoPedidos.metodoEnvio}</Grid>
                        </Grid>
                        <Divider />
                    </Container>
                    <Typography sx={{ textAlign: 'center', marginTop: '20px', marginBlockEnd: '10px' }} className='color tipoLetraTitulo' variant='h5' component='h2'>
                        Información de pago
                    </Typography>
                    <Container>
                        <Typography sx={{ marginTop: '15px', fontSize: '18px', fontWeight: '600' }} className='tipoLetraTexto' variant='h6' component='h2'>
                            Resumen del pedido
                        </Typography>
                        <Grid container spacing={2} sx={{ marginBlockEnd: '10px', marginTop: '1px', marginLeft: '5px' }}>
                            <Grid className='tipoLetraTexto' item xs={6}>Subtotal del pedido:</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>{infoPedidos.informacionPago.subtotalPedido}</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>IVA:</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>{infoPedidos.informacionPago.iva}</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>Flete:</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>{infoPedidos.informacionPago.flete}</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>IVA Flete:</Grid>
                            <Grid className='tipoLetraTexto' item xs={6}>{infoPedidos.informacionPago.ivaFlete}</Grid>
                            <Grid className='tipoLetraTitulo' item xs={6}>Total:</Grid>
                            <Grid sx={{fontWeight:'600'}} className='tipoLetraTexto' item xs={6}>{infoPedidos.informacionPago.total}</Grid>
                        </Grid>
                        <Divider />
                    </Container>
                    <Footer />
                </div >
        }
        </Container>
    );
}

export default DetallePedido;