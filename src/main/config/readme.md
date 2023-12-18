# This is a placeholder file to force creation of directory src/main/config

Also developers will have to create env.js

#File: /src/main/config/env.js

const PORT = <PORT>; // MUST MATCH the PORT in /.env
const host = '<XXX.XXX.XXX.XXX>:<port>'; // IPADDRESS AND PORT of MONGODB Instance 
const userName = '<application_user_name>';
const password = '<application_password>';
const defaultDB = '<default_database_name';
const connectionUri = `mongodb://${userName}:${password}@${host}/${defaultDB}?retryWrites=true&w=majority`;  // SEE: https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html  (The URL connection format mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]])
const connectionOptions = {  
    useNewUrlParser : true
,   useUnifiedTopology : true
};

const scorecardPath = '/assets/content';
const scorecardfileName = 'CWPnCScorecard.zip';

module.exports = {
    PORT
,   host
,   userName
,   password
,   defaultDB
,   connectionUri
,   connectionOptions
, scorecardPath
,scorecardfileName
};


