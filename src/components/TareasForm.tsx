
export default function TareasForm() {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento diario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade tareas y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Nombre
          </label>
          <input 
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del usuario"
          />
        </div>
      </form>
    </div>
  )
}
