using PenBlade.Example.Service.Repository;
using System;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace PenBlade.Example.Service
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.

    // Change the namespace associated with the web service.  It can be a version number or a website such as where the service will be published.  It really doesn't matter.
    // Most Wcf forums recommend changing the namespace to use anything you want rather than the default http://tempuri.org.  Xml ajax calls require the namespace to be defined, so do it now.
    [ServiceContract(Namespace=CORSRepository.Namespace)]
    public interface IWcfService
    {
        #region HelloWorld
        [OperationContract]
        string HelloWorldSoap();

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest, UriTemplate = "HelloWorld")]
        string HelloWorldRest();
        #endregion

        #region WelcomeHome
        [OperationContract]
        string WelcomeHomeSoap(string type);

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest, UriTemplate = "WelcomeHome")]
        string WelcomeHomeRest(string type);
        #endregion

        #region LookingForGroup
        [OperationContract]
        LookingForGroupResponse LookingForGroupSoap(LookingForGroupRequest request);

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest, UriTemplate = "LookingForGroup")]
        LookingForGroupResponse LookingForGroupRest(LookingForGroupRequest request);
        #endregion
    }

    [DataContract]
    public class LookingForGroupRequest
    {
        Guid? _AppToken = null;
        bool _IsApproved = true;
        int _UserId = 0;
        string _Username = String.Empty;

        [DataMember]
        public Guid? AppToken
        {
            get { return _AppToken; }
            set { _AppToken = value; }
        }

        [DataMember]
        public bool IsApproved
        {
            get { return _IsApproved; }
            set { _IsApproved = value; }
        }

        [DataMember]
        public int UserId
        {
            get { return _UserId; }
            set { _UserId = value; }
        }

        [DataMember]
        public string Username
        {
            get { return _Username; }
            set { _Username = value; }
        }
    }

    [DataContract]
    public class LookingForGroupResponse
    {
        string _Message = String.Empty;

        [DataMember]
        public string Message
        {
            get { return _Message; }
            set { _Message = value; }
        }
    }
}
