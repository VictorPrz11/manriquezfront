import { useEffect, useState } from 'react';
import axios from 'axios';
import Header_table_clients from '../Components/Header_table_clients';
import IconButton from '../Components/IconButton';
import type { Cliente } from '../model/clientes_model';


const Clientes_screen = () => {
  /*
     
    const people = [
    { name: 'Juan Perez', vencimiento: '04/10/2025' },
    { name: 'Maria Gomez', vencimiento: '04/10/2025' },
    { name: 'Carlos Rodriguez', vencimiento: '10/10/2025' },
    { name: 'Ana Martinez', vencimiento: '12/10/2025' },
    { name: 'Luis Fernandez', vencimiento: '15/10/2025' },
    { name: 'Sofia Lopez', vencimiento: '18/10/2025' },
    { name: 'Miguel Sanchez', vencimiento: '20/10/2025' },
    { name: 'Laura Ramirez', vencimiento: '22/10/2025' },
    { name: 'Diego Torres', vencimiento: '25/10/2025' },
    { name: 'Elena Flores', vencimiento: '28/10/2025' },
    { name: 'Andres Gutierrez', vencimiento: '30/10/2025'},
    { name: 'Camila Diaz', vencimiento: '02/11/2025' },
    { name: 'Javier Morales', vencimiento: '05/11/2025' },
    { name: 'Valentina Ortiz', vencimiento: '08/11/2025' },
    { name: 'Santiago Castro', vencimiento: '10/11/2025' },
    { name: 'Isabella Rojas', vencimiento: '12/11/2025' },
    { name: 'Sebastian Vega', vencimiento: '15/11/2025' },
    { name: 'Natalia Silva', vencimiento: '18/11/2025' },
    { name: 'Gabriela Mendoza Hernandez', vencimiento: '22/11/2025' },
    { name: 'María Fernanda Salazar Castillo', vencimiento: '20/11/2025' },

]
  */ 

const [person, setPersons] = useState<Cliente[]>([]);

useEffect(() => {
    console.log('Fetching clients data...');
    axios.get('http://localhost:3000/clientes')
        .then(res => {setPersons(res.data.usuarios);
            console.log(typeof res.data)
        })}, );
console.log(person);
const listItems = person.map((person) =>
    <Header_table_clients key={person.id_cliente}>
        <h3 >{person.nombres}</h3>
        <h3>{person.fecha_nacimiento}</h3>
        <div className='buttons_container'>
        <IconButton icono={<img src={'src/assets/editar.png'}/>} funcion={()=>{alert(`Editar ${person.id_cliente}`)}}/>    
        <IconButton icono={<img src={'src/assets/borrar.png'}/>} funcion={()=>{alert(`Eliminar ${person.id_cliente}`)}}/>
        </div>
    </Header_table_clients>
)
   return <>
    <div className="Screen_container">
        <div className="search_add_client_container">
            <input type="text" placeholder="Busqueda de cliente" className="search_client_input_screen" />
            <button className="add_client" onClick={()=>{
                console.log("Agregar cliente");

            }}>
                <span className="texto_add_cliente">AGREGAR CLIENTE</span>
            </button>
        </div>
             <div className='header_estatico'>
                 <Header_table_clients estatico>
                <h1>Nombre</h1>
                <h1>Fecha de nacimiento</h1> 
                <div style={{width:"20%"}}/>
                </Header_table_clients> 
                </div> 
            <div className="table_clients_container">  
                {listItems}                      
            </div>
        </div>   
         </>
}
export default Clientes_screen; 
