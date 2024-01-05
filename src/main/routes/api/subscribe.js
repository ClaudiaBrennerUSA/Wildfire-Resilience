const express = require('express');

const path = require ('path');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser =  bodyParser.urlencoded({extended: false});
const jsonBodyParser = bodyParser.json();
app.use(jsonBodyParser);
app.use(express.json());


const SubscriptionRequestMongoDBRepository = require('../../infrastructure/repositories/subscription_request_mongodb_repository');

class subscriptionAPIRouter extends express.Router
{
    handleRequest = async (req, res) =>
    {
        console.log(`>>> subscriptionAPIRouter.handleRequest()`);
        
        let method = req.method;

        switch (method)
        {
            case "GET":
            {
                await this.handleGetRequest(req, res);
                break; 
            }
            case "POST":
            {
                await this.handlePostRequest(req, res);
                break;
            }
    
        } // end switch
    
        console.log(`<<< subscriptionAPIRouter.handleRequest()`);
    } // end handleRequest()


    handleGetRequest = async (req, res) => 
    {
        console.log(">>> subscriptionAPIRouter::handleGetRequest()");

        let content = {

            "first-name" : "TestFN000",
            "last-name" : "TestLN000",
            "email" : "TFNLNFN000@crudtest.com",
            "postal-code" : "12345"
        }; 


        let id = req.params.id;
        

        if (id != undefined)
        {
            content = {
                "id" : id, 
                "first-name" : `TestFN${id}`,
                "last-name" : `TesLN${id}`,
                "email" : "TFNLNFN000@crudtest.com",
                "postal-code" : "12345"
            }; 
            
        } // end  if (id != undefined)

        res.writeHead(200, {"content-type" : "application/json" });
        res.write(JSON.stringify(content));
        res.end();

        console.log("<<< subscriptionAPIRouter::handleGetRequest()");

        return;
    } // end handleGetRequest()

    handlePostRequest = async (req, res) =>
    {
        console.log(">>> subscriptionAPIRouter::handlePostRequest()");

        /*
        --
        --  Store the subscription request 
        -- and return a success object 
        -- having   SUCCESS / FAILURE  of attempt to store 
        --          informative Message 
        --          ID of the new record
        --
        */ 
        
        let content = "{'MESSAGE' : 'HELLO FROM subscriptionAPIRouter::handlePostRequest()'}";

        // insert inbound JSON data 
        // let model = JSON.parse(req.body);
        let body = req.body;
        console.log(`subscriptionAPIRouter::handlePostRequest() body:`);
        console.log(body);
        let model = body;

        console.log("================\n\n\n\n");
        // console.log(req);
        

        let repo = new SubscriptionRequestMongoDBRepository();
        let result = await repo.store(model);

        console.log('subscriptionAPIRouter::handlePostRequest() reult from repo.store()');
        console.log(result);

        content = JSON.stringify(result);        
        
        // return a response telling of success and include the new id 
        res.writeHead(200, {"content-type" : "application/json" });
        // res.write(JSON.stringify(content));
        res.write(content);
        res.end();

        console.log("<<< subscriptionAPIRouter::handlePostRequest()");

        return content;

    } // end handlePostRequest()

} // end class

let router = new subscriptionAPIRouter();
router.get('/', router.handleGetRequest);
router.get('/:id', router.handleGetRequest);

router.post('/', router.handlePostRequest);

module.exports = router;
