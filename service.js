var app = angular.module('weatherApp');

app.factory('weatherFactory', function($http) {

  var finalData = [];

  return {
    setWeather: setWeather,
    getWeather: getWeather
  };

    function setWeather(userLat, userLong) {
      var p = $http({
        method: 'GET',
        url: 'https://simple-weather.p.mashape.com/weather',
        headers: {
          'X-Mashape-Key': 'QkihKpadnhmshOMCO0GPfGqmCMTBp17slh5jsnjyJp8KMN99IN',
          'Accept': 'text/plain'
        }
      }).then(function successfulCallback(result) {
        console.log(result.status, result.headers, result.body);
        finalData = result.headers;
      });
      return p;
    };

    function getWeather() {
      return finalData;
    };






//closure for weatherFactory
});
