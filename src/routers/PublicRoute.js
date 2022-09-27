import React from 'react'
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PublicRoute({ component: Component, ...rest }) {
    const ruta = window.location.pathname;
    const [marca, setMarca] = useState(window.location.pathname.split("/")[1]);
    const user = useAuth();
    console.log(user)

    console.log(user)
    console.log(ruta)

    return (
        <Route {...rest}>
            {!user.isLogged() ?
                <Component />
                :
                <Redirect to={`/${marca}/Info`} />
            }
        </Route>
    )
}
