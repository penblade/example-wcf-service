# example-wcf-service

Overview

•This web service has an endpoint for SOAP and an endpoint for REST. The SOAP endpoint has one version of each method and it only accepts Xml and returns Xml. The REST endpoint has two versions of each method that accept Xml or Json but one version only returns Xml and the other only returns Json. Use this web service and the accompanying Ajax examples to help you learn how to implement SOAP and REST endpoints in your own web service. Pen Blade LLC assumes no liability for use of this code.

•This project is limited in scope to providing a few examples on how to setup a WCF web service with REST (REpresentational State Transfer) endpoint to submit Xml or Json and return Xml or Json while also providing a standard SOAP (Simple Object Access Protocol) endpoint.

Updates

•Added automaticFormatSelectionEnabled so I could remove the extra REST method that is no longer needed.  I can still force the return format I want with the headers I already set.  I did rename the method name to illustrate that the uritemplate can be different from the method name, however, if you submit XML the tag must match the method name not the URI template.

CORS

•Modern web browsers except IE honor the Cross-Origin Resource Sharing (CORS) W3C recommendation. You can test this web service and javascript locally if you use IE11 or if you whitelist localhost or file in the web service as I have done in this example. The principle desire of CORS is to not allow client side languages like JavaScript to access web services on another domain unless permission is granted by the web service. Browser extensions such as the Chrome extension have manifest files that allow you to give permission to bypass CORS for specific domains.

Troubleshooting

•Trying to resolve web service issues can be very difficult as the error messages if any are even returned are not obvious to fix. Whenever an error message is returned, the error is in the alert and also written to the page just above the examples as the errors are often cut off in the alert.

•If the request is null then your object was not passed into this serivce in the correct format. The request object in the ajax call must be the name of the parameter, not the type. In this case it is request. var jsonRequest = { request: { IsApproved: 0, UserId: 6, Username: "NotGoodWithPeople" } };

•If the request is the default request, then if you are submitting Xml, open the service singleWsdl and ensure that the namespace and data contracts match those in the Wsdl since if they are not correct, you'll get the default version of the object.

•You can use API tokens in every web service call to verify that only authorized users can use the app. The API token can also be used to determine if the request object was passed correctly to the service since you'll want to ignore requests with a null or invalid API token. API tokens should not be your only verification since anyone can possibly get the API token and so use the API token to identify different environments like mobile, desktop, a specific site, etc.

•If the web service provides confidential information or services you should also have a service method for verifying a users credentials and return an authorization or validation token along with an expiration date that can be used for subsequent service requests. Make sure you expire the validation token within a reasonable amount of time such as a day or more sensitive information maybe after an hour or sooner. You can cache the validation token and expiration date locally and renew it once the validation expiration has passed. An alternative to managing your validation tokens is to use OAuth verification provided by google and other companies. Please google for more information on "best practices web service security" for more information on this topic.

•Please look at the example ajax calls for assistance and compare them with your own to determine what you may be missing or set wrong. The Wcf web services in general do not provide clear errors. Use SoapUI or the equivalent to connect to the service and generate a test suite to help you create the Xml calls. To be frank, the REST based methods are easier to use and preferably with Json for submitting and receiving data. I recommend setting up the object methods for every call with a single request object. You can always add more properties to the object and if they are not defined they'll use the default defined in the contract until the site consuming the service can add the new parameter.
