const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use('/datapage', express.static(path.join(__dirname, '../client/datapage')));
app.use('/mobilepage', express.static(path.join(__dirname, '../client/mobilepage')));


app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('send message', (msg) => {

    io.emit('new message', msg);

  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

