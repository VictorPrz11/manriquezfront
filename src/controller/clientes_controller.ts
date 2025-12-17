import type{ Request, Response } from "express"
import { agregarCliente } from "../services/clientes_service"

export const crearCliente = async (req:Request, res:Response)=>{
    try {
        await agregarCliente(req.body);
        res.status(201).json({message:'Cliente creado exitosamente'});
    }catch (error) {
        res.status(500).json({message:'Error al crear el cliente, intentelo de nuevo...', error});
        
    }
   
}
