angular.module('MainCtrl', []).
    controller('MainController', ['$scope','$http',function($scope,$http) {

	$scope.tagline = 'To the moon and back!';
    $scope.chartObj; // this will contain a reference to the highcharts' chart object
    $http.get("charts/basicAreaChart.json").success(function(data) {
        $scope.basicAreaChart = data;
        });

}]);