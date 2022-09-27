import Producto from '../pages/Producto';
import config from '../config.json'
import { Redirect } from 'react-router-dom';
import { color } from '@mui/system';
import React from 'react';

const UnionDatosEan=({ datosEcommerce: DatosE, datosApiIn: DatosI }) => {
  const [strColor,setColor] = React.useState('');
  const reemplazar =(desc)=>{
    const descr = desc.replace(/<[^>]*>?/g,'*')
    console.log(desc);
    return descr.split('**')
  }
  
  const double = (pre) =>{
    const preci = parseFloat(pre).toLocaleString('en')
    return preci.replace(',','.')
  }

  const concatenar =(tienda, dato)=>{
    const tiendas = config.Tiendas

    for (const i in tiendas) {
      if(tienda === i){
        return tiendas[i].url+dato
      }
    }
  }

  const tiendaNombre=(tienda)=>{
    const tiendas = config.Tiendas

    for (const i in tiendas) {
      if(tienda === i){
        return tiendas[i].nombre
      }
    }
  }

  const validarUrl= ()=>{
    var url = ''
    try{
      if(DatosE.seo.href){
        url = DatosE.seo.href
      }else{
        url = ''
      }
    }catch(e){
        url = ''
    }
    return url
  }
  const color = ()=>{
    for (const i in DatosE.attributes) {
      if(DatosE.attributes[i].identifier === 'swatchColor'){
        return DatosE.attributes[i].values[0].identifier;
      }
    }
  }
  const talla = (t)=>{
    return `https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/gef/es-co/imagenes/swatches/swatches_tallas/negros/adultos/adultos_${t}.png`;

  }

  const ImgColor = (c)=>{
    console.log(c);
    var co = c.replace(" ","-");
    var colo = co.replace(" ","-");
    return `https://www.gef.co/dx/api/dam/custom/crystalco_cat_as/2020/gef/es-co/imagenes/swatches/swatches_genericos/${colo}.png`;

  }

  console.log(DatosE);
  console.log(DatosE.attributes[8].values[0].value);
//'ImgColor':concatenar(DatosE.storeID,DatosE.attributes[1].values[0].image1path),
  const datos = {
    'Nombre' : DatosE.name,
    'Precio' : DatosE.price[1].value?double(DatosE.price[1].value):'',
    'Descripcion' : DatosE.longDescription?reemplazar(DatosE.longDescription):'',
    'Imagen' : concatenar(DatosE.storeID,DatosE.thumbnail),
    'Talla': DatosE.attributes[8].values[0].value?'Talla: '+DatosE.attributes[8].values[0].value:'',
    'ImgTalla': talla(DatosE.attributes[8].values[0].value),
    'Ean': DatosE.partNumber,
    'Tienda': tiendaNombre(DatosE.storeID),
    'Composicion': DatosI.ComposicionEspanol?'Composición: '+DatosI.ComposicionEspanol:'' + DatosI.ComposicionEspanol2?DatosI.ComposicionEspanol2:'',
    'Color': 'Color: ' + color(),
    'ImgColor': ImgColor(color()),
    'Url':concatenar(DatosE.storeID,validarUrl())
  };

  return (
      <Producto datos={datos} />
  );
}

export default UnionDatosEan