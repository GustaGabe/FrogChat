const express = require ('express');
const http = require ('http');
const { Server } = require ('socket.io');

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(express.static('public'))


io.on('connection', (socket) => {
    console.log('New user connected:');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000')
});