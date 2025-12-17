import type { Cliente } from "../model/clientes_model";
import axios from "axios";

const API_URL=import.meta.env.DB_HOST || 'http://localhost:3000';

export const apiCrearCliente = async (cliente:Cliente)=>{
    const response = await axios.post(`${API_URL}/clientes`, cliente);
    return response.data;
}