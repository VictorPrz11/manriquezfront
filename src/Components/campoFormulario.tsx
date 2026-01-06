

interface CampoFormularioProps {
    type: string;
    id: string;
    name: string;
    defaultValue?: string;
    ancho?: number;
    value?: string;
    cambio?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string; // Agregamos el parámetro error
}

const CampoFormulario = ({ type, id, name, defaultValue, ancho, value, cambio, error }: CampoFormularioProps) => {
    // Estilo para resaltar el error en el borde del input
    const estiloInputError = error ? { border: "1.5px solid #ff0000" } : {};

    return (
        ancho != null ? (
            <div className="form_container">
                <label htmlFor={id} style={error ? { color: "#ff0000" } : {}}>{name}</label>
                <div style={{ height: "8px" }} />

                <div className="form_input" style={{ width: `${ancho}px`, ...estiloInputError }}>
                    <input type={type} id={id} name={name} defaultValue={defaultValue} value={value} onChange={cambio} />
                </div>
                {/* Mensaje de error debajo del input */}
                {error && <span style={{ color: "#ff0000", fontSize: "11px", marginTop: "4px" }}>{error}</span>}
            </div>
        ) : (
            <div className="form_container">
                <label htmlFor={id} style={error ? { color: "#ff0000" } : {}}>{name}</label>
                <div style={{ height: "8px" }} />
                <div className="form_input" style={estiloInputError}>
                    <input type={type} id={id} name={name} defaultValue={defaultValue} value={value} onChange={cambio} />
                </div>
                {/* Mensaje de error debajo del input */}
                {error && <span style={{ color: "#ff0000", fontSize: "11px", marginTop: "4px" }}>{error}</span>}
            </div>
        )
    );
}

export default CampoFormulario;