const admin = require("firebase-admin");
var ServiceAccount = require("../../crud-node-firebase-ecfa3-firebase-adminsdk-stvy3-a8296b402c.json");
// base de datos
admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: "https://crud-node-firebase-ecfa3.firebaseio.com/",
});
const db = admin.database();

module.exports = db;
