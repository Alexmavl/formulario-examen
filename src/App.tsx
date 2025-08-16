import React, { useState } from "react";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    saludo: "",
    nombre: "",
    apellido: "",
    genero: "",
    email: "",
    fechaNacimiento: "",
    direccion: "",
  });

  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-xl font-bold text-blue-600">
            Detalles Personales
          </legend>

          <label className="block mt-4 font-medium">
            Saludo:
            <select
              name="saludo"
              value={formData.saludo}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            >
              <option>--Ninguno--</option>
              <option>Sr.</option>
              <option>Sra.</option>
              <option>Srta.</option>
            </select>
          </label>

          <label className="block mt-4 font-medium">
            Nombre:
            <input
              type="text"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            />
          </label>

        
          <label className="block mt-4 font-medium">
            Apellido:
            <input
              type="text"
              name="apellido"
              required
              value={formData.apellido}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            />
          </label>

          
          <div className="mt-4">
            <span className="font-medium">Género:</span>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="Masculino"
                  checked={formData.genero === "Masculino"}
                  onChange={handleChange}
                  className="peer hidden"
                />
                <span className="px-4 py-2 rounded-md border border-blue-500 text-blue-600 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white transition">
                  Masculino
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="Femenino"
                  checked={formData.genero === "Femenino"}
                  onChange={handleChange}
                  className="peer hidden"
                />
                <span className="px-4 py-2 rounded-md border border-pink-500 text-pink-600 cursor-pointer peer-checked:bg-pink-600 peer-checked:text-white transition">
                  Femenino
                </span>
              </label>
            </div>
          </div>
          
          <label className="block mt-4 font-medium">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            />
          </label>

          
          <label className="block mt-4 font-medium">
            Fecha de Nacimiento:
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            />
          </label>

          
          <label className="block mt-4 font-medium">
            Dirección:
            <textarea
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              rows={3}
            />
          </label>

        
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
          >
            Enviar
          </button>
        </fieldset>
      </form>

    
      {submittedData && (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg mt-8">
          <h2 className="text-lg font-bold mb-4 text-blue-600">Datos enviados:</h2>
          <ul className="space-y-2">
            <li><strong>Saludo:</strong> {submittedData.saludo}</li>
            <li><strong>Nombre:</strong> {submittedData.nombre}</li>
            <li><strong>Apellido:</strong> {submittedData.apellido}</li>
            <li><strong>Género:</strong> {submittedData.genero}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Fecha de Nacimiento:</strong> {submittedData.fechaNacimiento}</li>
            <li><strong>Dirección:</strong> {submittedData.direccion}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;