import type { User } from "../types"
import UserDetailItem from "./UserDetailItem"
import { useUserStore } from "../store/store"
import { toast } from "react-toastify"
type UserDetailsProps = {
    user: User
}
export default function UserDetails({user} : UserDetailsProps) {
    const deleteUser = useUserStore(state => state.deleteUser)
    const getUserById = useUserStore(state => state.getUserById)
    const handleClick = () => {
        deleteUser(user.id)
        toast('Tarea eliminada',{
            type:'error'
        })
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <UserDetailItem label='ID' data={user.id}/>
            <UserDetailItem label='Nombre' data={user.name}/>
            <UserDetailItem label='Area' data={user.area}/>
            <UserDetailItem label='Email' data={user.email}/>
            <UserDetailItem label='Fecha limite' data={user.date.toString()}/>
            <UserDetailItem label='Motivo' data={user.issues}/>

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getUserById(user.id)}
                >Editar</button>

                <button
                    type="button"
                    className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >eliminar</button>
            </div>
        </div>
    )
}
