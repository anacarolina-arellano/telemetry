### **PG20 T4 Cloud Computing - A3: Telemetry Admin System**
Submitted by: Ana Carolina Arellano
Date: 14/08/2021
----------
#### **Description of what the project does**
This version of the Warehouse app includes new routes, in the main one ("/") and a new route "/admin" 
that takes you to an admin page, which has a form to create data and send it to the cloud. It is also possible to 
retrieve data from the cloud data store. and display it.

#### **Download/Install**
---------
 - Browse the demo link: [https://github.com/anacarolina-arellano/telemetry]
 - Clone the 'main' branch of repository into your machine
 - From the terminal go to the location where the repo was cloned
 - Change directory to locate yourself in the folder 'telemetry'


#### **How to use**
--------
##### Cloud functions (run previous to running vue)
- In your terminal change directory to be inside the functions folder of the project
- Run the command "firebase emulators:start" in your console
- In your web browser go to http://localhost:4001/firestore 
- This is the emulator of firestore, I made a cloud function (salesObserver) that gets trigger every time a new document is added to the "sales" collection. To test it: In the firestore emulator create a new collection named 'sales', add a document with a numeric ID (for example 8), add some fields such as empName (string) and clientName (string). Once you have done this, in your terminal, where you ran the previous command you'll see that the data that was added to the collection gets printed. This is because of the cloud function.

- Another function that I did was getForm. This one has direct access to the project's firestore, so in order to demonstatre how it works I "harcoded" it so it shows the data stores in the document with ID 3 of the 'sales' collection
- To test this function, you have to be running the emulators (firebase emulators:start) or at least the emulator of the functions (firebase emulators:start --only functions), then, in another terminal run "curl http://localhost:5001/warehouseapp-288c9/us-central1/getForm" and you'll receive the data from the document 

##### Vue
- Run the command ´vue ui´ to run the project
- In your browser go to: http://localhost:8000
- Go to tasks -> serve -> click on 'run task'
- Click on 'Open App'
- The App will open at http://localhost:4000/

#### **Comments**
- The vue interface allows you to add a new document to firestore but right now the cloud function of salesObserver gets only triggered if a new document is added in that collection through the Firestore Emulator.

#### **API KEYS**
apiKey: 'AIzaSyAHAij4Xf0nEQoGYWd-aYNMNA3lCtEpX20',
authDomain: 'warehouseapp-288c9.firebaseapp.com',
  projectId: 'warehouseapp-288c9',
  storageBucket: 'warehouseapp-288c9.appspot.com',
  messagingSenderId: '1026739158294',
  appId: '1:1026739158294:web:9164498e70ec7240cf2437'

## Built With
* **Firebase** -  Cloud storage.
* **Vue.js 2.0** - The web framework used.
* **Vuetify** - The library used for Vue's components.
* **CSS Grid** - Used for this application's main styling structure.
* **CSS Flexbox** - Used as a sub structure and supports this application's styling.

## Authors
* **Clinton Jay Ramonida** - *Integrated Vue.js 2.0, (Expanded from HTML5AppTemplate).*
* **Scott Henshaw** - *Initial work (HTML5AppTemplate).*
* **Ana Carolina Arellano** - *Warehouse and API implementation*

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
