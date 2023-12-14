const express = require('express');
const path = require ('path');
const PORT = require('./config/env').PORT;

const ContactUsRequestMongoDBRepository = require('./infrastructure/repositories/contact_us_request_mongodb_repository');


const app = express();
const bodyParser = require('body-parser');
const urlencodedParser =  bodyParser.urlencoded({extended: false});
const jsonParser =  bodyParser.json();

app.use(urlencodedParser);
app.use(jsonParser);

const contactUsForm = require('./views/forms/contact_form.js');

const home = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/index.html'))
}

const usingTheScorecard = (req, res) =>
{
    console.log("HELLO from using");
    res.sendFile(path.join(__dirname, 'views/using_the_scorecard.html'))
}

const faq = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/faq.html'))
}

const news = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/press_release.html'))
}

const scorecardInfo = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/scorecard_info.html'))
}

const aboutUs = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/about_us.html'))
}


const postPoc = (req, res) =>
{
    createContactUsRequest(req, res);
}

const dbPoc = (req, res) =>
{
    testDbConnection(req, res);
}


let validateContatctUsRequest = (rawValues) =>
{
    return true;
}


let createContactUsRequest = (req, res) =>
{
    let method = req.method;

    switch (method)
    {
        case "GET":
        {
            handleContactUsGetRequest(req, res);
            break; 
        }
        case "POST":
        {
            handleContactUsPostRequest(req, res);
            break;
        }

    } // end switch

    return;
}

let handleContactUsGetRequest = (req, res) =>
    {
        logMethod(req, res);
        let markup = contactUsForm.generateContactUsForm(req, res);
        res.send(markup);
        return;
    }            

let handleContactUsPostRequest = (req, res) =>
    {        
        logMethod(req, res);
     
        let requestIsValid = validateContatctUsRequest(req.body);

        if(requestIsValid)
        {
            //let markup = contactUsForm.generateContactUsForm(req, res);
            repo = new ContactUsRequestMongoDBRepository();
            let model = req.body;
            let result = repo.store(model);
            // navigate to success page 
            res.send("<h1>Success</h1>");
        }
        else
        {
            let markup = contactUsForm.generateContactUsForm(req, res);
            res.send(markup);
        }
        
        return;
    }



let logMethod = (req, res) =>
{
    let method = req.method;
    console.log(`createContactUsRequest(req, res) called with ${method}`);
    return;
}




const listenCallBackFunction = () =>
{
    console.log("listening on port ", PORT);
}        

app.get('/', home);
app.get('/using_the_scorecard', usingTheScorecard);
app.get('/faq', faq);
app.get('/press_release', news);
app.get('/news', news);
app.get('/scorecard_info', scorecardInfo);
app.get('/about_us', aboutUs);


app.get("/postpoc", urlencodedParser, postPoc);
app.post("/postpoc", urlencodedParser, postPoc);

app.get("/dbpoc", urlencodedParser, dbPoc);



app.listen(PORT, listenCallBackFunction);
app.use(express.static('static_files'));

const scorecardRouter = require('./routes/scorecard.js');
const contactUsRouter = require('./routes/contact_us.js');
const subscriptionRouter = require('./routes/subscribe.js');
const supportTheCauseRouter = require('./routes/support_the_cause');

const apiRouter = require('./routes/api/index.js');


app.use('/scorecard', scorecardRouter);
app.use('/contact_us', urlencodedParser, contactUsRouter);
app.use('/subscribe', urlencodedParser, subscriptionRouter);
app.use('/support_the_cause', urlencodedParser, supportTheCauseRouter);


app.use('/api', apiRouter);

