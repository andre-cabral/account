**********
How to run
**********

First, you have to install nodejs and npm using:<br>
~$ sudo apt-get install nodejs npm<br>

Clone the project on a new folder:<br>
~$ mkdir account<br>
~$ cd account<br>
~$ git clone https://github.com/andre-cabral/account.git<br>
~$ cd account<br>
~$ npm install

Then, start the project with npm start:<br>
~$ npm start

The project will run on the following url:<br>
http://localhost:3000/

Open another terminal and install the json-server api:<br>
~$ sudo npm install -g json-server

Go the main folder of the project on the terminal you used to install json-server, and start it:<br>
~$ json-server -p 3333 --watch public/clients.json


**********************
About the architecture
**********************

The architecture was made to support the use of json apis to recover and store the data, having to be scalable to be a project that can  easily get changes made by the user.

The technologies used were: ReactJS, Redux and JSON Server.

ReactJS was used because its component based architecture (this makes it easy to reutilize parts from the app on various pages) and because the state make it easier to work with json apis.

Redux was chosen to make the data more clean and consistent, making a more organized environment.

JSON Server creates editable json apis quickly, and is great to test apps and create the front-end while the real api is being developed on the back-end side.


************************************
Commands used to develop the project
************************************

~$ sudo apt-get install nodejs npm<br>
~$ npm install - g create-react-app<br>
~$ create-react-app account<br>
~$ cd account<br>
~$ npm start<br>

~$ npm install --save redux<br>
~$ npm install --save react-redux<br>
~$ npm install --save-dev redux-devtools<br>

~$ npm install --save ramda<br>
~$ npm install --save react-router<br>
~$ npm install --save react-router-dom<br>
~$ npm install --save json-server