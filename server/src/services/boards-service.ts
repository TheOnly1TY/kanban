import { db } from "../drizzle/db.js";
import { BoardTable } from "../drizzle/schema.js";

export const getAllBoards = async () => {
  return await db.select().from(BoardTable);
};