const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('this is the master process: ', process.pid);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      const message = `worker ${process.pid}...`;
      console.log(message);
      res.end(message);
    })
    .listen(3000);
}

/**
 * npm i loadtest -g
 * this is usefull to test traffic
 * loadtest -n 300 http://localhost:3000
 */
