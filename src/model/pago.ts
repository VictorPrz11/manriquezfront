
export interface Pago{

    id_pago?: number;
    tipo: 'INSCRIPCION' | 'MEMBRESIA' | 'OTRO';
    monto: number;
    fecha_pago: string;
    metodo_pago: 'EFECTIVO' | 'TARJETA' | 'TRANSFERENCIA';
    
}