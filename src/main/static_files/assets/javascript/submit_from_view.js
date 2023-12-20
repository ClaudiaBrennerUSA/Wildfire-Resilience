var _formElement = '';
var _postURI = '/api/subscribe';
var _result = "nothing yet";

const submissionEventHandler = async (event) =>
{

    console.log(">>> submissionEventHandler()");
    
    event.preventDefault();
    let json = convertFormDataToJSON(_formElement);
    let requestResult = await submitSubscriptionRequest(json, _postURI);
    
    console.log("submissionEventHandler() request result is |");
    console.log(requestResult);
    console.log("| end requestResult");

    let formValues = json;
    let subscriptionResponseConfig = {
        'form-values' : json,
        'request-result' : requestResult
    };



    //let result = handleSubscriptionResponse(requestResult);
    let result = handleSubscriptionResponse(subscriptionResponseConfig );


    console.log(`submissionEventHandler result is |`);
    console.log(`${JSON.stringify(result)}`);
    console.log("|");

    console.log("<<< submissionEventHandler()");
   

    return result; 

} // end submissionEventHandler()



const setupAjaxSubmit = (formId, postURI) =>
{
    console.log(">>> setupAjaxSubmit()");

    _formElement = document.getElementById(formId);
    _formElement.addEventListener("submit", submissionEventHandler);
    _postURI = postURI;

    console.log("<<< setupAjaxSubmit()");

} // end setupAjaxSubmit()

const convertFormDataToJSON = (formElement) =>
{
    console.log(">>> convertFormDataToJSON()");

    let json = {};

    let allElementsCollection = _formElement.elements;
    let allElements = Array.from(allElementsCollection);
    allElements.forEach(element  => 
      {
        json[element.name] = element.value;
      }
      );

      console.log(`convertFormDataToJSON() json to return is |${JSON.stringify(json)}|`);
      console.log(" <<< convertFormDataToJSON()");
      
      return json;

    } // end convertFormDataToJSON()



    const submitSubscriptionRequest = async (json, uri) =>
    {

        console.log(">>> submitSubscriptionRequest()");

        let result = {"message" : "not run yet"};
        let xmlhttp = getAjaxRequest();
        
        if(xmlhttp == false)
        {
            result = {
                "result" : "failure", 
                "message" : "Browser does not support xmlhttp"
            };
        }
        else
        {
            let params = json;

            console.log("params are |" );
            console.log(params);
            console.log('|');


            xmlhttp.open("POST", uri, false); // set true for async, false for sync request
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(params)); // or null, if no parameters are passed
 
            let responseText = xmlhttp.responseText;
            console.log("submitSubscriptionRequest responseText is |" + responseText + "|"  );
            result = JSON.parse(responseText);
        } //  end <else> if(xmlhttp == false)

        console.log("<<< submitSubscriptionRequest()");

        return result;
    }// end submitSubscriptionRequest()


    const handleSubscriptionResponse = (config) =>
    {
        console.log(">>> handleSubscriptionResponse()");
       
        let json = config['form-values'];
        let submissionResult = config['request-result'];
        let success = manageSubmissionResult(submissionResult);

        const successMessageElement= document.getElementById('successMessage');

        console.log("handleSubscriptionResponse json is |");
        console.log(json);
        console.log ('|======');

        if (success)
        {
            successMessageElement.textContent = `Thank you, ${json['first-name']} ${json['last-name']}! Your subscription to updates and events is activated.`;    
        }
        else
        {
            successMessageElement.textContent = `SORRY: we were unable to process your subscription request! Please try again later.`;    
        }

        console.log("<<< handleSubscriptionResponse()");

        return success;
    } // end handleSubscriptionResponse


    const manageSubmissionResult = (json) =>
    {
        let success = true; 
        
        console.log(">>> manageSubmissionResult()");
        console.log(`json is |${JSON.stringify(json)}|`);
        console.log("<<< manageSubmissionResult()");

        return success;
    }

    const  getAjaxRequest = ()=>
    {
        if (window.XMLHttpRequest) 
        {
            return new XMLHttpRequest();
        } 
        else if (window.ActiveXObject) 
        {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } 
        else 
        {
            alert("Browser does not support XMLHTTP.");
            console.log("Browser does not support XMLHTTP.");
            return false;
        }
    } // end  getAjaxRequest()
