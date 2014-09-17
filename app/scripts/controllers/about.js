'use strict';

/**
 * @ngdoc function
 * @name nodejsAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodejsAngularApp
 */
angular.module('nodejsAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
