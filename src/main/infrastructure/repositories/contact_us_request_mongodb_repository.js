const {MongoClient, ObjectId} = require('mongodb');
const MongoDBRepository = require('./mongodb_repository');
const dotenv = require('dotenv');
dotenv.config();


class ContactUsRequestMongoDBRepository extends MongoDBRepository
{
    collection = 'contactUsRequests';

    constructor()
    {
        console.log(">>> ContactUsRequestMongoDBRepository.constructor()");

        super();

        console.log("<<< ContactUsRequestMongoDBRepository.constructor()");
    }

    store = async (model) =>
    {
        console.log(">>> ContactUsRequestMongoDBRepository.store()");
        let retval = null;
        let mongodbClient;


        if (undefined == this.client || null == this.client)
        {
            mongodbClient = await this.connectToDataSource();
        }

        let db = this.client.db(process.env.DEFAULT_DB);
        this.db = db; 
        this.dbName = db.databaseName;
        //let colArray = await db.listCollections().toArray();
        //console.log("COLLECTIONS for " , db.databaseName, colArray);

        if(undefined != model)
        {
            let id = model._id ;

            let modelToStore = this.convertPostValuesToModel(model);

            retval =  ('-1' == model._id) ? await this.create(modelToStore) : await this.update(modelToStore);
        }

        console.log("<<< ContactUsRequestMongoDBRepository.store()");
        return  retval;
    } // end function store()

    create = async (model) =>
    {
        console.log(">>> ContactUsRequestMongoDBRepository.create()");
        
        let reval = null;

        if (undefined == this.client || null == this.client)
        {
            retval = await this.connect(process.env.CONNECTION_URI, connectionOptions);
        }
        
        //let modelToStore = this.convertPostValuesToModel(model);

        let retval = null;

        let insertResult = await this.db.collection(this.collection).insertOne(model);
        let newId = insertResult.insertedId;

        console.log("insertResult |", insertResult, "|");


        retval = {"operation" : "INSERT", "id" : newId};

        model._id = newId.toString();
        console.log("70", model);

        console.log("ContactUsRequestMongoDBRepository.create() 77 " );
        console.log(`result |${insertResult}`);
        console.log(insertResult);
        console.log('retval is ');
        console.log(retval);

        console.log("<<< ContactUsRequestMongoDBRepository.create()");

        return retval;
    } // end insert()


    update = async (model) =>
    {
        console.log(">>> ContactUsRequestMongoDBRepository.update()");
        
        let retval = null;

        retval = {"operation" : "UPDATE", "id" : model._id};
        let objid = new ObjectId(model._id);

        let result = await this.db.collection(this.collection).updateOne({_id: objid}, 
            {
                $set: {
                    "first-name": model["first-name"]
                ,   "last-name": model["last-name"]
                ,   "email": model["email"]
                ,   "content": model["content"]
                }
           } );




        console.log("ContactUsRequestMongoDBRepository.update() 91 " );
        console.log(`result |${result}`);
        console.log(result);
        console.log('retval is ');
        console.log(retval);




        console.log("<<< ContactUsRequestMongoDBRepository.update()");

        return retval;
    } // end update()   


    findById = (id) =>
    {

        let objId = new ObjectId(id);
        let criteria = {"_id" : objId};
        let retval = this.find(criteria);
        return retval;

    }

    
    find = async (criteria) =>
    {
        console.log(">>> VolunteerMongoDBRepository.find(criteria)");
        
        let retval = null;

        console.log("criteria", criteria);

        if(criteria.id != undefined)
        {
            let objId = new ObjectId(criteria.id);
            criteria = {_id :objId };
        }

        let results  = await this.db.collection('volunteers').find(criteria).toArray(); 
        retval = results;

        console.log("<<< VolunteerMongoDBRepository.find(criteria)");

        return retval; 
    }

    convertPostValuesToModel = (model) =>
    {
        let modelToStore = {};
        if (undefined != model._id &&  '-1' != model._id)
        {
            modelToStore['_id'] = model._id;
        }      
        modelToStore['first-name'] = model['first-name'];
        modelToStore['last-name'] = model['last-name'];
        modelToStore['sender-email'] = model['sender-email'];
        modelToStore['organization'] = model['organization'];
        modelToStore['title'] = model['title'];
        modelToStore['postal-code'] = model['postal-code'];
        modelToStore['subscribe'] = (!undefined !=  model['title']) ?  "YES" : "NO";
        modelToStore['requests-pilot'] = (undefined !=  model['requests-pilot']) ?  "YES" : "NO";
        modelToStore['content'] = model['content'];


        console.log('convertPostValuesToModel() 138');
        console.log(modelToStore);

        return modelToStore;
    
    }

} // end class 

module.exports = ContactUsRequestMongoDBRepository;
