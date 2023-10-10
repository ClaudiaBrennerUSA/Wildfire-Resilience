#CONTAINER ENVIRONMENT VARIABLES 
the port used must be set in project root directory  at the same level as docker-compose.yml

##FILE .env
PORT=5220

NOTE: the port for the conatainer MUST match the NodeJS  PORT constant


#Intitial Bootsstrap 
SEE: https://dev.to/bam92/how-to-add-bootstrap-to-your-nodejs-project-ngc

#NODE VARIABLES REQUIRED TO RUN 

##FILE: src/main/config/env.js
const PORT = 5220;
module.exports = {PORT};
