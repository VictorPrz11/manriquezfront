import { useState } from "react";

interface Props {
  open?: boolean;
  onClose: () => void;
}

const AddClientPopup = ({ open=false, onClose }: Props) => {

  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    celular: "",
    direccion: "",
    inscripcion: "",
    membresia: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Cliente agregado correctamente");
    onClose(); // <-- aquí se cierra correctamente
  };

  if (!open) return null; // <-- evita render innecesario

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[99999]">

      <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] max-h-[90vh] overflow-y-auto">

        <h2 className="text-xl font-bold mb-4 text-center">
          Registrar Cliente
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input type="text" name="nombre" placeholder="Nombre(s)"
            value={formData.nombre} onChange={handleChange} className="w-full border p-2 rounded" required />

          <input type="text" name="apellidoPaterno" placeholder="Apellido paterno"
            value={formData.apellidoPaterno} onChange={handleChange} className="w-full border p-2 rounded" required />

          <input type="text" name="apellidoMaterno" placeholder="Apellido materno"
            value={formData.apellidoMaterno} onChange={handleChange} className="w-full border p-2 rounded" />

          <label className="block text-sm font-medium">Fecha de nacimiento</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento}
            onChange={handleChange} className="w-full border p-2 rounded" required />

          <input type="tel" name="celular" placeholder="Celular"
            value={formData.celular} onChange={handleChange} className="w-full border p-2 rounded" />

          <textarea name="direccion" placeholder="Dirección"
            value={formData.direccion} onChange={handleChange} className="w-full border p-2 rounded" />

          {/* INSCRIPCIÓN */}
          <div>
            <label className="block text-sm font-medium mb-1">Inscripción</label>
            <select name="inscripcion" value={formData.inscripcion} onChange={handleChange}
              className="w-full border p-2 rounded" required>
              <option value="">Seleccionar...</option>
              <option value="pagado">Pagado</option>
              <option value="no pagado">No pagado</option>
            </select>
          </div>

          {/* MEMBRESÍA */}
          <div>
            <label className="block text-sm font-medium mb-1">Tipo de membresía</label>
            <select name="membresia" value={formData.membresia} onChange={handleChange}
              className="w-full border p-2 rounded" required>
              <option value="">Seleccionar...</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              <option value="anual">Anual</option>
            </select>
          </div>

          {/* BOTONES */}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded">
              Cancelar
            </button>

            <button type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded">
              Guardar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddClientPopup;
