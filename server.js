const express = require('express'); // require express.js
const db = require('./config/connection.js'); // require the mongoose connection
// create the app and port
const app = express();
const PORT = 4001 || process.env.PORT;
// require for making post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running at localhost:${PORT}/`);
    });
  });  
