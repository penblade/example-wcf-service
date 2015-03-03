// #region class WcfService
WcfService = function()
{
    var getSuccess =
        function (result, status, xhr) {
            alert("Success:\nreadyState: " + xhr.readyState + "\nstatus: " + xhr.status + "\n\nresponseText:\n" + xhr.responseText + "\n\nresponseXML:\n" + xhr.responseXML + "\n\nxmlhttp:\n" + xhr);
        };

    var getError =
        function (xhr, status, error) {
            alert("Error: " + error + "\nreadyState: " + xhr.readyState + "\nstatus: " + xhr.status + "\n\nresponseText:\n" + xhr.responseText + "\n\nresponseXML:\n" + xhr.responseXML + "\n\nxmlhttp:\n" + xhr);
            $('#ErrorMessage').html(xhr.responseText);
        };

    // #region Wcf Service methods have no parameters.
    this.helloWorldRestSubmitJsonReturnJson =
        function () {
            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/HelloWorldRestReturnJson",
                dataType: "json",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: "",
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.helloWorldRestSubmitJsonReturnXml =
        function () {
            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface
                url: "http://localhost:58205/WcfService.svc/rest/HelloWorldRestReturnXml",
                dataType: "xml",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: "",
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.helloWorldRestSubmitXmlReturnJson =
        function () {
            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/HelloWorldRestReturnJson",
                dataType: "json",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/HelloWorldRestReturnJson" },
                data: "",
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.helloWorldRestSubmitXmlReturnXml =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:HelloWorldRestReturnXml></ns:HelloWorldRestReturnXml>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/HelloWorldRestReturnXml" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.helloWorldSoap =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:HelloWorldSoap></ns:HelloWorldSoap>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/HelloWorldSoap" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };
    // #endregion Wcf Service methods have no parameters.

    // #region Wcf Service methods have primitive type parameters.
    this.welcomeHomeRestSubmitJsonReturnJson =
        function () {
            var jsonRequest = { type: "Json/Json" };

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/WelcomeHomeRestReturnJson",
                dataType: "json",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: JSON.stringify(jsonRequest),
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.welcomeHomeRestSubmitJsonReturnXml =
        function () {
            var jsonRequest = { type: "Json/Xml" };

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface
                url: "http://localhost:58205/WcfService.svc/rest/WelcomeHomeRestReturnXml",
                dataType: "xml",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: JSON.stringify(jsonRequest),
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.welcomeHomeRestSubmitXmlReturnJson =
        function () {
            var soapRequest = '<ns:WelcomeHomeRestReturnJson xmlns:ns="http://www.penblade.com/example/service/"><ns:type>Xml/Json</ns:type></ns:WelcomeHomeRestReturnJson>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/WelcomeHomeRestReturnJson",
                dataType: "json",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/WelcomeHomeRestReturnJson" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.welcomeHomeRestSubmitXmlReturnXml =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:WelcomeHomeRestReturnXml><ns:type>Xml/Xml</ns:type></ns:WelcomeHomeRestReturnXml>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/WelcomeHomeRestReturnXml" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.welcomeHomeSoap =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:WelcomeHomeSoap><ns:type>Soap Xml</ns:type></ns:WelcomeHomeSoap>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/WelcomeHomeSoap" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };
    // #endregion Wcf Service methods have primitive type parameters.

    // #region Wcf Service methods have object parameters.
    this.lookingForGroupRestSubmitJsonReturnJson =
        function () {
            var jsonRequest = { request: { AppToken: "6158d0cc-32b3-4a62-8e16-903871097778", IsApproved: 1, UserId: 5, Username: "PickMe" } };

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/LookingForGroupRestReturnJson",
                dataType: "json",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: JSON.stringify(jsonRequest),
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.lookingForGroupRestSubmitJsonReturnXml =
        function () {
            var jsonRequest = { request: { AppToken: "6158d0cc-32b3-4a62-8e16-903871097778", IsApproved: 0, UserId: 6, Username: "NotGoodWithPeople" } };

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface
                url: "http://localhost:58205/WcfService.svc/rest/LookingForGroupRestReturnXml",
                dataType: "xml",
                contentType: "text/json; charset=utf-8",  // request type sent to web service
                data: JSON.stringify(jsonRequest),
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.lookingForGroupRestSubmitXmlReturnJson =
        function () {

            var soapRequest = '<ns:LookingForGroupRestReturnJson xmlns:ns="http://www.penblade.com/example/service/" xmlns:data="http://schemas.datacontract.org/2004/07/PenBlade.Example.Service"><ns:request><data:AppToken>6158d0cc-32b3-4a62-8e16-903871097778</data:AppToken><data:IsApproved>1</data:IsApproved><data:UserId>2</data:UserId><data:Username>Fodder</data:Username></ns:request></ns:LookingForGroupRestReturnJson>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc/rest/LookingForGroupRestReturnJson",
                dataType: "json",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/LookingForGroupRestReturnJson" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.lookingForGroupRestSubmitXmlReturnXml =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:LookingForGroupRestReturnXml><ns:request><data:AppToken>6158d0cc-32b3-4a62-8e16-903871097778</data:AppToken><data:IsApproved>0</data:IsApproved><data:UserId>3</data:UserId><data:Username>GreedyOne</data:Username></ns:request></ns:LookingForGroupRestReturnXml>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/" xmlns:data="http://schemas.datacontract.org/2004/07/PenBlade.Example.Service"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/LookingForGroupRestReturnXml" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    this.lookingForGroupSoap =
        function () {
            // Create the xml for the soap request.  This xml should be the same as a SoapUI request
            // The soap environment, namespace, and data are all constants when calling an api.
            var parameters = '<ns:LookingForGroupSoap><ns:request><data:AppToken>6158d0cc-32b3-4a62-8e16-903871097778</data:AppToken><data:IsApproved>1</data:IsApproved><data:UserId>6</data:UserId><data:Username>SoapIsGreat</data:Username></ns:request></ns:LookingForGroupSoap>';
            var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.penblade.com/example/service/" xmlns:data="http://schemas.datacontract.org/2004/07/PenBlade.Example.Service"><soapenv:Body>' + parameters + '</soapenv:Body></soapenv:Envelope>';

            $.ajax({
                type: "POST",
                // Service Uri + Endpoint address (web.config) + UriTemplate (defined in service contract on the interface)
                url: "http://localhost:58205/WcfService.svc",
                dataType: "xml",
                contentType: "text/xml; charset=utf-8",  // request type sent to web service
                headers: { SOAPAction: "http://www.penblade.com/example/service/IWcfService/LookingForGroupSoap" },
                data: soapRequest,
                success: getSuccess,
                error: getError
            });

            // Return false so the page does not perform a postback.
            return false;
        };

    // #endregion Submit Xml / Return Xml
};
// #endregion WcfService

window.onload = function () {
    try {
        $.support.cors = true;

        var service = new WcfService();
        $("#helloWorldRestSubmitJsonReturnJsonButton").click(service.helloWorldRestSubmitJsonReturnJson);
        $("#helloWorldRestSubmitJsonReturnXmlButton").click(service.helloWorldRestSubmitJsonReturnXml);
        $("#helloWorldRestSubmitXmlReturnJsonButton").click(service.helloWorldRestSubmitXmlReturnJson);
        $("#helloWorldRestSubmitXmlReturnXmlButton").click(service.helloWorldRestSubmitXmlReturnXml);
        $("#helloWorldSoapButton").click(service.helloWorldSoap);

        $("#welcomeHomeRestSubmitJsonReturnJsonButton").click(service.welcomeHomeRestSubmitJsonReturnJson);
        $("#welcomeHomeRestSubmitJsonReturnXmlButton").click(service.welcomeHomeRestSubmitJsonReturnXml);
        $("#welcomeHomeRestSubmitXmlReturnJsonButton").click(service.welcomeHomeRestSubmitXmlReturnJson);
        $("#welcomeHomeRestSubmitXmlReturnXmlButton").click(service.welcomeHomeRestSubmitXmlReturnXml);
        $("#welcomeHomeSoapButton").click(service.welcomeHomeSoap);

        $("#lookingForGroupRestSubmitJsonReturnJsonButton").click(service.lookingForGroupRestSubmitJsonReturnJson);
        $("#lookingForGroupRestSubmitJsonReturnXmlButton").click(service.lookingForGroupRestSubmitJsonReturnXml);
        $("#lookingForGroupRestSubmitXmlReturnJsonButton").click(service.lookingForGroupRestSubmitXmlReturnJson);
        $("#lookingForGroupRestSubmitXmlReturnXmlButton").click(service.lookingForGroupRestSubmitXmlReturnXml);
        $("#lookingForGroupSoapButton").click(service.lookingForGroupSoap);
    }
    catch (ex) {
        alert(ex.message + "\n\nstack:\n" + ex.stack);
    }
};

