const http = require('http');
const sockjs = require('sockjs')

var sockServer = sockjs.createServer({
  sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
});

sockServer.on('connection', conn => {
    console.log("Connection established");

    conn.on('data', (message) => {
        conn.write(message);
    });

    conn.on('close', () => {

    });
});

var server = http.createServer();

sockServer.installHandlers(server, { prefix:'/echo' });

console.log(' [*] Listening on 0.0.0.0:9999' );
server.listen(9999, '0.0.0.0')
