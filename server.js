// Importer le module http
const http = require('http');

// Définir le port sur lequel le serveur écoutera les connexions
const PORT = 3000;

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
  // Définir les en-têtes de la réponse HTTP
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Envoyer la réponse au client avec le message Hello Node!!!!
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Démarrer le serveur et écouter les connexions sur le port spécifié
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

