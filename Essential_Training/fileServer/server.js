const { createServer } = require('http');
const { createReadStream } = require('fs');

// in order to decode the body of the request
const { decode } = require('querystring');

/**
 * this function will take:
 * @param {*} res // response stream
 * @param {*} status // send in the header
 * @param {*} type // send in the header
 * @param {*} filePath
 */
const sendFile = (res, status, type, filePath) => {
  // create teh header
  res.writeHead(status, { 'Content-Type': type });

  // the readable stream will take the file to be returned as a writable stream
  createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      const { name, email, message } = decode(body);

      console.log(`${name} (${email}): ${message}`);
    });
  }

  switch (req.url) {
    case '/':
      return sendFile(res, 200, 'text/html', './home-page.html');
    case '/contact':
      return sendFile(res, 200, 'text/html', './contact.html');
    case '/img/alex-banks.jpeg':
      return sendFile(res, 200, 'image/jpeg', './alex-banks.jpeg');
    case '/styles.css':
      return sendFile(res, 200, 'text/css', './styles.css');
    default:
      return sendFile(res, 200, 'text/html', './404.html');
  }
}).listen(3000);

console.log("Alex's personal website runnning on port 3000");
