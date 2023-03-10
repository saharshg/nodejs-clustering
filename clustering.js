//restricting the threads
process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster');

// Is the file being executed in master mode?
if(cluster.isMaster) {
    // Cause index.js to be exceuted *again* but
    // in child mode
    cluster.fork();
} else {
    // I'm a child, I'm going to act like a server
    // and do nothing else
    const express = require('express')
    const app = express();
    const crypto = require('crypto');
    
    app.get('/', (req, res) => {
        // Blocking with some heavy computation
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        })
    })

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    })
    
    app.listen(3000)
}
