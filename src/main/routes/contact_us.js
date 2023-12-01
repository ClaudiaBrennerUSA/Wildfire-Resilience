const express = require('express');
const router = express.Router();

const path = require ('path');
const PORT = require('../config/env').PORT;
const bodyParser = require('body-parser');

const contactUsForm = require('../views/forms/contact_form.js');
const ContactUsRequestMongoDBRepository = require('../infrastructure/repositories/contact_us_request_mongodb_repository');

const ContactUsRequestSubmitted = require('../views/contact_us_request_submitted');

const app = express();
const urlencodedParser =  bodyParser.urlencoded({extended: false});


let handleContactUsRequest = async (req, res) =>
{
    console.log(">>> handleContactUsRequest()");


    let method = req.method;

    switch (method)
    {
        case "GET":
        {
            await handleContactUsGetRequest(req, res);
            break; 
        }
        case "POST":
        {
            await handleContactUsPostRequest(req, res);
            break;
        }

    } // end switch

    console.log("<<< handleContactUsRequest()");

    return;
}

let handleContactUsGetRequest = (req, res) =>
{
    console.log(">>> handleContactUsGetRequest()");

    let markup = contactUsForm.generateContactUsForm(req, res);
    res.send(markup);

    console.log("<<< handleContactUsGetRequest()");

    return;
}            

let handleContactUsPostRequest = async (req, res) =>
{        
    console.log(">>> handleContactUsPostRequest()");
    
    let requestIsValid = validateContatctUsRequest(req.body);

    if(requestIsValid)
    {
        //let markup = contactUsForm.generateContactUsForm(req, res);
        repo = new ContactUsRequestMongoDBRepository();
        let model = req.body;
        let result = await  repo.store(model);
        let requestId = result.id.toString();
        model['id'] = requestId;
        let requestSent = sendRequest(model);
        // navigate to success page 
        res.writeHead(301, {
            Location: `/contact_us/request_submitted`
          }).end();
  
    }
    else
    {
        let markup = contactUsForm.generateContactUsForm(req, res);
        res.send(markup);
    }

    console.log("<<< handleContactUsPostRequest()");
    
    return;
}

let validateContatctUsRequest = (rawValues) =>
{
    return true;
}

let sendRequest = (request) =>
{
    success = true;
    console.log(">>> sendRequest()");
    console.log("request is " );
    console.log(request);
    console.log("/request");

    console.log("<<< sendRequest()");

    return success;

}

let requestSubmitted = (req, res) =>
{
    let view = new ContactUsRequestSubmitted();
    let markup = view.render();

    res.write(markup);
    res.end();

} // end requestSubmitted()


router.get('/', handleContactUsRequest);
router.get('/request_submitted', requestSubmitted);
router.post("/", bodyParser.urlencoded({extended: false}), handleContactUsRequest);

module.exports = router;
