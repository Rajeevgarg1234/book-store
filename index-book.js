require("dotenv/config");
const express = require('express');
const bookRouter = require('./routes/book.routes.js');
const app = express();

const PORT = 8000;



app.use(express.json());

//routes
app.use('/books',bookRouter);
app.listen(PORT, () => console.log(`server is running in the PORT ${PORT}`) );