export class Common {

    public static CITYAPIURL: "http://localhost:3000/api/GetCities";
    public static COUNTRYAPIURL: "http://localhost:3000/api/GetCountries";
    public static HOTELSEARCHAPI = "http://localhost:3000/api/HotelSearch";

    //Common Functions
    public static getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
    };    
};