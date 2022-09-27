import React, { useEffect, useState } from 'react';
import Cargando from './Cargando';
import Error from './Error';
import config from '../config.json';
import ApiAddUser from '../componentes/ApiAddUser';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

// se escribe solo rcc y crea un react, component, class

const ApiLogin = () => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const { ean } = useParams();
    const [err, setErr] = useState(false)
    const [loading1, setLoading1] = useState(true)
    const [respuesta, setRespuesta] = useState({});
    const [loading2, setLoading2] = useState(true)

    //se ejecuta una vez el componente a sido cargado en pantalla

    useEffect(() => {
         const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config.ApiLogin.body)
        };

        setLoading1(true)

        const fetchData = async () => {
            console.log("aqui")
            console.log(config.ApiLogin.url)
            console.log(requestOptions)
            try {
                const res = await fetch(
                    config.ApiLogin.url, requestOptions
                );
                const respuesta = await res.json();
                console.log("respuesta")
                console.log(respuesta)
                setRespuesta(respuesta);
                setLoading1(false);
            } catch (error) {
                setErr(true)
                console.log(error)
            }
        };
        fetchData();
    }, []);

    return (
        <Container sx={{ padding: 0 }}>
            {
                err
                    ? <Error />
                    : loading1
                        ? <Cargando />
                        : <ApiAddUser tokens={respuesta} />
            }
        </Container>
    )
}

export default ApiLogin;