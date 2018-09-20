// const firebase = require('firebase');
var five = require('johnny-five');
var Raspi = require('raspi-io');

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
  console.log('ready')
  // var servo = new five.Servo('P1-11');

  // this.repl.inject({
  //   servo: servo
  // });
  // firebase.database().ref('servo').on('value').then(snapshot => {
    // console.log(snapshot.val())
  	// servo.to(90);
	// });
});