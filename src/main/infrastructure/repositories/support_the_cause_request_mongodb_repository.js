const {MongoClient, ObjectId} = require('mongodb');
const MongoDBRepository = require('./mongodb_repository');
const dotenv = require('dotenv');
dotenv.config();


class SupportTheCauseRequestMongoDBRepository extends MongoDBRepository
{
    collection = 'SupportTheCauseRequests';

    constructor()
    {
        console.log(">>> SupportTheCauseRequestMongoDBRepository.constructor()");

        super();

        console.log("<<< SupportTheCauseRequestMongoDBRepository.constructor()");
    }

    store = async (model) =>
    {
        console.log(">>> SupportTheCauseRequestMongoDBRepository.store()");
        let retval = null;
        let mongodbClient;


        if (undefined == this.client || null == this.client)
        {
            mongodbClient = await this.connectToDataSource();
        }

        let db = this.client.db(process.env.DEFAULT_DB);
        this.db = db; 
        this.dbName = db.databaseName;

        if(undefined != model)
        {
            let id = model._id ;

            let modelToStore = this.convertPostValuesToModel(model);

            retval =  ('-1' == model._id) ? await this.create(modelToStore) : await this.update(modelToStore);
        }

        console.log("<<< SupportTheCauseRequestMongoDBRepository.store()");
        return  retval;
    } // end function store()

    create = async (model) =>
    {
        console.log(">>> SupportTheCauseRequestMongoDBRepository.create()");
        
        let retval = null;

        if (undefined == this.client || null == this.client)
        {
            retval = await this.connect(connectionUri, connectionOptions);
        }
        

        let insertResult = await this.db.collection(this.collection).insertOne(model);
        let newId = insertResult.insertedId;

        console.log("insertResult |", insertResult, "|");


        retval = {"operation" : "INSERT", "success":"SUCCEEDED", "id" : newId};

        model._id = newId.toString();
        console.log("SupportTheCauseRequestMongoDBRepository.create() 72 model is | ", model, '|');

        console.log("SupportTheCauseRequestMongoDBRepository.create() 74 " );
        console.log(`result |${insertResult}`);
        console.log(insertResult);
        console.log('retval is ');
        console.log(retval);

        console.log("<<< SupportTheCauseRequestMongoDBRepository.create()");

        return retval;
    } // end insert()


    update = async (model) =>
    {
        console.log(">>> SupportTheCauseRequestMongoDBRepository.update()");
        
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




        console.log("SupportTheCauseRequestMongoDBRepository.update() 108 " );
        console.log(`result |${result}`);
        console.log(result);
        console.log('retval is ');
        console.log(retval);




        console.log("<<< SupportTheCauseRequestMongoDBRepository.update()");

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


        modelToStore['share-learnings'] =  (undefined !=  model['share-learnings']) ?  "YES" : "NO";
        modelToStore['volunteer-time'] =  (undefined !=  model['volunteer-time']) ?  "YES" : "NO";
        modelToStore['subject-matter-expertise'] =  (undefined !=  model['subject-matter-expertise']) ?  "YES" : "NO";
        modelToStore['data-or-compute'] =  (undefined !=  model['data-or-compute']) ?  "YES" : "NO";

        modelToStore['sponsor-or-in-kind'] = (undefined !=  model['sponsor-or-in-kind']) ?  "YES" : "NO";
        modelToStore['funding'] =  (undefined !=  model['funding']) ?  "YES" : "NO";
        modelToStore['other-support'] =  (undefined !=  model['other-support']) ?  "YES" : "NO";
        modelToStore['content'] = model['content'];


        modelToStore['subscribe'] = (undefined !=  model['subscribe']) ?  "YES" : "NO";
        modelToStore['requests-pilot'] = (undefined !=  model['requests-pilot']) ?  "YES" : "NO";


        console.log('convertPostValuesToModel() 138');
        console.log(modelToStore);

        return modelToStore;
    
    }

} // end class 

module.exports = SupportTheCauseRequestMongoDBRepository;
