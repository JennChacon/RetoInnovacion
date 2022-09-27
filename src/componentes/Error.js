import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Container } from '@mui/material';

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

export default function Error() {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);

    return (
        <Container className={`${marca}`}>
            <Modal
                open={true}
                onClose={false}>
                <Box className={`color BoxMensajes ${marca}`} sx={style}>
                    <Typography className='tituloMensaje' variant='h5' component='h2'>
                        ¡Error al leer el código de barras!
                    </Typography>
                    <Typography className='textoMensaje' sx={{marginTop:'5px'}}>
                        Intenta nuevamente
                    </Typography>
                    <Button className='bgColor botonError' sx={{marginTop:'5px',marginBottom:'15px'}} variant='contained' href={`/${marca}/Info/Escaneo`}>
                        Escanear
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
}
