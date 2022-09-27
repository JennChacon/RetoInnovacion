import React from 'react'
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';


export default function PrivateRoute({ component: Component, ...rest }) {
    const marca = window.location.pathname.split("/")[1]
    const user = useAuth();
    console.log(Component);

    return (
        <Route {...rest}>
            {user.isLogged() ?
                <Component />
                :
                <Redirect to={`/${marca}`} />
            }
        </Route>
    )
}
