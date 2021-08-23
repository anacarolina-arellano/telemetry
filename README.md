### **PG20 T4 Cloud Computing - A4: Telemetry Analytics System**
Submitted by: Ana Carolina Arellano
Date: 18/08/2021
----------
#### **Description of what the project does**
This version of the Warehouse app includes new routes, in the main one ("/") that takes you to an admin page, 
which has a form to create data and send it to the cloud, and the ("/charts"). It is also possible to retrieve 
data from the cloud data store and display through cloud functions in the emulator.

#### **Download/Install**
---------
 - Browse the demo link: [https://github.com/anacarolina-arellano/telemetry/tree/assignment4]
 - Clone the 'assignment4' branch of the repository into your machine
 - From the terminal go to the location where the repo was cloned
 - Change directory to locate yourself in the folder 'telemetry'


#### **How to use**
--------
##### Cloud functions (run previous to running vue)
- In your terminal change directory to be inside the functions folder of the project
- Run the command "firebase emulators:start" in your console
- In your web browser go to http://localhost:4001/firestore 
- This is the emulator of firestore, I made a cloud function (salesObserver) that gets trigger every time a new document is added to the "sales" collection. To test it: In the firestore emulator create a new collection named 'sales', add a document with a numeric ID (for example 8), add some fields such as empName (string) and clientName (string). Once you have done this, in your terminal, where you ran the previous command you'll see that the data that was added to the collection gets printed. This is because of the cloud function.

- Another cloud function that I did was getForm. This one has direct access to the project's firestore, so in order to demonstrate how it works you can enter a form ID and if it exists there will be an allert message with the information belonging to that form
- To test this function, you have to be running the emulators (firebase emulators:start) or at least the emulator of the functions (firebase emulators:start --only functions), then, in another terminal run vue (instructions below) and send an id

##### Vue
- Run the command ´vue ui´ to run the project
- In your browser go to: http://localhost:8000
- Go to tasks -> serve -> click on 'run task'
- Click on 'Open App'
- The App will open at http://localhost:4000/

#### **Comments**
- The vue interface allows you to add a new document to firestore by filling the form. You can retrieve the information of that form and the ones that are in the cloud with the section that is below, which uses a cloud function.
- The data of the charts is hardcoded but the use of sending and receiving dara is in the admin section

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