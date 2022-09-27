import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import useAuth from '../auth/useAuth';
import { useHistory } from 'react-router-dom';
import { Avatar, Container } from '@mui/material';

export default function BasicPopover() {
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const user = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const logout = () => {
        console.log("logout")
        user.logout();
        history.push(`/${marca}`)
    }
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container className={`${marca}`}>
            <Avatar className='bgColor' onClick={handleClick} sx={{ width: 30, height: 30 }} src="/broken-image.jpg">
            </Avatar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Button className={`${marca} botonCerrarSesion`} onClick={logout} variant="text">Cerrar sesión</Button>
            </Popover>
        </Container>
    );
}
