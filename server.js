const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here 
  const url = req.url;
  const method = req.method;

  if (url.startsWith('/static') && url.split('/')[3] === 'dog.jpg') {
    const dog = fs.readFileSync('./assets/images/dog.jpg');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    return res.end(dog);
  }

  if (url.startsWith('/static') && url.split('/')[3] === 'application.css') {
    const css = fs.readFileSync('./assets/css/application.css');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    return res.end(css);
  }


  const html = fs.readFileSync('./index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  return res.end(html);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));