# Installation steps:-

a-npm install -g gulp bower nodemon
b-Install the mongodb if not installed

## RecipeSampleApp->

a- Copy the database json file from project db directory to some place like Desktop.

b- Import the database recipe data and recipes collections into the mongodb database. you can use below command(change the file location and run the below command from mongo bin folder)mongoimport -d recipe -c recipes /Users/mohanrathour/Desktop/work-space/recipeapp/db/recipe.json

c- Open the terminal Go to the project directory

d- Run command npm install 

e- After npm install run the command bower install

f- To start the application run command nodemon server/server.js 

g- Now The recipe app will start on port 8888.

h-Open the browser and hit the below url

http://localhost:8888
