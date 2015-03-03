using PenBlade.Example.Service.Repository;
using System;
using System.Web;

namespace PenBlade.Example.Service
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var repository = new CORSRepository();
            repository.ProcessCORS((HttpApplication)(sender), repository.WhiteListAll);
        }
    }
}