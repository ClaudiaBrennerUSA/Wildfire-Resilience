const express = require('express');
const path = require ('path');
const PORT = require('./config/env').PORT;

const app = express();


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

app.listen(PORT, listenCallBackFunction);
app.use(express.static('static_files'));

const scorecardRouter = require('./routes/scorecard.js');
app.use('/scorecard', scorecardRouter);