import { db } from "../drizzle/db.js"
import { UsersTable } from "../drizzle/schema.js"

type UserType = {
    name: string,
    email: string,
    password: string,
}

export const createUser = async (user: UserType) => {
   const [newUser] =  await db.insert(UsersTable).values(user).returning({ id: UsersTable.id, createdAt: UsersTable.createdAt, name: UsersTable.name, email: UsersTable.email })

   return newUser
}
