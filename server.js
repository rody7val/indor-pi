var firebase = require('firebase-admin');
var five = require('johnny-five');
var Raspi = require('raspi-io');
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  // apiKey: "AIzaSyCx63dO4hmqDjUphM11zba_1ONMcPekQNc",
  // authDomain: "indor-pi.firebaseapp.com",
  databaseURL: "https://indor-pi.firebaseio.com",
  // projectId: "indor-pi",
  // storageBucket: "indor-pi.appspot.com",
  // messagingSenderId: "407116836792"
});

// var board = new five.Board();
var board = new five.Board({ 
	io: new Raspi()
});

board.on('ready', () => {
  var db = firebase.database();
  // var led = new five.Led("P1-11");
  // led.blink();
  db.ref('servo').on('value', snapshot => {
    console.log(snapshot.val())
	});
});