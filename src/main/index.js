const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const path = require('path');
var mongodb = require('mongodb');
const { connectToDb } = require('./db');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'static_files' directory.
// equivalent to public files
app.use(express.static('static_files'));

const dbstore = new MongoStore({
  mongoUrl: process.env.CONNECTION_URI,
  collection: process.env.SESSION_COLLECTION
});

app.use(session({
  cookie: { maxAge: 86400000 },
  store: dbstore,
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
}));


// Define routes with consistent formatting and error handling
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/using_the_scorecard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/using_the_scorecard.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/faq.html'));
});

app.get('/press_release', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/press_release.html'));
});

app.get('/scorecard_info', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/scorecard_info.html'));
});

app.get('/about_us', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about_us.html'));
});

app.get('/subscribe', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/subscribe.html'));
});

//contact form directly
app.get('/contact_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contactus.html'));
});

//contact form pop-up
app.get('/get-contact-form', (req, res) => {
    const formPath = path.join(__dirname, 'views/contactform.html');
    res.sendFile(formPath, {isPopup: true});
});

app.get('/contactform', (req,res) => {
  res.sendFile(path.join(__dirname, 'views/contactform.html'));
});

app.get('/scorecardform', (req,res) => {
  res.sendFile(path.join(__dirname, 'views/scorecardform.html'));
});


app.get('/supportform', (req,res) => {
  const formPath = path.join(__dirname, 'views/supportCause.html');
  res.sendFile(formPath, {isPopup: true});
});

app.get('/collabform', (req,res) => {
  const formPath = path.join(__dirname, 'views/collaborateform.html');
  res.sendFile(formPath, {isPopup: true});
});

app.get('/feedbackform', (req,res) => {
  const formPath = path.join(__dirname, 'views/feedbackform.html');
  res.sendFile(formPath, {isPopup: true});
});


app.post('/submit-contact-form', async (req, res) => {
    // Process form data, save to MongoDB, send response
    const pageName = req.body.pageName;
    try{
        const db = await connectToDb();

        const contactCollection = db.collection('contactUs'); // Using specified collection
        
        const formData = req.body;
        delete formData._id; // Remove any potential _id field
        
        await contactCollection.insertOne(formData);

        if(pageName === 'index'){
          res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('contact'));
        }
        else{
          res.redirect('contact_us?status=' +encodeURIComponent('success') + '&form=' + encodeURIComponent('contact'));
        }
    }
    catch(error){
        console.error(error);
        if(pageName === 'index'){
          res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('contact'));
        }
        else{
          res.redirect('contact_us?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('contact')); 
        }
    }
});

app.post('/submit-subscribe-form', async (req, res) => {
  // Process form data, save to MongoDB, send response
  const pageName = req.body.pageName;
  try{
      const db = await connectToDb();
      const subsCollection = db.collection('subscribe'); // Using specified collection
      
      const formData = req.body;
      delete formData._id; // Remove any potential _id field
      
      await subsCollection.insertOne(formData);

      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('subscribe'));
      }
      else{
        res.redirect('subscribe?status=' +encodeURIComponent('success') + '&form=' + encodeURIComponent('subscribe'));
      }
  }
  catch(error){
      console.error(error);
      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('subscribe'));
      }
      else{
        res.redirect('subscribe?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('subscribe')); 
      }
  }
});

app.post('/submit-download-form', async (req, res) => {
  // Process form data, save to MongoDB, send response
  const pageName = req.body.pageName;
  try{
      const db = await connectToDb();
      const formCollection = db.collection('downloadScorecard'); // Using specified collection
      
      const formData = req.body;
      delete formData._id; // Remove any potential _id field
      
      await formCollection.insertOne(formData);
  
      if (pageName === 'index') {
        res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('download'));
      } else {
        res.redirect('subscribe?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('download'));
      }
    }
  catch(error){
      console.error(error);
      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('download'));
      }
      else{
        res.redirect('subscribe?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('download')); 
      }
  }
});

app.post('/submit-support-form', async (req, res) => {
  // Process form data, save to MongoDB, send response
  const pageName = req.body.pageName;
  try{
      const db = await connectToDb();
      const formCollection = db.collection('supportCause'); // Using specified collection
      
      const formData = req.body;
      delete formData._id; // Remove any potential _id field
      
      await formCollection.insertOne(formData);
  
      if (pageName === 'index') {
        res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('support'));
      } else {
        res.redirect(pageName+'?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('support'));
      }
    }
  catch(error){
      console.error(error);
      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('support'));
      }
      else{
        res.redirect(pageName+'?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('support')); 
      }
  }
});

app.post('/submit-collab-form', async (req, res) => {
  // Process form data, save to MongoDB, send response
  const pageName = req.body.pageName;
  try{
      const db = await connectToDb();
      const formCollection = db.collection('collaborate'); // Using specified collection
      
      const formData = req.body;
      delete formData._id; // Remove any potential _id field
      
      await formCollection.insertOne(formData);
  
      if (pageName === 'index') {
        res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('collab'));
      } else {
        res.redirect(pageName+'?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('collab'));
      }
    }
  catch(error){
      console.error(error);
      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('collab'));
      }
      else{
        res.redirect(pageName+'?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('collab')); 
      }
  }
});

app.post('/submit-feedback-form', async (req, res) => {
  // Process form data, save to MongoDB, send response
  const pageName = req.body.pageName;
  try{
      const db = await connectToDb();
      const formCollection = db.collection('feedback'); // Using specified collection
      
      const formData = req.body;
      delete formData._id; // Remove any potential _id field
      
      await formCollection.insertOne(formData);
  
      if (pageName === 'index') {
        res.redirect('/?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('feedback'));
      } else {
        res.redirect(pageName+'?status=' + encodeURIComponent('success') + '&form=' + encodeURIComponent('feedback'));
      }
    }
  catch(error){
      console.error(error);
      if(pageName === 'index'){
        res.redirect('/?status=' + encodeURIComponent('error') + '&form=' + encodeURIComponent('feedback'));
      }
      else{
        res.redirect(pageName+'?status=' +encodeURIComponent('error') + '&form=' + encodeURIComponent('feedback')); 
      }
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
