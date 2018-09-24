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

  var controller_foco = new five.Led("P1-13");
  var controller_cooler = new five.Led("P1-11");
  
  ref_foco.on('value', snapshot => {
    var value = snapshot.val();
    console.log('foco:', value);

    if (!value) {
      foco.off();
    } else {
      foco.on();
    }
  });
  
  ref_cooler.on('value', snapshot => {
    var value = snapshot.val();
    console.log('cooler:', value);
    
    if (!value) {
      cooler.off();
    } else {
      cooler.on();
    }
  });
});