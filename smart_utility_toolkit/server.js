// ---------------------------------------------TASK 3:------------------------------------------------------

const http= require('http');

const PORT = 3000;

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.url === '/') {
        res.statuscode = 200;
        res.end('Welcome to the Smart Utility Toolkit!');
    }else if (req.url === '/isEven'){
        res.statuscode = 200;
        res.end('This is the isEven endpoint. You can use this endpoint to check if a number is even or odd.'); 
    }else if (req.url === '/about'){
        res.statuscode = 200;
        res.end("About Page: Built using Node.js core HTTP module."); 
    }else if (req.url === '/contact'){
        res.statuscode = 200;
        res.end("Contact Page: For inquiries, please contact us at palweb@example.com");
    }else{
        res.statuscode = 404;
        res.end('404 Not Found: The requested resource was not found on this server.');
    }
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});