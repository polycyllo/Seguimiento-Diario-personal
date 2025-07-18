import TareasForm from './components/TareasForm'
import TareasList from './components/TareasList'

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento diario {''}
          <span className="text-indigo-700">Notas</span>
        </h1>

        <div className="mt-12 md:flex">
          <TareasForm/>
          <TareasList/>
        </div>
      </div>
    </>
  )
}

export default App
