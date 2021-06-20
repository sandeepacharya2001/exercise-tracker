# Exercise-Tracker
Live Working Version: http://my-exercise-record.herokuapp.com

# Description
This is a MERN stack project I completed by following the tutorial from freecodcamp.org on Youtube. 
After the completion of the project i deployed it on heroku, which you can see by following the link above.

# Instuctions to run Locally
First Create a cluster in mongodb atlas and get the connection string.
Create a .env file inside the project folder and put the follwing: 
`ATLAS_URI=connection_string_you_got_from_mongodb_atlas` <br>
and then follow the following steps.

1. Clone the project 
2. Inside the project folder run `npm install`
    >This will install all the required packages listed in package.json to run the project.
3. Inside the project folder run command `node server`
    >This will run the server on the port 5000. If you see <br>
    `Server is running on port: 5000` <br>
     `MongoDB database connection established successfully`
    <br>Then you are good to go.
   
4.  Navigate to the client folder.
5.  Start react app by running command `npm start`
6.  The browser will open a new tab with url `localhost:3000`
7.  Now, You can use and modify the project as you like. 
