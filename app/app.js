const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const logsDir = process.env.LOGS_DIR || './logs';


require('dotenv').config();


if (logsDir && !fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir, { recursive: true });
}



const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//servir les fichiers statiques pour l'interface utilisateur
app.use('/ocean-2/qr', express.static(' https://hyblab.polytech.univ-nantes.fr/ocean-2/qr'));
app.use('/ocean-2/presentation', express.static(' https://hyblab.polytech.univ-nantes.fr/ocean-2/presentation'));


app.use(express.static('public')); 

io.on('connection', (socket) => {
    const ipAddress = socket.handshake.address;
    console.log(`Un client est connecté : ${ipAddress}`);

    socket.on('disconnect', () => {
        console.log(`Client déconnecté : ${ipAddress}`);
    });

    //gestion des messages textes
    socket.on('envoyer-message', (msg) => {
        const logMessage = `${ipAddress} a envoyé un message : ${msg}`;
        console.log(logMessage);
        logActivity(logMessage);
    });

    //gestion des images et "vidéos"
    socket.on('envoyer-media', (mediaData) => {
        const type = mediaData.type === 'video' ? 'vidéo' : 'image';
        const logMessage = `${ipAddress} a envoyé une ${type} : ${mediaData.contenu.slice(0, 30)}...`;
        console.log(logMessage);
        logActivity(logMessage);
    });

    socket.on('rejoindre-presentation', () => {
        socket.join('room-presentation');
    });
});

function logActivity(content) {
    //emettre les logs uniquement à l'interface de présentation
    io.to('room-presentation').emit('log', content);

    //ecrire les logs dans le fichier
    const logFilePath = `${logsDir}/activity.log`;

    fs.appendFile(logFilePath, content + '\n', err => {
        if (err) console.error('Erreur lors de l\'écriture du log', err);
    });
}


const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
