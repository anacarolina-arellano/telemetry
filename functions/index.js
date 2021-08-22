const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();

function EnableCORSResponse(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req, res);
  if (req.method == "OPTIONS") {
    res.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.set("Access-Control-Preflight-Continue", true);
    res.status(204).send("");
  }
}

//function that is triggered every time that a new document is added in the "sales" collection
exports.salesObserver = functions.firestore
  .document("sales/{salesId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.data();
    const docId = context.params.documentId;

    //display the data that was added in the document
    console.log(data);
    return { id: docId, payload: data };
  });

//function to retrieve the data from an existing form
//Id is currently hardcoded
exports.getForm = functions.https.onRequest((request, response) => {
  console.log(JSON.stringify(request.query))
  return cors()(request, response, () => {
    admin
      .firestore()
      .collection('sales')
      .doc(`${request.query.id}`)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        console.log(data);
        response.send(data);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  });
});

exports.getSingleRecord = functions.https.onRequest((request, response) => {
  EnableCORSResponse(request, response);

  //const error = "NOT_OK"
  const myId = request.params.id;
  let actionCount = [];

  let dRef = admin.firestore().collection(`sales`);
  let query = dRef.where("sessionId", "==", myId);
  query.get().then((result) => {
    result.forEach((doc) => {
      let rec = doc.data();
      actionCount[rec.action]++;
    });
  });
  response.send({
    error: "OK",
    payload: actionCount,
  });
});
