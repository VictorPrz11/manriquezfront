import { pool } from "../config/database";
import type { Cliente } from "../model/clientes_model";

export const agregarCliente = async (cliente:Cliente)=>{
    await pool.execute('CALL agregar_cliente(?,?,?,?,?,?,?,?)',[
        cliente.nombres,
        cliente.apellido_paterno,
        cliente.apellido_materno,
        cliente.fecha_nacimiento,
        cliente.correo || null,
        cliente.celular || null,
        cliente.direccion || null,
        cliente.fecha_registro //depende completamente de la hora local del servidor
    ]);
}