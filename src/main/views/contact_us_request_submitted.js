class ContactUsRequestSubmitted
{
    render = () =>
    {
        console.log(">>> ContactUsRequestSubmitted::render()");

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
            
            <title>Contact RRequest Submitted - Community Resilience Wildfire Scorecard</title>
            </head>
            <body>
                <div class="row-container" id="header-row" name="header-row"></div> <!--Header Populated By Javascript function -->
                <!-- <div class="row-container" id="top-nav-container" name="top-nav-container"> --></div><!--Top Navigation conatiner - to be replace with Sadiya's Header Populated By Javascript function -->
    
                <div class="w-100 text-center hero-text-level-0 ">
                    Request Submitted<br>
                </div>
                <div class="w-100 text-center">
                    <h2>Thank you for reaching out.</h2> 
                    <p>
                        Your request has been successfully submitted.<br>
                        A team member will be responding to you ASAP
                    </p>

                </div>
    
    
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
                
    
                <script>
                    window.onload = (event) => 
                    {
                        generateHeader("header-row");
                        generateStandardFooter();
                    };
                </script>
            </body>
        </html>
            
        `;
    console.log("<<< ContactUsRequestSubmitted::render()");
    
    return pageMarkup;
    
    }
} // end class ContactUsRequestSubmitted

module.exports = ContactUsRequestSubmitted;