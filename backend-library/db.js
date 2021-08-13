const firebase = require('firebase');
const config = require('./config');

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;

/*

cloudinary.config({ 
  cloud_name: 'dkgxwlji4', 
  api_key: '964826622558483'

production, 
  api_secret: 'O54-3L7MIIaYxB1gY4c_M3DNZEw' 
});

*/