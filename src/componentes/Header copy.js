import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logoGef from '../static/img/LogoGef.png';
import logoBabyF from '../static/img/LogoBabyF.png';
import logoPuntoB from '../static/img/LogoPuntoB_1.png';
import logoGalax from '../static/img/LogoGalax.png';
import { useState } from 'react';
import { Avatar, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid } from '@mui/material';
import useAuth from '../auth/useAuth';
import { useHistory } from 'react-router-dom';
import CerrarSesion from '../componentes/CerrarSesion';


export default function Header() {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const user = useAuth();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    let timer = 0;
    let currSeconds = 0;
    let currSeconds1 = 10;
    let bool = false;

    const handleClickOpen = () => {
        setOpen(true);
    };

    window.onmousemove = resetTimer;
    window.onmouseout = resetTimer;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;

    const handleClose = () => {
        console.log("empe")
        setOpen(false);
        currSeconds = 0;
        currSeconds1 = 10;
        bool = false;
        timer = 0;
        clearInterval(timer);
    };

    function resetTimer() {
        console.log(currSeconds)
        console.log(currSeconds1)
        if (user.isLogged() == true) {
            console.log("aqui")
            /* Hide the timer text */
            document.querySelector(".timertext")
                .style.display = 'none';

            currSeconds = 0;
            currSeconds1 = 10;
            /* Clear the previous interval */
            clearInterval(timer);
            console.log(timer);
            /* Reset the seconds of the timer */
            /* Set a new interval */
            timer = setInterval(function () {
                console.log(currSeconds)
                console.log(currSeconds1)
                if (bool===false) {
                    console.log("tyh")
                    currSeconds++;
                    console.log(currSeconds)
                }
                if (currSeconds >= 10) {
                    console.log("enjwne")
                    bool = true;
                    currSeconds1--;
                    setOpen(true)
                    document.querySelector(".secs").textContent = currSeconds1;
                    /* Display the timer text */
                    document.querySelector(".timertext").style.display = 'block';
                    if (currSeconds1 === 0) {
                        logout();
                        currSeconds = 0;
                    }
                }
            }, 1000);
        } else {
            console.log("mostar")
        }
    }

    console.log(user)

    const logout = () => {
        console.log("logout")
        user.logout();
        history.push(`/${marca}`)
    }

    const validarMarca = () => {
        let marca = window.location.pathname.split("/")[1]
        if (marca === 'BabyF') {
            return logoBabyF
        } else {
            if (marca === 'PuntoB') {
                return logoPuntoB
            } else {
                if (marca === 'Galax') {
                    return logoGalax
                } else {
                    return logoGef
                }
            }
        }
    }

    const style = {
        position: 'absolute',
        top: 5,
        right: -15,
        margin: '0 auto',
    }



    return (
        <Container>
            <Container className="timertext" sx={{ fontSize: '1.5rem' }}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <span className="secs"></span> seconds.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
            <Container container sx={{ marginTop: '5px', textAlign: 'center', position: 'relative' }}>
                <img src={`${validarMarca()}`} />
                <div style={style}>
                    {
                        user.isLogged() ?
                            <CerrarSesion />
                            :
                            ''
                    }
                </div>
            </Container>
            <Divider />
        </Container>
    );
}
