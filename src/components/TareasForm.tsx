import { useForm} from 'react-hook-form'
import Error from './Error'
import type { DraftUser } from '../types'
import { useUserStore } from '../store/store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
export default function TareasForm() {
  
  const addUser = useUserStore(state => state.addUser)
  const activeId = useUserStore(state => state.activeId)
  const users = useUserStore(state => state.users)
  const updateUser = useUserStore(state => state.updateUser)

  const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftUser>()
  
  useEffect(() => {
    if(activeId) {
      const activeUser = users.filter(user => user.id===activeId)[0]
      setValue('name', activeUser.name)
      setValue('area', activeUser.area)
      setValue('date', activeUser.date)
      setValue('email', activeUser.email)
      setValue('issues', activeUser.issues)
    }
  },[activeId])
  
  const registerUser = (data: DraftUser) => {
    if(activeId){
      updateUser(data)
      toast.success('Tarea actualizada correctamente')
    } else{
      addUser(data)
      toast.success('Tarea registrada correctamente')
    }
    reset()
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento diario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade tareas y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerUser)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Nombre
          </label>
          <input 
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del usuario"
            {...register('name', {
              required: 'El nombre del usuario es obligatorio'
            })}
            />
            {errors.name && (
              <Error>{errors.name?.message}</Error>
            )}
        </div>

        <div className="mb-5">
          <label htmlFor="area" className="text-sm uppercase font-bold">
            Area/Materia
          </label>
          <input
            id="area"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre de area/materia"
            {...register('area', {
              required: 'El nombre de area es obligatorio'
            })}
          />
          {errors.area && (
            <Error>{errors.area?.message}</Error>
          )}
          
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })} 
          />
          {errors.email && (
            <Error>{errors.email?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha limite
          </label>
          <input
            id="date"
            className="w-full p-3 border border-gray-100"
            type="date"
            {...register('date', {
              required: 'La fecha limite es obligatoria'
            })}
          />
          {errors.date && (
            <Error>{errors.date?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="issues" className="text-sm uppercase font-bold">
            Asunto
          </label>
          <textarea
            id="issues"
            className="w-full p-3 border border-gray-100"
            placeholder="Asunto del usuario"
            {...register('issues', {
              required: 'El asunto es obligatorio'
            })}
          />
          {errors.issues && (
            <Error>{errors.issues?.message}</Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Asunto"
        />
      </form>
    </div>
  )
}
