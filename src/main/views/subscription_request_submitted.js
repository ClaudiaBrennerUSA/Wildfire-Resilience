class SubscriptionRequestSubmitted
{
    render = () =>
    {
        console.log(">>> SubscriptionRequestSubmitted::render()");

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
            <script src="https://kit.fontawesome.com/e29cb68718.js" crossorigin="anonymous" async></script>
            <title>Subscription Request Submitted - Community Resilience Wildfire Scorecard</title>
            </head>
            
            <body class="container-fluid">
            <div id="header-row" name="header-row">
            </div>    
            <div class="w-100 text-center hero-text-level-0 ">
                Request Submitted<br>
            </div>
            <div class="w-100 text-center">
                <h2>Thank you for subscribing.</h2> 
                <p>
                    Your request has been successfully submitted.<br>
                    You will receive informative updates and event details shortly
                </p>
            </div>
            <div id="footer-container"></div>
            <!-- page specific scripts -->
            <script src="/assets/javascript/footer.js"></script>
            <script src="/assets/javascript/header.js"></script>
                
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
    console.log("<<< SubscriptionRequestSubmitted::render()");
    
    return pageMarkup;
    
    }
} // end class SubscriptionRequestSubmitted

module.exports = SubscriptionRequestSubmitted;