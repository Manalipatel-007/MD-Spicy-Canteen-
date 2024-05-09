const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server');
});

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocket.Server({ server });

// Track connected clients
const clients = new Set();

// Handle connection
wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    // Handle messages from clients (optional)
    ws.on('message', (message) => {
        console.log(`Received message from client: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });
});

// Function to send notifications to all connected clients
function sendNotification(notification) {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(notification));
        }
    });
}

// Example: Send a notification every 10 seconds
setInterval(() => {
    const notification = {
        type: 'info',
        message: 'This is a test notification',
        timestamp: new Date().toISOString()
    };
    sendNotification(notification);
}, 10000);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
