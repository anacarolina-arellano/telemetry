const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()


//function that is triggered every time that a new document is added in the "sales" collection
exports.salesObserver = functions.firestore
  .document('sales/{salesId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data()
    const docId = context.params.documentId

    //display the data that was added in the document
    console.log(data)
    return { id: docId, payload: data }
  })

//function to retrieve the data from an existing form
//Id is currently hardcoded
exports.getForm = functions.https.onRequest((request, response) => {
  admin
    .firestore()
    .doc(`sales/3`)
    .get()
    .then(snapshot => {
      const data = snapshot.data()
      console.log(data)
      response.send(data)
    })
    .catch(error => {
      response.status(500).send(error)
    })
})
