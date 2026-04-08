const { bookTable , authorTable } = require('../models/index');
const db = require("./db");
const { eq } = require('drizzle-orm');

exports.getAllBooks = async function(req,res) {
    const books = await db.select().from(bookTable);
    res.json(books);
};

exports.getBooksById = async function(req,res) {
    const id = req.params.id;

    const book = await db.select().from(bookTable).where(eq(bookTable.id,id)).limit(1);

    if (!book) {
        return res
            .status(404)
            .json({ error: `book with id ${id} not exist` });
    }
    return res.json(book);
};

exports.CreateBooks = async function(req,res){
    const { title, authorId , description } = req.body;
    if (!title || title === '') return res.status(400).json({ error: 'title is required' });
    const result = await db.insert(bookTable).values({
        title,
        authorId,
        description,
    }).returning({
        id: bookTable.id,
    });

    return res.status(201).json({ message: `books created successfully with`, id: result.id });
};

exports.deleteBookById = async function(req,res) {
    const id = parseInt(req.params.id);

    await db.delete(bookTable).where(eq(bookTable.id,id));
    return res.status(200).json({ messgae: "entry deleted" });
};