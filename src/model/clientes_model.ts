
export interface Cliente{
    id_cliente?: number;
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    fecha_nacimiento: string;
    correo?:string;
    celular?: string;
    direccion?: string;
    fecha_registro: string;
}
export interface Membresia{
    id_membresia?: number;
    nombre: string;
    costo: number;
    duracion_meses: number;
}
export interface Inscripcion{
    id_inscripcion?: number;
    id_cliente: number;
    id_membresia: number;
    costo: number;
    fecha_inicio: string;
    fecha_fin: string;
    pagado: boolean;
    activo: boolean;
}

export interface Pago{

    id_pago?: number;
    tipo: 'INSCRIPCION' | 'MEMBRESIA' | 'OTRO';
    monto: number;
    fecha_pago: string;
    metodo_pago: 'EFECTIVO' | 'TARJETA' | 'TRANSFERENCIA';
    
}