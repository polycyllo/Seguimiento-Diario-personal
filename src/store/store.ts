import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { DraftUser, User } from '../types'
import { v4 as uuidv4 } from 'uuid'

type UserState = {
    users: User[]
    activeId: User['id']
    addUser: (data: DraftUser) => void
    deleteUser: (id: User['id']) => void
    getUserById: (id: User['id']) => void
    updateUser: (data: DraftUser) => void
}
const createUser = (user: DraftUser) : User => {
    return {
        ...user, id: uuidv4()
    }
}
export const useUserStore = create<UserState>()(
    devtools(
    persist((set) => ({
        users: [],
        activeId: '',
        addUser: (data) => {
            const newUser = createUser(data)
            set((state) => ({
                users: [...state.users, newUser]
            }))
        },
        deleteUser: (id) => {
            set((state) => ({
                users: state.users.filter(user => user.id!==id)
            }))
        },
        getUserById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updateUser: (data) => {
            set((state) => ({
                users: state.users.map(user => user.id === state.activeId ? { id: state.activeId, ...data }: user),
                activeId: ''
            }))
        }
    }),{
        name: 'user-storage'
    })
))