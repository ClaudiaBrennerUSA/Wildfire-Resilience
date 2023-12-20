let generateContactUsForm = (req, res) =>
{
    let values = {
        _id: -1,
        "first-name": "",
        "last-name": "",
        "sender-email": "",
        organization: "",
        title: "",
        "postal-code": "",
        content: "",
        subscribe: "checked",
        "requests-pilot": "checked"
    }

    if(req.method ==="POST")
    {
        let body = req.body;
        values = populateValues(body);
    }

    let markup = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"
                <!-- local styling -->
                <link rel="stylesheet" type="text/css" href="/assets/style/style.css" />
                <link rel="stylesheet" type="text/css" href="/assets/style/system_forms.css">      
                <script src="https://kit.fontawesome.com/e29cb68718.js" crossorigin="anonymous" async></script>
          
                <title>Contact Us</title>
            </head>
            <body>
                <div id="header-row" name="header-row"></div>
                
                <div class="contact-form-title">
                    <h1>Contact Us</h1>
                </div>
                <div class="container">
                    <div class="card-form">
                    <div class="card-form">
                        <form class="needs-validation"   id="contact-us-form" name="contact-us-form" automation-id="contact-us-form"  action="" method="post" novalidate>
                        <div class="reverse-highlight w-100" style="display: none; vertical-align: top;"><label for='_id' style="width: 8em;">_id (hide me):</label><input type="text" class="form-control reverse-highlight" _id="id" name="_id" automation-id="_id" value="${(values['_id'] || -1)}"/><br/></div>
                        
                        <div class="form-group">
                        <label for="first-name">First Name:</label>
                            <input type="text" class="form-control" id="first-name" name="first-name" value="${values['first-name']}" required />
                            <div class="invalid-feedback">First Name is Required</div>
                        </div>
                        <div class="form-group">
                        <label for="last-name">Last Name:</label>
                            <input type="text" class="form-control" id="last-name" name="last-name" value="${values['last-name']}" required />
                            <div class="invalid-feedback">Last Name is Required</div>
                        </div>

                        <div class="form-group">
                        <label for='email'>Email:</label>
                        <input type="email" class="form-control" id="sender-email" name="sender-email" automation-id="sender-email" value="${values['sender-email']}" required />
                        <!-- <div class="flex-force-break"></div> -->
                        <div class="invalid-feedback mb-3">A valid email address is Required</div>
                        </div>
                        
                        <div class="form-group">
                        <label for='organization' >Organization:</label>
                            <input type="text" class="form-control" id="organization" name="organization" automation-id="organization" value="${values['organization']}"/>
                        </div>
                            
                        <div class="form-group">
                        <label for='title'>Role:</label>
                        <div class="form-group">
                        <label for='title'>Role:</label>
                                <input type="text" class="form-control" id="title" name="title" automatiion-id="title"  value="${values['title']}"/>
                            </div>
                            
                            
                            
                            <div class="form-group">
                            <label for='postal-code'>Zip/Postal Code:</label>
                            <div class="form-group">
                            <label for='postal-code'>Zip/Postal Code:</label>
                                <input type="text" class="form-control" id="postal-code" name="postal-code" automation-id="postal-code"  value="${values['postal-code']}" required />
                                <div class="invalid-feedback mb-3">Zipcode / Postal Code is Required</div>
                            </div>
                            
                            
                            <div class="form-group">
                            <label for='content'>Message:</label>
                                <textarea class="form-control" id="content" name="content" automation-id="content" rows="5" cols="50">${values.content}</textarea>
                            <div class="form-group">
                            <label for='content'>Message:</label>
                                <textarea class="form-control" id="content" name="content" automation-id="content" rows="5" cols="50">${values.content}</textarea>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input force-1em" id="subscribe"  name="subscribe" automation-id="subscribe" value="${values['subscribe']}" __onclick="checkme(this)" ${values['subscribe']}>
                                <label class="form-check-label" for="subscribe">Subscribe</label>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input force-1em" id="requests-pilot" name="requests-pilot" automation-id="requests-pilot"  value="${values['requests-pilot']}"  __onclick="checkme(this)"   ${values['requests-pilot']}>
                                <label class="form-check-label" for="requests-pilot">I am interested in piloting with CWP&C</label>
                            </div>

                            <input class="contact-card-button" type="submit" id="'submitRequest" name="submitRequest" automation-id="sumitRequest" value="Contact Us">

                            <input class="contact-card-button" type="submit" id="'submitRequest" name="submitRequest" automation-id="sumitRequest" value="Contact Us">
                        </form>

                    </div closes="card"> 

                </div> <!-- /container -->

                <div id="footer-container"></div>  <!-- /footer-container -->

                <!-- Javascript at bottom of page to facilitate faster page loads -->

                <!-- BOOTSTRAP FROM CDN -->
                
                
                <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"
                    async></script>


                <!-- page specific scripts -->
                <script src="/assets/javascript/footer.js"></script>
                <script src="/assets/javascript/common.js"></script>
                <script src="/assets/javascript/header.js"></script>


                <script>
                    window.onload = (event) => {
                    generateHeader("header-row");
                    switchNavActive();
                    generateStandardFooter();
                    };
                </script>

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
                
                /* == == == == == == == 
                (
                    () => 
                    {
                        'use strict';
                        let formElement = document.getElementById("contact-us-form");
                        if()

                    }
                )
                // == == == == == == */
                </script>

                <script>
                function checkme(element)
                {
                    alert("HERE IS |" + element.name + " WAS CLICKED");
                    element.value = (element.checked ? "checked" : "not checked" );
                    alert("HERE IS |" + element.name + " WAS CLICKED and is now |" + element.value + "|");
                }
                </script>
                <script type="text/javascript" src="https://api.useberry.com/integrations/liveUrl/scripts/useberryScript.js"></script> 
                        
            </body>
        </html>
    `;
    return markup;
}

let populateValues = (values) =>
{
    (">>> contact_form.js::populateValues()");

    console.log(`values is \n`);
    console.log(values);
    console.log(`end values`);

    ("<<< contact_form.js::populateValues()");
    return values;
}
module.exports = {generateContactUsForm};
