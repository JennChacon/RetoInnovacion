import * as React from 'react';
import { Breadcrumbs, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import datosHistorial from '../historial.json';
import Cargando from '../componentes/Cargando';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';


const TablaHistorial = () => {
  const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
  const [cargar, setCargar] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
              <Link
                underline="hover"
                key="2"
                color="#aeaeae"
              >
                Historial de pedidos
              </Link>
            </Breadcrumbs>
          </Stack>
          <Typography sx={{ textAlign: 'center', marginTop: '10px', marginBlockEnd: '10px' }} className='color tipoLetraTitulo' variant='h5' component='h2'>
            Historial de pedidos
          </Typography>
          <Container>
            {
              datosHistorial[cedula].map(a => {
                return <div>
                  <Grid container spacing={2} sx={{ marginBlockEnd: '10px', marginTop: '10px' }}>
                    <Grid className='tipoLetraTitulo' item xs={6}>Número de pedido</Grid>
                    <Grid className='tipoLetraTexto' item xs={6}><a href={`/${marca}/Info/HistorialPedidos/${a.pedido}`}>{a.pedido}</a></Grid>
                    <Grid className='tipoLetraTitulo' item xs={6}>Fecha del pedido</Grid>
                    <Grid className='tipoLetraTexto' item xs={6}>{a.fecha}</Grid>
                    <Grid className='tipoLetraTitulo' item xs={6}>Estado</Grid>
                    <Grid className='tipoLetraTexto' item xs={6}>{a.estado}</Grid>
                    <Grid className='tipoLetraTitulo' item xs={6}>Precio total</Grid>
                    <Grid className='tipoLetraTexto' item xs={6}>{a.precio}</Grid>
                  </Grid>
                  <Container sx={{ textAlign: 'center' }} >
                    <Button className='tipoLetraTitulo' href={`/${marca}/Info/HistorialPedidos/${a.pedido}`} >
                      Detalle de pedido
                    </Button>
                  </Container>

                  <Divider />
                </div>
              })
            }
          </Container>
          <Footer/>
        </div >
    }
    </Container>
  );
}

export default TablaHistorial;