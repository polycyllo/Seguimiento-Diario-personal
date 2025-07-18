export type User = {
    id: string
    name: string
    area: string
    email: string
    date: Date
    issues: string
}

export type DraftUser = Omit<User, 'id'>