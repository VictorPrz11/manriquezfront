import { useEffect, useState } from 'react';
import CampoFormulario from '../Components/campoFormulario';
import { apiActualizarCliente, apiCrearCliente } from '../API/api_clientes';

interface RegistroClienteProps {
    cliente?: any;
    onClose?: () => void;
}

const RegistroCliente = ({ onClose, cliente }: RegistroClienteProps) => {
    const ancho = 300;
    const [form, setForm] = useState({
        nombres: '',
        apellido_paterno: '',
        apellido_materno: '',
        correo: '',
        celular: '',
        fecha_nacimiento: '',
        direccion: '',
        fecha_registro: new Date().toISOString().split('T')[0],
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,        // Copia lo que ya estaba en el form
            [name]: value   // Actualiza solo el campo que cambió
        });
    };
    const [errors, setErrors] = useState({
        nombres: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: ''
    });
    const validarCampos = () => {
        let nuevosErrores = {
            nombres: '',
            apellido_paterno: '',
            apellido_materno: '',
            fecha_nacimiento: ''
        };
        let esValido = true;

        if (!form.nombres.trim()) {
            nuevosErrores.nombres = 'Obligatorio';
            esValido = false;
        }
        if (!form.apellido_paterno.trim()) {
            nuevosErrores.apellido_paterno = 'Obligatorio';
            esValido = false;
        }
        if (!form.apellido_materno.trim()) {
            nuevosErrores.apellido_materno = 'Obligatorio';
            esValido = false;
        }
        if (!form.fecha_nacimiento.trim()) {
            nuevosErrores.fecha_nacimiento = 'Obligatorio';
            esValido = false;
        }

        setErrors(nuevosErrores);
        return esValido;
    };
    const enviarForm = () => {
        const formulario_correcto = validarCampos();
        console.log(`Datos del cliente ${form}`);
        if (formulario_correcto && !cliente) {
            console.log('this is working!!!')
            apiCrearCliente(form)
                .then(() => {
                    alert("Cliente creado exitosamente");
                    if (onClose) onClose();
                }
                ).catch((error) => {
                    alert(`Error al crear el cliente: ${error.message}`);
                });

        }
        if (cliente) {
            console.log('Datos del cliente nuevos')
            console.log(form)
            apiActualizarCliente(cliente.id_cliente, form).then(() => {
                if (onClose) onClose();
            }
            ).catch((error) => {
                alert(`Error al actualizar el cliente: ${error.message}`);
            });
        }

    }
    useEffect(() => {
        if (cliente) {
            setForm(cliente);
        }
    }, [cliente]);

    return <div className='Main-Container'>
        <h1 style={{ marginBottom: "50px" }}>REGISTRO DE CLIENTE</h1>
        <form>
            <div className='contenedor-1'>
                <CampoFormulario labelName="Nombres*" name='nombres' id='1' type='text' cambio={(e) => handleChange(e)} error={errors.nombres} value={form.nombres} />
                <CampoFormulario labelName='Apellido paterno*' name='apellido_paterno' id='2' type='text' ancho={ancho} cambio={(e) => handleChange(e)} error={errors.apellido_paterno} value={form.apellido_paterno} />
                <CampoFormulario labelName='Apellido materno*' name='apellido_materno' id='3' type='text' ancho={ancho} cambio={(e) => handleChange(e)} error={errors.apellido_materno} value={form.apellido_materno} />
            </div>
            <div className='separador'></div>
            <div className='contenedor-2'>
                <CampoFormulario labelName='Correo' name='correo' id='4' type='email' cambio={(e) => handleChange(e)} value={form.correo} />
                <CampoFormulario labelName='Celular' name='celular' id='5' type='number' ancho={ancho} cambio={(e) => handleChange(e)} value={form.celular} />
                <CampoFormulario labelName='Fecha de nacimiento*' name='fecha_nacimiento' id='6' type='date' ancho={ancho} cambio={(e) => handleChange(e)} error={errors.fecha_nacimiento} value={form.fecha_nacimiento} />
            </div>
            <div className='separador'></div>
            <div className='contenedor-3'>
                <CampoFormulario labelName='Dirección' name='direccion' id='7' type='text' ancho={ancho + 750} cambio={(e) => handleChange(e)} value={form.direccion} />
            </div>
            <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", width: "100%", flex: "1" }}>
                <button className='cancel' onClick={onClose}>Cancelar</button>
                <button className='enviar-form' onClick={() => enviarForm()} type='submit'>Guardar</button>
            </div>
        </form>

    </div>
}

export default RegistroCliente