'use strict';

/**
 * @ngdoc function
 * @name nodejsAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodejsAngularApp
 */
angular.module('nodejsAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
