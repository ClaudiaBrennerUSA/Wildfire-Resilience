const express = require('express');
const router = express.Router();

const path = require ('path');
const PORT = require('../config/env').PORT;
const bodyParser = require('body-parser');

const SubscriptionForm = require('../views/forms/subscribe_form.js');
const SubscriptionRequestMongoDBRepository = require('../infrastructure/repositories/subscription_request_mongodb_repository');

const SubscriptionRequestSubmitted = require('../views/subscription_request_submitted');

const app = express();
const urlencodedParser =  bodyParser.urlencoded({extended: false});


let handleSubscriptionRequest = async (req, res) =>
{
    console.log(">>> handleSubscriptionRequest()");


    let method = req.method;

    switch (method)
    {
        case "GET":
        {
            await handleSubscriptionGetRequest(req, res);
            break; 
        }
        case "POST":
        {
            await handleSubscriptionPostRequest(req, res);
            break;
        }

    } // end switch

    console.log("<<< handleSubscriptionRequest()");

    return;
} // end handleSubscriptionRequest()

let handleSubscriptionGetRequest = (req, res) =>
{
    console.log(">>> handleSubscriptionGetRequest()");

    let markup = SubscriptionForm.generateForm(req, res);
    res.send(markup);

    console.log("<<< handleSubscriptionGetRequest()");

    return;
} // end handleSubscriptionGetRequest()        

let handleSubscriptionPostRequest = async (req, res) =>
{        
    console.log(">>> handleSubscriptionPostRequest()");
    
    let requestIsValid = validateContatctUsRequest(req.body);

    if(requestIsValid)
    {
        repo = new SubscriptionRequestMongoDBRepository();
        let model = req.body;
        let result = await  repo.store(model);
        let requestId = result.id.toString();
        model['id'] = requestId;
        let requestSent = sendRequest(model);
        // navigate to success page 
        res.writeHead(301, {
            Location: `/subscribe/request_submitted`
          }).end();
  
    }
    else
    {
        let markup = SubscriptionForm.generateSubscriptionForm(req, res);
        res.send(markup);
    }

    console.log("<<< handleSubscriptionPostRequest()");
    
    return;
} // end handleSubscriptionPostRequest()

let validateContatctUsRequest = (rawValues) =>
{
    return true;
} // end validateContatctUsRequest()

let sendRequest = (request) =>
{
    /*  
    --
    -- This funcction is to send the request via email or some other means to a delegate to notify them that the request has been submitted 
    -- so they can take necessay action to fulfill the request
    --
    */

    success = true;
    console.log(">>> sendRequest()");
    console.log("request is " );
    console.log(request);
    console.log("/request");

    console.log("<<< sendRequest()");

    return success;

} // end sendRequest()

let requestSubmitted = (req, res) =>
{
    let view = new SubscriptionRequestSubmitted();
    let markup = view.render();

    res.write(markup);
    res.end();

} // end requestSubmitted()


router.get('/', handleSubscriptionRequest);
router.get('/request_submitted', requestSubmitted);
router.post("/", bodyParser.urlencoded({extended: false}), handleSubscriptionRequest);

module.exports = router;
