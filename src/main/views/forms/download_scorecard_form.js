const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');


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
            <link rel="stylesheet" type="text/css" href="/assets/style/style.css">
            <link rel="stylesheet" type="text/css" href="/assets/style/system.css">
            <link rel="stylesheet" type="text/css" href="/assets/style/system_forms.css">


        
        </head>
        <body>
            
            <div class="row-container" id="header-row" name="header-row"></div><!--Header Populated By Javascript function-->

            <div class="container">

                <div class="w-100 text-center hero-text-level-0 ">
                <h1>Download the Scorecard</h1>
                </div>

                <div class="card w-100 p-3">

                    <form class="needs-validation" action="/scorecard" method="POST" novalidate>
                    
                    <div class="reverse-highlight w-100" style="display: none; vertical-align: top;"><label for='_id' style="width: 8em;">_id (hide me):</label><input type="text" class="form-control reverse-highlight" _id="id" name="_id" automation-id="_id" value="${(values['_id'] || -1)}"/><br/></div>

                        <div class="">
                        <div class="flex-validated-form-element-container mt-2">
                            <label for="first-name">First Name</label>
                            <input type="text" class="form-control" id="first-name" name="first-name" placeholder="Your First Name" value="${values['first-name']}" required />
                            <div class="invalid-feedback">First Name is Required</div>
                        </div>

                        </div>
                        <div class="flex-validated-form-element-container mt-2">
                            <label for="last-name">Last Name</label>
                            <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Your Last Name" value="${values['last-name']}" required />
                            <div class="invalid-feedback">Last Name is Required</div>
                        </div>


                        <div class="flex-validated-form-element-container mt-2">
                        <label for='email'>email:</label>
                        <input type="email" class="form-control" id="sender-email" name="sender-email" automation-id="sender-email" placeholder="Your valid email address"  value="${values['sender-email']}" required />
                        <!-- <div class="flex-force-break"></div> -->
                        <div class="invalid-feedback mb-3">A valid emaill address is Required</div>
                        </div>

                        <div class="flex-validated-form-element-container mt-2">
                            <label for="phone-number">Phone Number</label>
                            <input type="text" class="form-control" id="phone-number" name="phone-number" placeholder="Best Number to Reach You" value="${values['phone-number']}"/>
                        </div>

                        <div class="flex-validated-form-element-container mt-2">
                            <label for="organization">Organization</label>
                            <input type="text" class="form-control" id="organization" name="organization" placeholder="Company, NGO, Municipality, or Entity this scorecard is for" value="${values['organization']}"/>
                        </div>

                        <div class="flex-validated-form-element-container mt-2">
                            <label for="title">Role</label>
                            <input type="text" class="form-control" id="title" name="title" placeholder="Your Title or Role at the organization above" value="${values['title']}"/>
                        </div>


                        <div class="flex-validated-form-element-container mt-2">
                            <label for='postal-code'>Zipcode /Postal Code:</label>
                            <input type="text" class="form-control" id="postal-code" name="postal-code" automation-id="postal-code" placeholder="Zipcode or Postal Code of the Organization" value="${values['postal-code']}" required />
                            <div class="invalid-feedback mb-3">Zipcode / Postal Code is Required></div>
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

            </div ><!-- /form container -->

            <div id="footer-container"></div>  <!-- /footer-container -->

            <!-- Javascript at bottom of page to facilitate faster page loads -->

            <!-- BOOTSTRAP FROM CDN -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>    
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
            </script>

            <script src="/assets/javascript/footer.js"></script>
            <script src="/assets/javascript/topnav.js"></script>
            <script src="/assets/javascript/header.js"></script>
            <script src="/assets/javascript/common.js"></script>
          

            <script>
                window.onload = (event) => {
                generateHeader("header-row");
                //generateTopNav("header-row");
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