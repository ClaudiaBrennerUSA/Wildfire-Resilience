const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));


const renderScorecardRequestForm = (req, res) =>
{
    console.log(">>> renderScorecardRequestForm(req, res)");

    let values = {
        _id: -1,
        "first-name": "",
        "last-name": "",
        "sender-email": "",
        "phone-number": "",
        organization: "",
        title: "",
        "postal-code": "",
        comments: "",
        subscribe: "checked",
        "requests-pilot": "checked"
    }

    if(req.method ==="POST")
    {
        let body = req.body;
        values = populateValues(body);
    }


    let  markup = `
        <doctype html>
        <html lang='en'>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Request Scorecard</title>

            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        
        
            <!-- local styling -->
            <link rel="stylesheet" type="text/css" href="/assets/style/system.css">

            <!-- MOVE BELOW TO SYSTEM.CSS -->
            <style>
           
                /* SEE: https://tobiasahlin.com/blog/flexbox-break-to-new-row/ */
                .flex-validated-form-element-container {
                    display: flex;
                    flex-wrap: wrap;
                    vertical-align: top;"
                }
                
                .flex-force-break {
                    flex-basis: 100%;
                    height: 0;
                }


                /* /SEE: https://tobiasahlin.com/blog/flexbox-break-to-new-row/ */          

                .force-1em 
                {
                    width: 1em;
                    max-width: 1em; 
                    min-width:1em;
                }                
                

                .reverse-highlight {
                    background-color: black;
                    color: white;
                }
            </style>
        
        </head>
        <body>
            <div class="card w-100 p-3">

                <form class="mt-5" action="/scorecard" method="POST">

                    <div class="reverse-highlight w-100" style="display: flex; vertical-align: top;"><label for='_id' style="width: 8em;">_id (hide me):</label><input type="text" class="form-control reverse-highlight" _id="id" name="_id" automation-id="_id" value="${(values['_id'] || -1)}"/><br/></div>


                    <div class="">
                        <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input type="text" class="form-control" id="first-name" name="first-name" placeholder="Your First Name" value="${values['first-name']}"/>
                    </div>

                    </div>
                    <div class="form-group mt-2">
                        <label for="last-name">Last Name</label>
                        <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Your Last Name" value="${values['last-name']}"/>
                    </div>
                    <div class="form-group mt-2">
                        <label for="phone-number">Phone Number</label>
                        <input type="text" class="form-control" id="phone-number" name="phone-number" placeholder="Best Number to Reach You" value="${values['phone-number']}"/>
                    </div>

                    <div class="form-group mt-2">
                        <label for="organization">Organization</label>
                        <input type="text" class="form-control" id="organization" name="organization" placeholder="Company, NGO, Municipality, or Entity this scorecard is for" value="${values['organization']}"/>
                    </div>

                    <div class="form-group mt-2">
                        <label for="title">Role</label>
                        <input type="text" class="form-control" id="title" name="title" placeholder="YourTitle or Role at the organization above" value="${values['title']}"/>
                    </div>

                    <div class="form-group mt-2">
                        <label for="postal-code">Zipcode / Postal Code</label>
                        <input type="text" class="form-control" id="postal-code" name="postal-code" placeholder="Postal Code" value="${values['postal-code']}"/>
                    </div>


                    <div class="form-check">
                        <input type="checkbox" class="form-check-input force-1em" id="subscribe"  name="subscribe" automation-id="subscribe" value="${values['subscribe']}" ${values['subscribe']}>
                        <label class="form-check-label" for="subscribe">Subscribe</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input force-1em" id="requests-pilot" name="requests-pilot" automation-id="requests-pilot"  value="${values['requests-pilot']}"  ${values['requests-pilot']}>
                        <label class="form-check-label" for="requests-pilot">I am interested in piloting with CWP&C</label>
                    </div>


                    <div class="flex-validated-form-element-container"  style="text-align: left;">
                        <label for='comments' style="width: 6.5em;">Comments:</label>
                        <textarea class="form-control" id="comments" name="comments" automation-id="comments" rows="10" cols="40">${values.comments}</textarea>
                    </div>


                    <button type="submit" class="btn btn-primary mt-2">Get Scorecard</button>
                </form>

            </div closes="card">


            <!-- Javascript at bottom of page to facilitate faster page loads -->

            <!-- BOOTSTRAP FROM CDN -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
    
            <!-- page specific scripts -->
            <script src="/assets/javascript/footer.js"></script>

            <!-- form validation script  SEE: https://getbootstrap.com/docs/5.0/forms/validation/ --> 
            <script>
            //* -- -- -- -- -- -- // 
            // Original Script 

            // Example starter JavaScript for disabling form submissions if there are invalid fields
            (() => {
            'use strict'
            
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')
            
            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
            
                form.classList.add('was-validated')
                }, false)
            })
            })()  
            // -- -- -- -- -- --  */


            <script>
                window.onload = (event) => {
                // generateHeader("header-row");
                generateTopNav("top-nav-container");
                generateStandardFooter();
                };
            </script>
    
        </body>
    `;

    console.log("<<< renderScorecardRequestForm(req, res)");

    return markup;
} // end renderScorecardRequestForm

let populateValues = (values) =>
{
    console.log(">>> download_scorecard_form.js::populateValues()");

    console.log(`values is \n`);
    console.log(values);
    console.log(`end values`);

    console.log("<< download_scorecard_form.js::populateValues()");
    return values;
}

module.exports = {renderScorecardRequestForm};