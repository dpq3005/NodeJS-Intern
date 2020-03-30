const http = require('http');
const url = require('url');
const fs = require('fs');


function todo(req, res) {
  fs.readFile('TODO.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    if (http.method === 'POST') {
      let { newTodo } = req.body.newTodo;
      fs.appendFile('TODO.html', newTodo);
    }
    res.end();
  })

}


const server = http.createServer((req, res) => {
  if (req.url === '/todo') {
    return todo(req, res);
  }
  res.writeHead(404);
  res.end(http.STATUS_CODES[404]);
})


server.listen(3000, () => {
  console.log('Server is listening at port 3000');
})