const express = require('express');
const socket = require("socket.io")

const app = express();
const apiRoutes = require('./routes/api');

const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);


const port = process.env.PORT || 3000;
const server = app.listen(port)
console.log(`Socket server is running on port ${port}`);

const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection (socket) {
    console.log(socket);
}

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });