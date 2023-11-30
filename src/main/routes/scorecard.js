const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

const fs = require('fs')

const downloadScorecardForm = require('../views/forms/download_scorecard_form.js');
const DownloadScorecardRequestMongoDBRepository = require('../infrastructure/repositories/download_scorecard_request_mongodb_repository');


let validateScorecardRequest = (body) =>
{
    console.log(">>> validateScorecardRequest()");

    let valid = true; 

    console.log(">>> validateScorecardRequest()");    
    return valid; 
} // end validateScorecardRequest()


/* -- -- // 

let storeScorecardRequest = (req, res) =>
{
    let retVal = false; 
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Store Request Form  if Valid</h2>");
    res.write("About to validate request</br>");
    
    let requestIsValid = validateScorecardRequest(req, res);
    if(!requestIsValid)
    {
        res.write("request is invalid");
        res.render('/scorecard', req.body)
    }
    else
    {
        res.write("Request is valid, Okay to Download the Scorecard<br>");
        let downloadIsSuccessful = downloadScorecard(req, res);
        if(downloadIsSuccessful)
        {
            res.write("Download Succeeded");
            let retVal = true;
        }
        else
        {
            res.write("Download failed");
        }

    }
    
    res.end();
    return retVal;
}

// -- */

let storeScorecardRequest = async (request) =>
{

    console.log(">>> storeScorecardRequest()");
    
    let repo = new DownloadScorecardRequestMongoDBRepository();
    let result = await repo.store(request);

    console.log("<<< storeScorecardRequest()");

    return result;
    
} // end storeScorecardRequest(request) 

let handlePostRequest = async (req, res) =>
{        
    console.log(">>> handlePostRequest()");
    
    let requestIsValid = validateScorecardRequest(req.body);

    if(requestIsValid)
    {
        let result = await storeScorecardRequest(req.body);
        console.log("storeScorecardRequest() result is:")
        console.log(result);

        let filename= "/static_files/assets/content/scorecard_dummy.xlsx";

        console.log("\n= = = = = \nBEFORE DOWNLOAD\n = = = = =");

        // let file = fs.readFile(filename, 'binary');

        // Use fs.readFile() method to read the file 
        let file = fs.readFile('Demo.txt', 'utf8', function(err, data){ 
            
            // Display the file content 
            console.log(data); 
        }); 
        
        
        
        console.log('readFile called'); 
        res.write(file, filename);

        res.download("./scorecard.js");

      

        console.log("\n= = = = = \nAFTER DOWNLOAD\n = = = = =");


        /* 
        repo = new ContactUsRequestMongoDBRepository();
        let model = req.body;
        let result = await  repo.store(model);
        let requestId = result.id.toString();
        model['id'] = requestId;
        let requestSent = sendRequest(model);
        // navigate to success page 
        */ 

        res.write("<h1>Success the system should have downloaded</h1>");

        res.end();
        
    }
    else
    {
        let markup = downloadScorecardForm.renderScorecardRequestForm(req, res);
        res.send(markup);
    }
 
    console.log("<<< handlePostRequest()");
    
    return;
}


let downloadScorecard = (req, res) =>
{
    res.write("Attempting Download<br>");
    return false;
}

const requestDownload = (req, res) =>
{
    console.info("Before Display Download Request Form");
    let formMarkup = downloadScorecardForm.renderScorecardRequestForm(req, res);
    res.write(`<h1>Download Form</h1> ${formMarkup}`);
    console.info("After Display Download Request Form");
}



router.get('/', requestDownload);
router.post("/", bodyParser.urlencoded({extended: true}), handlePostRequest);

module.exports = router;