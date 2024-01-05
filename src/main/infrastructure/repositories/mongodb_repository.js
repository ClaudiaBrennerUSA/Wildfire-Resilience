/*
**
** TO DO:
**  Consider a factory method that can:
**      construct a repository 
**      then await the connection 
**      then rertuur the repository with a live connection or live connection poo
**
*/


const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const CONNECTION_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.HOST}/${process.env.DEFAULT_DB}?retryWrites=true&w=majority`;

// const connectionOptions = {
//     useNewUrlParser: process.env.USE_NEW_URL_PARSER === 'true',
//     useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY === 'true'
// };

class MongoDBRepository
{
    client = null;
    db = null;
    dbName = null;

    constructor()
    {
        console.log(">>> MongoDBRepository.constructor()");
        console.log("<<< MongoDBRepository.constructor()");
    }

    connectToDataSource = async () =>
    {
        console.log(">>> MongoDBRepository.connectToDataSource()");

        let retval = null; 

        if (undefined == this.client || null == this.client)
        {
            retval = await this.connect(CONNECTION_URI);
        }

        console.log("<<< MongoDBRepository.connectToDataSource()");

        return retval;
    } // end connectToDataSource()

    connect = async(uri, options) =>
    {
        let retval = null;

        try 
        {
            // Connect to MongoDB server
            
            console.log(`Attempting to connect to MongoDB at ${uri}`);
            this.client = await MongoClient.connect(uri, options);
            
            console.log(`Connected to MongoDB at ${uri}`);
            
            // test the connection 
            let dbList = await this.listDatabases(this.client);
            return this.client;
          } 
          catch (err) 
          {
            console.error('/n= = = = = = = /nError connecting to MongoDB :/n = = = = = = = = = =', err);
          }
    } // end connect()

    disconnect = () =>
    {
        console.log(">>> MongoDBRepository.disconnect()");
        this.client.close();
        console.log("<<< MongoDBRepository.disconnect()");

    }

    listDatabases = async (client) =>
    {
        let databasesList = await  this.client.db().admin().listDatabases();
        console.log("listDatabases() Databases:\n= = = = = = = = = =");
        databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
        return databasesList.databases;
    }


} // end class 

module.exports = MongoDBRepository;

