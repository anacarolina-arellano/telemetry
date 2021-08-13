const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp()

exports.aggregate = functions.https.onCall((snapshot, context) => {
  const data = snapshot.data();
  const docId = context.params.documentId;

  //my code here

  return { id: docId, payload: data };
});

exports.onTheFly = functions.firestore
  .document("telemetry/telemetry")
  .onCreate((user, context) => {
    //pull id from the context
    console.log(user)
    console.log(context)
  });
/*exports.onTheFly = functions.firestore
  .document("telemetry/telemetry")
  .onCreate((user, context) => {
    //pull id from the context
    console.log(user)
    console.log(context)
  });*/

exports.getAggregatedData = functions.https.onRequest((request, response) => {
  admin.firestore().doc("telemetry/telemetry").get()
  .then(snapshot => {
    const data = snapshot.data()
    console.log(data)
    response.send(data)
  })
  .catch(error => {
    response.status(500).send(error)
  })
});
