using myApp.Web.Domain;
using myApp.Web.Models.Requests;
using myApp.Web.Services;
using Sabio.Web.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace myApp.Web.Controllers.api
{

    [RoutePrefix("api/latlong")]
    public class LatLongApiController : ApiController
    {

        [Route, HttpPost]
        public HttpResponseMessage Post(LatLongAddRequest model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            try
            {
                ItemsResponse<ReferenceBase> response = new ItemsResponse<ReferenceBase>();
                response.Items = ReferenceService.SelectAll();
                //return Request.CreateResponse(HttpStatusCode.OK, response);

                ItemResponse<RouteNoDistance> response2 = new ItemResponse<RouteNoDistance>();
                response2.Item = LatLongService.GetShortestDistance(model, response);
                response2.Item = TimerService.DaysRemailingBeforeNextSweep(response2.Item);

                return Request.CreateResponse(HttpStatusCode.OK, response2);
            }
            catch (Exception Error)
            {
                ErrorResponse response = new ErrorResponse(Error.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, response);
            }

        }
    }
}

