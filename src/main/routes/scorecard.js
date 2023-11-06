const express = require('express');
const router = express.Router();

const renderScorecardRequestForm = () =>
{
    let firstName = "Myfirstname";
    let lastName = "Mylastname";
    let phoneNumber = "";
    let organization = "";
    let role = "";
    let postalCode = "";

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
        
        </head>
        <body>
            <form class="mt-5" action="/scorecard" method="POST">
                <div class="">
                    <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Your First Name" value="${firstName}"/>
                </div>

                </div>
                <div class="form-group mt-2">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Your Last Name" value="${lastName}"/>
                </div>
                <div class="form-group mt-2">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Best Number to Reach You" value="${phoneNumber}"/>
                </div>

                <div class="form-group mt-2">
                    <label for="organization">Organization</label>
                    <input type="text" class="form-control" id="organization" name="organization" placeholder="Company, NGO, Municipality, or Entity this scorecard is for" value="${organization}"/>
                </div>

                <div class="form-group mt-2">
                    <label for="role">Role</label>
                    <input type="text" class="form-control" id="role" name="role" placeholder="Your Role at the organization Above" value="${role}"/>
                </div>

                <div class="form-group mt-2">
                    <label for="postalCode">Zipcode / Postal Code</label>
                    <input type="text" class="form-control" id="postalCode" name="postalCode" placeholder="Postal Code" value="${postalCode}"/>
                </div>





                <button type="submit" class="btn btn-primary mt-2">Get Scorecard</button>
            </form>


            <!-- Javascript at bottom of page to facilitate faster page loads -->

            <!-- BOOTSTRAP FROM CDN -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
    
            <!-- page specific scripts -->
            <script src="/assets/javascript/footer.js"></script>
    
        </body>
    `;

    return markup;
}



const requestDownload = (req, res) =>
{
    console.info("Before Display Download Request Form");
    let formMarkup = renderScorecardRequestForm();
    res.send(`<h1>Download Form</h1> ${formMarkup}`);
    console.info("After Display Download Request Form");
}



router.get('/', requestDownload);

module.exports = router;