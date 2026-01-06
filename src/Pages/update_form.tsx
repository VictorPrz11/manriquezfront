import type { Cliente } from "../model/clientes_model";

interface UpdateFormProps {
    onClose: () => void; // Definimos que recibiremos una función
    datosCliente? : Cliente; // Datos del cliente a actualizar (opcional)

}

const UpdateForm = ({ onClose, datosCliente }: UpdateFormProps) => {
    return (
        <div className="Screen_container">
            <h1>Update Form</h1>
            <button onClick={() => {
                console.log("Actualizar cliente...");
                console.log("Datos del cliente a actualizar:", datosCliente);
                onClose(); 
            }}>
                Cancelar
            </button>

            <h1>
                Aquí iría el formulario para actualizar al cliente {datosCliente?.nombres} {datosCliente?.apellido_paterno} {datosCliente?.apellido_materno}
            </h1>
            <form>

                <label htmlFor="nombre">Nombre:</label>
                <input className="search_client_input" type="text" id="nombre" name="nombre" defaultValue={datosCliente?.nombres} />
                <label htmlFor="apellido_paterno">Apellido Paterno:</label>
                <input type="text" id="apellido_paterno" name="apellido_paterno" defaultValue={datosCliente?.apellido_paterno} />
                <label htmlFor="apellido_materno">Apellido Materno:</label>
                <input type="text" id="apellido_materno" name="apellido_materno" defaultValue={datosCliente?.apellido_materno} />
                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" defaultValue={datosCliente?.fecha_nacimiento} />
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" defaultValue={datosCliente?.celular} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" defaultValue={datosCliente?.correo} />
                <button type="submit">Actualizar Cliente</button>



            </form>
        </div>

        
    );
};

export default UpdateForm;