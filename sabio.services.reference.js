sabio.services.reference = sabio.services.reference || {};

sabio.services.reference.apiPrefix = "/"

sabio.services.reference.post = function (data, onSuccess, onError) {
    var url = sabio.services.reference.apiPrefix + "api/reference/post";

    var settings = {
        cache: false
        , contentType: "application/json; charset=UTF-8"
        //, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);

}

sabio.services.reference.postLatLong = function (data, onSuccess, onError) {
    var url = sabio.services.reference.apiPrefix + "api/latlong";

    var settings = {
        cache: false
        , contentType: "application/json; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);

}

sabio.services.reference.postPhoneNumber = function (data, onSuccess, onError) {
    var url = sabio.services.reference.apiPrefix + "api/twilio";

    var settings = {
        cache: false
        , contentType: "application/json; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings);

}