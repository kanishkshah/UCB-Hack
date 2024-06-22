import * as https from 'https';
import * as fs from 'fs';
import * as WebSocket from 'ws';
import app from './app';
import config from './config';

var privateKey  = fs.readFileSync(process.env.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(process.env.SSL_CERT, 'utf8');
var credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

const wsServer = new WebSocket.Server({ server: httpsServer });

httpsServer.listen(config.express.port, () => {
    console.log(`Express server listening on port ${config.express.port}`);
});

wsServer.on('connection', (ws: WebSocket) => {

    console.log(`Websocket connected`);

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {

        // log the received message
        console.log('received: %s', message);
        
    });
});
