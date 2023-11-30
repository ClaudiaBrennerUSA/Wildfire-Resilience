#CONTAINER ENVIRONMENT VARIABLES 
the port used must be set in project root directory  at the same level as docker-compose.yml

##FILE .env
PORT=5220

NOTE: the port for the conatainer MUST match the NodeJS  PORT constant


#Intitial Bootsstrap 
SEE: https://dev.to/bam92/how-to-add-bootstrap-to-your-nodejs-project-ngc

#NODE VARIABLES REQUIRED TO RUN 

##FILE: src/main/config/env.js

const PORT = 5225;
const host = 'host.name.of.mongodb.server:port';
const userName = 'scorecard_application_username';
const password = 'scorecard_application_password';
const defaultDB = 'cwpc_scorecard_database_for_this_instance';
const connectionUri = `mongodb://${userName}:${password}@${host}/${defaultDB}?retryWrites=true&w=majority`;  // SEE: https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html  (The URL connection format mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]])

const connectionOptions = {  
    useNewUrlParser : true
,   useUnifiedTopology : true
};
module.exports = {
    PORT
,   host
,   userName
,   password
,   defaultDB
,   connectionUri
,   connectionOptions
};
