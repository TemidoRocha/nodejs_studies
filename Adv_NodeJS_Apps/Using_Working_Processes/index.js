const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  /**
   * master process
   */
  console.log('this is the master process: ', process.pid);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${process.pid} had died`);
    console.log('starting a new worker');
    /**
     * every time a server goes down we initiate a new process
     */
    cluster.fork();
  });
  //
} else {
  /**
   * worker process
   */
  console.log(`started a worker at ${process.pid}`);
  http
    .createServer((req, res) => {
      res.end(`process: ${process.pid}`);
      if (req.url === '/kill') {
        /**
         * here we allow the user to kill a server
         * (NOT FOR PRODUCTION)
         */
        process.exit();
      } else {
        const message = `serving from ${process.pid}...`;
        console.log(message);
      }
    })
    .listen(3000);
}

/**
 * 
 * list -g: display a tree of every package found in the user’s folders (without the -g option it only shows the current directory’s packages)
 * --depth 0 / --depth=0: avoid including every package’s dependencies in the tree view


 * npm i loadtest -g
 * https://github.com/alexfernandez/loadtest
 * this is usefull to test traffic
 * loadtest -n 300 http://localhost:3000
 

 * npm i -g pm2
 * http://pm2.io/
 *
 * With PM2 Plus you get:
 *  - A Real-time Monitoring Web Interface
 *  - Issues & Exception Tracking
 *  - Deployment reporting
 *  - Realtime logs
 *  - Email & Slack notifications
 *  - Custom Metrics Monitoring
 *  - Custom Actions Center
 * 
 * CMDS:
 * pm2 start app.js -i 3 (number of instances)
 * pm2 start app.js -i -1
 * pm2 stop app
 * pm2 delete app
 * pm2 monit
 * pm2 list
 * pm2 reload app // in case you update the code, you can reload with this command
 *
 */
