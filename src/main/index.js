const express = require('express');
const path = require ('path');
const PORT = require('./config/env').PORT;

const app = express();


const home = (req, res) =>
{
    res.sendFile(path.join(__dirname, 'views/index.html'))
}


const listenCallBackFunction = () =>
{
    console.log("listening on port ", PORT);
}        

app.get('/', home);
app.listen(PORT, listenCallBackFunction);
app.use(express.static('static_files'));

const scorecardRouter = require('./routes/scorecard.js');
app.use('/scorecard', scorecardRouter);