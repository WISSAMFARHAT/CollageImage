using AngryMonkey.CloudMVC;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Website.Controllers;

public class BaseController : CloudController
{
    public override void OnActionExecuting(ActionExecutingContext filterContext)
    {
        if (!Request.Cookies.TryGetValue("TempFolderId", out string value))
        {
            // Create a new cookie with the name "MyCookie" and value "123"
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddHours(1) // Set the expiration date to tomorrow
            };
            Response.Cookies.Append("TempFolderId", Guid.NewGuid().ToString(), cookieOptions);
        }
        base.OnActionExecuting(filterContext);
    }
}

