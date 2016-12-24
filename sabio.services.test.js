sabio.services.sweep = sabio.services.sweep || {};
//console.log(" loaded sabio.crimes.courses.js");

sabio.services.crimeUrl = "https://data.lacity.org/resource/kh8g-6365.json";
sabio.services.testUrl = "https://data.cityofchicago.org/resource/alternative-fuel-locations.json";
sabio.services.sweepUrl = "https://data.lacity.org/resource/x8i3-2x54.json"
//sabio.services.urlSuffix = "/people/";


sabio.services.sweep.get = function (onAjaxSuccess, onAjaxError) {
    var url = sabio.services.sweepUrl;
    //var url = "/api/parking/";
    var settings = {
        cache: false
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , dataType: "json"
            , success: onAjaxSuccess
            , error: onAjaxError
            , type: "GET"
            , data: {
                "$limit" : 5000,
                "$$app_token" : "GlV1eucwQDqMsnwU6ghFFNFto"
            }
    };

    $.ajax(url, settings);
}


sabio.services.sweep.getByRouteNo = function (route_no, onSuccess, onError) {
    
    var url = sabio.services.sweepUrl + route_no;
    var settings = {
        cache: false
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , dataType: "json"
            , success: onSuccess
            , error: onError
            , type: "GET"
            , data: { "$$app_token": "GlV1eucwQDqMsnwU6ghFFNFto" }
    };

    $.ajax(url, settings);

}



