const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

const fs = require('fs')

const downloadScorecardForm = require('../views/forms/download_scorecard_form.js');
const DownloadScorecardRequestMongoDBRepository = require('../infrastructure/repositories/download_scorecard_request_mongodb_repository');

const {PORT} = require('../config/env');
const {scorecardPath} = require('../config/env');
const {scorecardfileName} = require('../config/env');

let validateScorecardRequest = (body) =>
{
    console.log(">>> validateScorecardRequest()");

    let valid = true; 

    console.log(">>> validateScorecardRequest()");    
    return valid; 
} // end validateScorecardRequest()


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

        console.log("======\nRedirecting to /scorecard/download\n=====");

        res.writeHead(301, {
            Location: `/scorecard/download`
          }).end();
    }
    else
    {
        let markup = downloadScorecardForm.renderScorecardRequestForm(req, res);
        res.send(markup);
    }
 
    console.log("<<< handlePostRequest()");
    
    return;
}


let downloadScorecard = async (req, res) =>
{
    console.log(">>> downloadScorecard()");

    let pageMarkup = `   
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link rel="stylesheet" href="/assets/style/style.css" />
            <link rel="stylesheet" href="/assets/style/system.css" />
            <script src="https://kit.fontawesome.com/e29cb68718.js" crossorigin="anonymous" async></script>
        <title>Ddownload Scorecard - Community Resilience Wildfire Scorecard</title>
        </head>
        <body>
            <div class="row-container" id="header-row" name="header-row"></div> <!--Header Populated By Javascript function -->
            <!-- <div class="row-container" id="top-nav-container" name="top-nav-container"> --></div><!--Top Navigation conatiner - to be replace with Sadiya's Header Populated By Javascript function -->

            <div class="w-100 text-center hero-text-level-0 ">
                Download the scorecard<br>
            </div>
            <div class="w-100 text-center"><h2>Check your downloads for a file named "${scorecardfileName}"</h2> </div>


            <div id="footer-container"></div>  <!-- /footer-container -->

            <!-- Javascript at bottom of page to facilitate faster page loads -->

            <!-- BOOTSTRAP FROM CDN -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                crossorigin="anonymous"></script>

            <!-- page specific scripts -->
            <script src="/assets/javascript/footer.js"></script>
            <script src="/assets/javascript/header.js"></script>
            <script src="/assets/javascript/topnav.js"></script>
            

            <!-- DOWNLOAD SCRIPT --->

            <script>
                const downloadURI = (uri, name) => 
                {
                    const link = document.createElement("a");
                    link.download = name;
                    link.href = uri;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            </script>

            <script>
                window.onload = (event) => {
                generateHeader("header-row");
                //generateTopNav("top-nav-container");
                generateStandardFooter();

                // start the download using a hidden link
                let uri = '${scorecardPath}/${scorecardfileName}';
                let targetFileName='${scorecardfileName}';
                downloadURI(uri, targetFileName);

                };
            </script>
        </body>
    </html>
        
    `;

    res.write(pageMarkup);
    res.end();
    /*
    res.writeHead(301, {
        Location: `/`
      }).end();
    */ 

    console.log("<<< downloadScorecard()");

    return false;
}

const requestDownload = (req, res) =>
{
    console.log(">>> scorecard.js::requestDownload()");

    console.info("Before Display Download Request Form");
    let formMarkup = downloadScorecardForm.renderScorecardRequestForm(req, res);
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(`${formMarkup}`);
    res.end();
    console.info("After Display Download Request Form");

    console.log("<<< scorecard.js::requestDownload()");

}



router.get('/', requestDownload);
router.get('/download', downloadScorecard);

router.post("/", bodyParser.urlencoded({extended: true}), handlePostRequest);

module.exports = router;