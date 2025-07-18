import { useUserStore } from "../store/store"
import UserDetails from "./UserDetails"
export default function TareasList() {
  const users = useUserStore(state => state.users)
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {users.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de tareas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">tareas</span>  
          </p>
          {users.map( user => (
            <UserDetails
              key = {user.id}
              user = {user}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay tareas</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tareas {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
