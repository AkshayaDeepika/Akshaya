const http= require('http');

const server=http.createServer((req ,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello,node.js!');
});

const port =3000;
server.listen(port,() => {
    console.log(`server running at http://localhost:${port}/`);
})