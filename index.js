// create server using express

// const express = require('express')
// const app = express();
// const PORT = 8000;

// app.get('/', function(req,res) {
//     res.end(`homepage`);
// });

// app.listen(8000, () => console.log(`app is running on port ${PORT}`));


// create server using the http

// const http = require('node:http');
// const PORT = 8000
// const server = http.createServer(function(req,res){
//     console.log(req.url);
//     res.writeHead(200);
//     switch(req.url){
//         case '/':
//             return res.end('homepage of rajeev');
//         case '/contact-us':
//             return res.end("content me at my mail id");
//         case '/about':
//             return res.end("hello i am rajeev");
//         default:
//             res.writeHead(404);
//             res.end("you are lost");
//     }
    
// });
// server.listen(8000, () => console.log(`server is running in the port ${PORT}`));