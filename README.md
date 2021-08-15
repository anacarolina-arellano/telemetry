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
##### Cloud functions
- In your terminal change directory to be inside the functions folder of the project
- Run the command "firebase emulators:start --only functions"
- It will give you links for the results, you can copy and paste them on the browser o run in terminal "curl ..."

##### Vue
- Run the command ´vue ui´ to run the project
- In your browser go to: http://localhost:8000
- Go to tasks -> serve -> click on 'run task'
- Click on 'Open App'
- The App will open at http://localhost:4000/


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
