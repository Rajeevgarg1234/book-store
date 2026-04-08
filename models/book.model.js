const { pgTable ,  uuid , varchar , text} = require("drizzle-orm/pg-core");
const authorTable = require("./author.model");
const booksTable =pgTable("books",{
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 255}).notNull(), // varchar have the fixed length
    description: text(),  // while text have the very long lengh
    authorId: uuid().references(() => authorTable.id ).notNull(),  // this is the foreign relationship and this type of relatioship are not possibe in the mongodb
})

module.exports = booksTable;