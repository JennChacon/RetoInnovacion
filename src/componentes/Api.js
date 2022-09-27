import React, { useEffect, useState } from 'react';
import Cargando from './Cargando';
import Error from './Error';
import UnionDatos from './UnionDatosEan';
import config from '../config.json';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

// se escribe solo rcc y crea un react, component, class

const Api = () => {
    const {ean} = useParams();
    
    const [apiEcom, setApiEcom] = useState({})
    const [apiInt, setApiInt] = useState({})
    const [err, setErr] = useState(false)
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)

    //se ejecuta una vez el componente a sido cargado en pantalla

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'Encabezado': {
                    'Usuario': config.BodyApiE.Usuario,
                    'Clave': config.BodyApiE.Clave
                },
                'Cuerpo': {
                    'EAN': ean,
                    'IP': config.BodyApiE.IP
                }
            })
        };

        setLoading1(true)
        setLoading2(true)

        const fetchData = async () => {
            try {
                const res = await fetch(
                    config.Api.Ecommerce1 + ean + config.Api.Ecommerce2
                );
                const respuesta = await res.json()
                setApiEcom(respuesta.contents[0])
                console.log(respuesta.contents[0])
                setLoading1(false)
            } catch (error) {
                setErr(true)
            }
        };

        const fetchData2 = async () => {
            try {
                const res = await fetch(
                    config.Api.Interna, requestOptions
                );
                const respuesta = await res.json();
                const respuestaI = JSON.parse('[' + respuesta + ']')
                if (!respuestaI[0].InformacionReferencia) {
                    setErr(true)
                }
                setApiInt(respuestaI[0].InformacionReferencia);
                console.log(respuestaI[0].InformacionReferencia)
                setLoading2(false)
            } catch (error) {
                setErr(true)
                console.log(error)
            }
        };

        fetchData();
        fetchData2();
    }, []);

    return (
        <Container sx={{padding:0}}>
            {
                err
                    ? <Error />
                    : loading1 || loading2
                        ? <Cargando />
                        : <UnionDatos datosEcommerce={apiEcom} datosApiIn={apiInt} />
            }
        </Container>
    )
}

export default Api;