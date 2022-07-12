import './style.css'
import axios from 'axios'
import { IResProducto, Producto } from './interfaces/IProducto';
const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v2/sextob/api/',
})
const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="Identificador"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="nombre">Nombre</label><input id="nombre"/>
<label for ="estado">Estado</label><input id="estado"/>
<label for ="precio">Precio</label><input id="precio"/>
<label for ="costo">Costo</label><input id="costo"/>
<label for ="minimo">Mínimo</label><input id="minimo"/>
<label for ="stock">Stock</label><input id="stock"/>
<button id="nuevo" >Nuevo</button>
<button id="grabar" >Grabar</button>
<button id="consultar" >Consultar</button>
<div id="cuerpo"/>
`
const nuevo = document.querySelector<HTMLButtonElement>('#nuevo')!
const grabar = document.querySelector<HTMLButtonElement>('#grabar')!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id = document.querySelector<HTMLInputElement>('#id')!
const nombre = document.querySelector<HTMLInputElement>('#nombre')!
const estado = document.querySelector<HTMLInputElement>('#estado')!
const precio = document.querySelector<HTMLInputElement>('#precio')!
const costo = document.querySelector<HTMLInputElement>('#costo')!
const minimo = document.querySelector<HTMLInputElement>('#minimo')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
//#endregion
nuevo.addEventListener('click',()=>{
  nombre.value=""
  estado.value=""
  precio.value=""
  costo.value=""
  minimo.value=""
  stock.value=""
  id.value=""
})
consultar.addEventListener('click', async ()=>{
  const respproductos:IResProducto 
  =  await (await httpAxios.get<IResProducto>('productos')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { productos } = respproductos;

    for (const producto of productos)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${producto._id}" >${producto.nombre}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${producto.precio}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const producto:Producto 
          =  await (await httpAxios.get<Producto>(`productos/${idx}`)).data;
          nombre.value= producto.nombre;          
          precio.value= producto.precio.toString();  
          costo.value= producto.costo.toString();  
          minimo.value= producto.minimo.toString();  
          stock.value= producto.stock.toString();  
          estado.value= producto.estado!.toString();  
          id.value= producto._id!;  
           
      })
    })

  

    

  

})
grabar.addEventListener('click',async ()=>{
  const data:Producto = {
    nombre:nombre.value,
    costo: Number( costo.value),
    precio: Number( precio.value),
    minimo: Number( minimo.value),
    stock: Number( stock.value),

  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Producto = await (await httpAxios.put<Producto>(`productos/${id.value}`)).data
    console.log(`El prducto ${resp.nombre} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Producto =  await (await httpAxios.post<Producto>(`productos`, data)).data
    console.log(`El producto ${resp.nombre} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})