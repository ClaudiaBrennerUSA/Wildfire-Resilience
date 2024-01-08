const express = require('express');
// const router = express.Router();

const path = require ('path');
const bodyParser = require('body-parser');

const supportTheCauseForm = require('../views/forms/support_the_cause_form.js');
const SupportTheCauseRequestMongoDBRepository = require('../infrastructure/repositories/support_the_cause_request_mongodb_repository');

const SupportTheCauseRequestSubmitted = require('../views/support_the_cause_request_submitted');


const urlencodedParser =  bodyParser.urlencoded({extended: false});


class SupportTheCauseRouter extends express.Router
{
    handleRequest = async (req, res) =>
    {
        console.log(`>>> SupportTheCauseRouter.handleRequest()`);
        
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
    
        console.log(`<<< SupportTheCauseRouter.handleRequest()`);
    } // end handleRequest()

    handleGetRequest = async (req, res) => 
    {
        console.log(`>>> SupportTheCauseRouter.handleGetRequest()`);


            let markup = supportTheCauseForm.generateForm(req, res);
            res.send(markup);

        console.log(`<<< SupportTheCauseRouter.handleGetRequest()`);

        return;
        
    } // end handleGetRequest()

    handlePostRequest = async (req, res) => 
    {
        console.log(`>>> SupportTheCauseRouter.handlePostRequest()`);

        let requestIsValid = this.validateRequest(req.body);

        if(requestIsValid)
        {
            let repo = new SupportTheCauseRequestMongoDBRepository();
            let model = req.body;
            let result = await  repo.store(model);
            let requestId = result.id.toString();
            model['id'] = requestId;
            let requestSent = this.sendRequest(model);
            
            // navigate to success page 
            res.writeHead(301, {
                Location: `/support_the_cause/request_submitted`
              }).end();
      
        }
        else
        {
            let markup = SubscriptionForm.generateSubscriptionForm(req, res);
            res.send(markup);
        }
    

        console.log(`<<< SupportTheCauseRouter.handlePostRequest()`);
        
    } // end handlePostRequest()

    
    validateRequest = (model) =>
    {
        
        console.log(`>>>SupportTheCauseRouter.validateRequest()`);

        let validRequest = true;


        console.log(`SupportTheCauseRouter.validateRequest() @98 model sent is |`);
        console.log(model);
        console.log('/model');




        console.log(`SupportTheCauseRouter.validateRequest() just returns hardcoded true`);

        console.log(`<<< SupportTheCauseRouter.validateRequest()`);

        return validRequest;
    } // end validateRequest()

    requestSubmitted = (req, res) =>
    {
        let view = new SupportTheCauseRequestSubmitted();
        let markup = view.render();

        res.write(markup);
        res.end();

    } // end requestSubmitted()


    sendRequest = (request) =>
    {
        /*  
        --
        -- This funcction is to send the request via email or some other means to a delegate to notify them that the request has been submitted 
        -- so they can take necessay action to fulfill the request
        --
        */

        let success = true;
        console.log(">>> SupportTheCauseRouter.sendRequest()");
        console.log("request is " );
        console.log(request);
        console.log("/request");

        console.log("<<< SupportTheCauseRouter.sendRequest()");

        return success;

    } // end sendRequest()




} // end class SupportTheCauseRouter extends express.Router




let router = new SupportTheCauseRouter();
router.get('/', router.handleRequest);
router.get('/request_submitted', router.requestSubmitted)
router.post('/', router.handleRequest);

module.exports = router;
