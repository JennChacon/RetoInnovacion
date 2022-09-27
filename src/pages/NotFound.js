import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Header from '../componentes/Header';
import { useState } from 'react';

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

export default function NotFound() {
    const back = () => {
        window.history.back();
    }
    return (
        <Container>
            <Typography  component='h4'>
                ¡Upss! Esta página no existe
            </Typography>
            <Button variant='contained' onClick={back}>
                Volver
            </Button>
        </Container>
    );
}
