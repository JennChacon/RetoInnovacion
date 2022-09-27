import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Cargando from "./Cargando";

const Map = () => {
  const [ruta, setruta] = useState(window.location.pathname);

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  const [esperar, setesperar] = useState(true);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        setesperar(false);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div>
      {
        esperar ?
          <Cargando />
          :
          <Redirect
            to={{
              pathname: ruta+"/Tiendas",
              // state: {
              //   hello: 'world'
              // }
              state: state,
            }}
          />
      }
    </div>
  );
};

export default Map;