import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import LeerEscaneo from '../pages/LeerEscaneo';
import Registro from '../pages/Registro';
import Inicio from '../pages/Inicio';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import CombinaloCon from '../pages/Recomendado';
import Tiendas from '../pages/Tiendas';
import Api from '../componentes/Api';
import ApiLoginAdmin from '../componentes/ApiLoginAdmin';
import Map from '../componentes/Map';
import Info from '../pages/Info';
import TablaHistorial from '../pages/TablaHistorial';
import DetallePedido from '../pages/DetallePedido';
import ClaveNueva from '../pages/ClaveNueva';
import OlvidoClave from '../pages/OlvidoClave';
import Recomendado from '../pages/Recomendado';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Navbar from '../componentes/Navbar';
import { useState } from 'react';
import useAuth from '../auth/useAuth';

export default function AppRouter() {
    const user = useAuth();
    
    return (
        <Router>
            <NavLink to='/Gef' className="oculto"
                exact
                activeClassName="active">
                Gef
            </NavLink>
            {!user.isLogged() && (
                <NavLink to='/:marca/Login' className="oculto"
                    activeClassName="active">
                    Gef Login
                </NavLink>
            )}
            <NavLink to='/BabyF' className="oculto"
                exact
                activeClassName="active">
                BabyF
            </NavLink>
            <NavLink to='/PuntoB' className="oculto"
                exact
                activeClassName="active">
                PuntoB
            </NavLink>
            <NavLink to='/Galax' className="oculto"
                exact
                activeClassName="active">
                Galax
            </NavLink>
            <NavLink to='/barcode' className="oculto"
                exact
                activeClassName="active">
                Barcode
            </NavLink>
            <NavLink to='/CombinaloCon/:ean' className="oculto"
                exact
                activeClassName="active">
                Combinalo
            </NavLink>
            <NavLink to='/Api/:ean' className="oculto"
                exact
                activeClassName="active">
                Api
            </NavLink>
            <NavLink to='/Tiendas' className="oculto"
                exact
                activeClassName="active">
                Tiendas
            </NavLink>
            <NavLink to='/Mapa' className="oculto"
                exact
                activeClassName="active">
                Map
            </NavLink>
            <Switch>
                <PublicRoute exact path="/Gef" component={Inicio} />
                <PublicRoute exact path="/BabyF" component={Inicio} />
                <PublicRoute exact path="/PuntoB" component={Inicio} />
                <PublicRoute exact path="/Galax" component={Inicio} />
                <PublicRoute  path="/:marca/Login" component={Login} />
                <PublicRoute exact path="/:marca/OlvidoClave" component={OlvidoClave} />
                <PublicRoute exact path="/:marca/OlvidoClave/Nuevo" component={ClaveNueva} />
                <PublicRoute exact path="/:marca/Registro" component={Registro} />
                <PublicRoute exact path="/:marca/Registro/Validar" component={ApiLoginAdmin} />
                <PrivateRoute exact path="/:marca/Info" component={Info} />
                <PrivateRoute exact path="/:marca/Info/Escaneo" component={LeerEscaneo} />
                <PrivateRoute exact path="/:marca/Info/Recomendado" component={Recomendado} />
                <PrivateRoute exact path="/:marca/Info/Escaneo/:ean" component={Api} />
                <PrivateRoute exact path="/:marca/Info/Escaneo/:ean/Mapa/Tiendas" component={Tiendas} />
                <PrivateRoute exact path="/:marca/Info/Escaneo/:ean/Mapa" component={Map} />
                <PrivateRoute exact path="/:marca/Info/HistorialPedidos" component={TablaHistorial} />
                <PrivateRoute exact path="/:marca/Info/HistorialPedidos/:pedido" component={DetallePedido} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

