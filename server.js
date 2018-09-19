// const firebase = require('firebase');
const five = require('johnny-five');
const Raspi = require('raspi-io');

// firebase.initializeApp({
  // apiKey: "AIzaSyCx63dO4hmqDjUphM11zba_1ONMcPekQNc",
  // authDomain: "indor-pi.firebaseapp.com",
  // databaseURL: "https://indor-pi.firebaseio.com",
  // projectId: "indor-pi",
  // storageBucket: "indor-pi.appspot.com",
  // messagingSenderId: "407116836792"
// });

// var board = new five.Board();
var board = new five.Board({ 
	io: new Raspi()
});

board.on('ready', () => {

  (new five.Servo({pin: 'P1-11', type: 'standar'})).to(90);
  // firebase.database().ref('servo').on('value').then(snapshot => {
    // console.log(snapshot.val())
  	// servo.to(90);
	// });
});