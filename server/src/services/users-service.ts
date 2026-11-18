import { eq } from "drizzle-orm"
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

export const getUser = async (key: "email" | "id", value: string) => {
    const condition = key === "email"
        ? eq(UsersTable.email, value)
        : eq(UsersTable.id, value)

    const [user] = await db.select().from(UsersTable).where(condition);

    return user
}
