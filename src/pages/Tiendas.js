import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import data from "../static/data.json";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Breadcrumbs, Button, Card, CardActionArea, Container, Link, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import Header from '../componentes/Header';
import Cargando from "../componentes/Cargando";
import Footer from '../componentes/Footer';



const MapView = (props) => {
  const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
  const [cargar, setCargar] = useState(true);

  useEffect(() => {
    const cargar = () => {
      setTimeout(() => {
        setCargar(false);
      }, 1000);
    }

    cargar();
  }, []);

  const location = useLocation();
  const [state, setState] = useState({
    currentLocation: { lat: location.state.latitude, lng: location.state.longitude },
    zoom: 10,
    data,
  });
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
              <Breadcrumbs className='tipoLetraTexto' separator="›">
                <Link underline="hover" key="1" color="inherit" href={`/${marca}`} >
                  Inicio
                </Link>
                <Link underline="hover" key="1" color="inherit" onClick={back} >
                  Información prenda
                </Link>
                <Link
                  underline="hover"
                  key="2"
                  color="#aeaeae"
                >
                  Ubicación
                </Link>
              </Breadcrumbs>
            </Stack>
            <Typography sx={{ textAlign: 'center', marginBlockEnd: '10px', marginTop: '10px' }} className='tamanioLetraTitulo tipoLetraTitulo' variant='h5' component='h2'>
              Ubicación
            </Typography>
            <Typography className='tamanioLetraTexto tipoLetraTexto' sx={{ marginBlockEnd: '10px'}} variant='h5' component='h2'>
              Te mostramos todas las tiendas fisicas donde se encuentra el producto
            </Typography>
            <MapContainer className='tamanioMapa' center={state.currentLocation} zoom={state.zoom}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {
                data.map((place, i) => {
                  return <Marker key={i} position={place.geometry} >
                    <Popup>
                      <Typography><b>{place.name}</b></Typography>
                      <Typography><b>Direccion:</b> {place.description}</Typography>
                    </Popup>
                  </Marker>
                })
              }
              ));
            </MapContainer>
            <Footer />
          </div>
      }
    </Container >
  );
};

export default MapView;