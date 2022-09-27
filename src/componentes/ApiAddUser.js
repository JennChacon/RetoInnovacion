import React, { useEffect, useState } from 'react';
import Cargando from './Cargando';
import Error from './Error';
import UnionDatos from './UnionDatosEan';
import config from '../config.json';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from '../auth/useAuth';

// se escribe solo rcc y crea un react, component, class

const ApiAddUser = ({ tokens: datos }) => {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const { ean } = useParams();
    const [err, setErr] = useState(false)
    const [loading1, setLoading1] = useState(true)
    const [respuesta, setRespuesta] = useState({});
    const [loading2, setLoading2] = useState(true)
    const user = useAuth();
    console.log(user);
    console.log(document.cookie);
    //se ejecuta una vez el componente a sido cargado en pantalla

    useEffect(() => {
        console.log(document.cookie);
        const requestOptions1 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                /* 'WCToken': datos.WCToken,
                'WCTrustedToken': datos.WCTrustedToken,
                'set-cookie': '' */
            },
            body: JSON.stringify({
                "logonId": "jennchacon6@yopmail.com",
                "logonPassword": "1jennicita",
                "logonPasswordVerify": "1jennicita",
                "firstName": "Jenn",
                "lastName": "Chacon",
                "email1": "jennchacon6@yopmail.com",
                "phone1": "51995199664",
                "mobilePhone1Country": "057",
                "demographicField1": "1",
                "demographicField4": "1",
                "demographicField7": "44737484",
                "country": "COLOMBIA"
            })
        };
        setLoading1(true)
        
        
        const fetchData1 = async () => {
            console.log("aqui")
            console.log(config.ApiAddUser.url)
            console.log(requestOptions1)
            try {
                const res = await fetch(
                    config.ApiAddUser.url, requestOptions1
                );
                const respuesta = await res.json();
                console.log("respuesta")
                console.log(respuesta)
                console.log(user)
            } catch (error) {
                setErr(true)
                console.log(error)
            }
        };
        fetchData1();
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

export default ApiAddUser;