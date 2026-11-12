import { boolean, pgTable, text, uuid, varchar} from "drizzle-orm/pg-core"

export const BoardTable = pgTable("boards", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", {  length: 255}).notNull(),
})

export const ColumnTable = pgTable("columns", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", {  length: 255}).notNull(),
    boardId: uuid("board_id").notNull().references(() => BoardTable.id, { onDelete: "cascade" })
})

export const TaskTable = pgTable("tasks", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", {  length: 255}).notNull(),
    description: text("description"),
    status: varchar("status", { length: 255}).notNull(),
    columnId: uuid("column_id").notNull().references(() => ColumnTable.id, { onDelete: "cascade" })
})

export const SubtaskTable = pgTable("subtasks", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", {  length: 255}).notNull(),
    isCompleted: boolean("isCompleted").default(false).notNull(),
    taskId: uuid("task_id").notNull().references(() => TaskTable.id, { onDelete: "cascade" })
})