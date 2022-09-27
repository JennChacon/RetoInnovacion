import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <NavLink to='/' className="oculto"
                exact
                activeClassName="active">
                Inicio
            </NavLink>
            <NavLink to='/Gef' className="oculto"
                exact
                activeClassName="active">
                Gef
            </NavLink>
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
            <NavLink to='/Registro' className="oculto"
                exact
                activeClassName="active">
                Registro
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
        </div>
    )
}
