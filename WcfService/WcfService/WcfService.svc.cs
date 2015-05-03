using System;

namespace PenBlade.Example.Service
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class WcfService : IWcfService
    {
        #region HelloWorld
        public string HelloWorldSoap()
        {
            return HelloWorld();
        }

        public string HelloWorldRest()
        {
            return HelloWorld();
        }

        private string HelloWorld()
        {
            return "Hello World";
        }
        #endregion

        #region WelcomHome
        public string WelcomeHomeSoap(string type)
        {
            return WelcomeHome(type);
        }

        // For REST based requests if multiple parameters are required, then you have to create a request object that contains all of the parameters.
        public string WelcomeHomeRest(string type)
        {
            return WelcomeHome(type);
        }

        private string WelcomeHome(string type)
        {
            return String.Format("Welcome home ({0})", type);
        }
        #endregion

        #region LookingForGroup
        public LookingForGroupResponse LookingForGroupSoap(LookingForGroupRequest request)
        {
            return LookingForGroup(request);
        }

        public LookingForGroupResponse LookingForGroupRest(LookingForGroupRequest request)
        {
            return LookingForGroup(request);
        }

        private Guid WcfServiceAppToken = new Guid("6158d0cc-32b3-4a62-8e16-903871097778");

        private LookingForGroupResponse LookingForGroup(LookingForGroupRequest request)
        {
            // Reference the WcfService.htm for information on how to troubleshoot issues.
            if (request == null)
            {
                throw new ArgumentNullException("LookingForGroupRequest", "LookingForGroupRequest is null.  Did you format the object correctly?  The parameter is 'request' not the type.");
            }

            if (request.AppToken == null)
            {
                throw new ArgumentNullException("LookingForGroupRequest.AppToken", "The application token is null.  Did you include the AppToken in your request object?  If you are submitting Xml did you set the correct xmnls namespace and data contract found in the singleWSDL?  If you are submitting standard Soap did you define the xmnls soap envelope?  If you are submitting Xml via REST did you define the xmlns namespace and data contract in the first element?  If you are submitting Xml make sure the element with the method name and parameter name are defined with ns: and the data contract elements with data:.");
            }

            if (request.AppToken != WcfServiceAppToken)
            {
                throw new ArgumentException("You do not have authorization to access this method with that application token.", "LookingForGroupRequest.AppToken");
            }

            var response = new LookingForGroupResponse();

            if (request.IsApproved && request.UserId > 0)
            {
                response.Message = String.Format("Welcome to the group {0}", request.Username);
            }
            else
            {
                response.Message = String.Format("Sorry {0}, you can't join the group at this time", request.Username);
            }

            return response;
        }
        #endregion
    }
}
