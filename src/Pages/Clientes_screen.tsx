import { useEffect, useState } from 'react';
import Header_table_clients from '../Components/Header_table_clients';
import IconButton from '../Components/IconButton';
import type { Cliente } from '../model/clientes_model';
import { apiEliminarCliente, apiObtenerClientes } from '../API/api_clientes';
import RegistroCliente from './Registro_cliente';

const Clientes_screen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [person, setPersons] = useState<Cliente[]>([]);
    const [updateForm, setUpdateForm] = useState(false);
    const [addClienteForm, setaddClienteForm] = useState(false); // Tu variable de bandera para nuevos
    const [datosCliente, setDatosCliente] = useState<Cliente | undefined>(undefined);

    useEffect(() => {
        apiObtenerClientes().then((res: any) => {
            setPersons(res.data);
        }).catch(error => {
            alert(`Error al obtener los datos de los clientes: ${error.message}`);
        });
    }, []);

    const filteredPersons = person.filter((p) => 
    p.nombres.toLowerCase().includes(searchTerm.toLowerCase())
    )  ;
    if (updateForm) {
        console.log(datosCliente?.id_cliente)
        return <RegistroCliente onClose={()=> setUpdateForm(false)} cliente={datosCliente}/>
    }

    if (addClienteForm) {
        return <RegistroCliente onClose={()=>setaddClienteForm(false)}/>; 
    }

    return (
        <div className="Screen_container">
            <div className="search_add_client_container">
                <input type="text" placeholder="Busqueda de cliente" className="search_client_input_screen" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="add_client" onClick={() => {
                    setaddClienteForm(true); // Activa la pantalla de agregar
                }}>
                    <span className="texto_add_cliente">AGREGAR CLIENTE</span>
                </button>
            </div>
            <div className='header_estatico'>
                <Header_table_clients estatico>
                    <h1>Nombre</h1>
                    <h1>Fecha de nacimiento</h1>
                    <div style={{ width: "20%" }} />
                </Header_table_clients>
            </div>
            <div className="table_clients_container">
                {filteredPersons.map((person) => (
                    <Header_table_clients key={person.id_cliente}>
                        <h3>{person.nombres} {person.apellido_paterno} {person.apellido_materno}</h3>
                        <h3>{person.fecha_nacimiento}</h3>
                        <div className='buttons_container'>
                            <IconButton 
                                icono={<img src={'src/assets/editar.png'} />} 
                                funcion={() => {
                                    setDatosCliente(person);
                                    setUpdateForm(true);
                                }} 
                            />
                            <IconButton 
                                icono={<img src={'src/assets/borrar.png'} />} 
                                funcion={() => {
                                    if (person.id_cliente !== undefined) {
                                        apiEliminarCliente(person.id_cliente).then(() => {
                                            alert(`Cliente ${person.id_cliente} eliminado.`);
                                            setPersons(prev => prev.filter(p => p.id_cliente !== person.id_cliente));
                                        }).catch(error => alert(error.message));
                                    }
                                }} 
                            />
                        </div>
                    </Header_table_clients>
                ))}
            </div>
        </div>
    );
};

export default Clientes_screen;
