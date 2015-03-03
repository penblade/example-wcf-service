using System.Collections.Generic;
using System.Web;

namespace PenBlade.Example.Service.Repository
{
    public class CORSRepository
    {
        // This is the namespace that will be used in the WSDL and used by all Xml requests.
        public const string Namespace = "http://www.penblade.com/example/service/";

        // Define the constant whitelist origin names for the purposes of reducing hard coded strings for the whitelist examples and allowed access check for all domains.
        // Domains on the web are entered like the localhost example such as http://www.example.com.
        private const string OriginAllowAll = "*";
        private const string OriginLocalhost = "http://localhost";
        private const string OriginLocalFile = "null";

        // Define the list of web sites allowed to access this web service.  The following examples are defined for clarification for local testing.
        // Use All for your initial test and then narrow down to just your localhost or files opened such as by double-clicking on an html file.
        public List<string> WhiteListAll = new List<string>() { OriginAllowAll }; // All web sites
        public List<string> WhiteListLocalhost = new List<string>() { OriginLocalhost }; // Only the localhost
        public List<string> WhiteListLocalFile = new List<string>() { OriginLocalFile }; // Only local files (file:///)
        public List<string> WhiteListLocalhostAndLocalFile = new List<string>() { OriginLocalhost, OriginLocalFile }; // localhost and local files (file:///)

        public void ProcessCORS(HttpApplication sender, List<string> whitelist)
        {
            // Get the origin from the sender of the request.
            var origin = GetOriginFromSender(sender);

            // Do not allow access if the origin is not in the white list.
            if (IsOriginAllowedAccess(origin, whitelist))
            {
                AddHeadersForCORS(sender.Context, origin);
            }
        }

        private string GetOriginFromSender(HttpApplication sender)
        {
            // Get the domain origin.
            return sender.Context.Request.Headers.Get("Origin");
        }

        private bool IsOriginAllowedAccess(string origin, List<string> originWhiteList)
        {
            // If the origin was not defined or the white list does not specify all sites and the origin is not in the whitelist, then do not allow any options.
            return origin != null && (originWhiteList.Contains(OriginAllowAll) || originWhiteList.Contains(origin));
        }

        private void AddHeadersForCORS(HttpContext context, string origin)
        {
            // Add the allowed origin to the header.  Only one origin can be defined per request.
            context.Response.AddHeader("Access-Control-Allow-Origin", origin);

            // Return the allowed options when a browser requests options to satisfy Cross-Origin Resource Sharing (CORS) requests.
            if (context.Request.HttpMethod == "OPTIONS")
            {
                context.Response.AddHeader("Cache-Control", "no-cache");
                context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
                context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
                context.Response.AddHeader("Access-Control-Max-Age", "1728000");
                context.Response.End();
            }
        }
    }
}