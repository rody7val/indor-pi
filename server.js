// require('dotenv').config()
const firebase = require('firebase-admin');
const five = require('johnny-five');
const Raspi = require('raspi-io');
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://indor-pi.firebaseio.com"
});

const board = new five.Board({
  io: new Raspi()
});

board.on('ready', () => {
  const db = firebase.database();

  const ref_foco = db.ref('foco');
  const ref_cooler = db.ref('cooler');

  var foco = new five.Led("P1-13");
  var cooler = new five.Led("P1-11");
  
  ref_foco.on('value', snapshot => {
    if (!snapshot) {
      foco.off();
    } else {
      console.log('foco:', snapshot.val());
      foco.on();
    }
  });
  ref_cooler.on('value', snapshot => {

    if (!snapshot) {
      cooler.off();
    } else {
      console.log('cooler:', snapshot.val());
      cooler.on();
    }
  });
});