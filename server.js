// ===========================================================================================================================================================================
// Voordat je aan de slag gaat, moet je in je Command Prompt of Terminal eerst in de root directory "npm install" doen. (Dit is voor de benodigde dependencies in server.js);
// Om de node.js server te draaien, moet je in de root directory "npm start" uitvoeren. Ga naar localhost:2000 om je resultaten te zien.
// ===========================================================================================================================================================================

const express = require('express');
const app = express();
const serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);

console.log('Server started');

// Maak instantie aan van socket.io
var io = require('socket.io')(serv,{});

var SOCKET_LIST = {};

io.sockets.on('connection', (socket) => {
    // Voeg socket toe aan de SOCKET_LIST.
    SOCKET_LIST[socket.id] = socket;

    // maak een socket event die luistert naar inkomende berichten van de clients. (chatberichten)
        // wanneer er een socket event getriggerd wordt (inkomend chatbericht), moet je dit doorsturen naar alle verbonden clients.


    // maak een functie die een client/socket uit de "SOCKET_LIST" verwijdert, wanneer een client disconnect. (TIP: Er is een disconnect event die automatisch wordt aangeroepen.)
})