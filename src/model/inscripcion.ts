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