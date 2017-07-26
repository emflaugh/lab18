var app = angular.module('weatherApp');

app.controller('outputCtrl', function($scope, weatherFactory) {

  $scope.finalData = weatherFactory.getWeather();
  console.log($scope.finalData);

})
