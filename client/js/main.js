// ===========================================================================================================================================================================
// Voordat je aan de slag gaat, moet je in je Command Prompt of Terminal eerst in de root directory "npm install" doen. (Dit is voor de benodigde dependencies in server.js);
// Om de node.js server te draaien, moet je in de root directory "npm start" uitvoeren. Ga naar localhost:2000 om je resultaten te zien.
// ===========================================================================================================================================================================

// Instantie van Socket.io. Als je geen host meegeeft, pakt hij automatisch de huidige domain/host. (In dit geval: Localhost:2000)
var socket = io();
// De client kan net zoals de server, berichten ontvangen en versturen. Dit doe je met socket.on('eventname', function() {}) en socket.emit('eventname', data);
// Op https://socket.io/docs/ kun je de documentatie bekijken.


// Input veld waar een keydown event op moet komen, die ervoor gaat zorgen dat er een message naar de server wordt gestuurd.
const input = document.getElementById('chat-input');

// Div waar inkomende chat berichten aan worden toegevoegd.
const chat = document.getElementById('chat-content');

// keydown event functie
    // 'emit' een bericht naar de server en stuur de value van de 


// functie die luistert naar socket event van de server.


// EXTRA: Als je alles werkend hebt, kun je kijken of het voor elkaar kan krijgen om een gebruikersnaam te koppelen aan een message.
