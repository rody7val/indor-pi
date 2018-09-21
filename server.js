// require('dotenv').config()
const firebase = require('firebase-admin');
const five = require('johnny-five');
const Raspi = require('raspi-io');
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://indor-pi.firebaseio.com",
  // credential: firebase.credential.cert({
  //   "type": "service_account",
  //   "project_id": "indor-pi",
  //   "private_key_id": process.env.private_key_id,
  //   "private_key": process.env.private_key,
  //   "client_email": process.env.client_email,
  //   "client_id": process.env.client_id,
  //   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //   "token_uri": "https://oauth2.googleapis.com/token",
  //   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rwhpo%40indor-pi.iam.gserviceaccount.com"
  // }),
});

const board = new five.Board({ 
	io: new Raspi()
});

board.on('ready', () => {
  const db = firebase.database();
  const ref_foco = db.ref('foco');
  const ref_cooler = db.ref('cooler');

  ref_foco.on('value', foco => {
    console.log('foco', foco.val())
	});

  ref_cooler.on('value', cooler => {
    console.log('cooler', cooler.val())
  });
});