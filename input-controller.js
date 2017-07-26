var app = angular.module('weatherApp');

app.controller('inputCtrl', function($scope, $location, weatherFactory) {

  $scope.searchWeather = function(userLat, userLong) {
    console.log(userLat, userLong);
    weatherFactory.setWeather(userLat, userLong).then(function() {
      $location.path('/output');
    });
  };


});
