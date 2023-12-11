const express = require('express');

const path = require ('path');
const PORT = require('../../config/env').PORT;
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser =  bodyParser.urlencoded({extended: false});

class apiRouter extends express.Router
{
    handleRequest = async (req, res) =>
    {
        console.log(`>>> apiRouter.handleRequest()`);
        
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

           "message" : "api with no target json"
        }; 
        
        console.log("<<< apiRouter::handleGetRequest()");

        res.writeHead(200, {"content-type" : "application/json" });
        res.write(JSON.stringify(content));
        res.end();

    } // end handleGetRequest()


    
    handlePostRequest = async (req, res) => 
    {
        console.log(">>> subscriptionAPIRouter::handlePostRequest()");
        
        let content = {

           "message" : "api with no target json"
        }; 
        
        console.log("<<< apiRouter::handlePostRequest()");

        res.writeHead(200, {"content-type" : "application/json" });
        res.write(JSON.stringify(content));
        res.end();

    } // end handlePostRequest()


} // end class

let router = new apiRouter();
router.get('/', router.handleRequest);
router.post('/',bodyParser.urlencoded({extended: false}), router.handleRequest);

const subscriptionAPIRouter = require("./subscribe");
router.get("/subscription", subscriptionAPIRouter.handleRequest);
router.get("/subscription/:id", subscriptionAPIRouter.handleRequest);
router.post("/subscription", subscriptionAPIRouter.handlePostRequest);

//app.use('/subscription', subscriptionAPIRouter);
module.exports = router;
