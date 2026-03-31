const express = require('express');
const app = express();

const PORT = 8000;

const books = [
  {
    "id": 1,
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell"
  },
  {
    "id": 3,
    "title": "Pride and Prejudice",
    "author": "Jane Austen"
  }
];


app.use(express.json());

// Routes

app.get('/books', (req,res) => {
  res.json(books);
});

app.get('/books/:id', (req,res) =>{

const id = parseInt(req.params.id);
if(isNaN(id)){
  return res.status(400)
  .json({error: 'id must be a num'});

}

const book = books.find(e=> e.id === id);

if(!book){
  return res
  .status(404)
  .json({error: `book with id ${id} not exist`});
}
return res.json(book);
});

app.post('/books', (req,res) => {
  
const { title, author } = req.body;
if(!title || title === '') return res.status(400).json({error: 'title is required'});
if(!author || author === '') return res.status(400).json({error: 'author is required'});

const id = books.length + 1 ;

const book = { id , title , author };
books.push(book);
return res.status(201).json({message: `books created successfully with id ${id}`});

});

app.delete('/books/:id', (req,res) =>{

const id = parseInt(req.params.id);
console.log("id",id);

if(isNaN(id)){
  return res.status(400)
  .json({error: 'id must be a num'});

}

const bookToDelete = books.findIndex(e=> e.id === id);
console.log("bookToDelete",bookToDelete);


if(bookToDelete < 0 ) {
  return res
  .status(404)
  .json({error: `book with id ${id} not exist`});
}
books.splice(bookToDelete,1);
return res.status(200).json({messgae: "entry deleted"});
});

app.listen(PORT, () => console.log(`server is running in the PORT ${PORT}`) );