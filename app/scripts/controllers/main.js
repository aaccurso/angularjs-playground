'use strict';

angular.module('globalAlertsApp')
  .controller('MainCtrl', function ($scope, $rootScope, eventService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.publishInfo = function () {
    	var alert = {
      		type: 'alert-info',
      		text: 'This is some informational alert.'
      	};
    	eventService.publish('eventAlert', alert);
    };

    $scope.publishError = function () {
    	var alert = {
      		type: 'alert-danger',
      		text: 'This is some dangerous event alert.'
      	};
      eventService.publish('eventAlert', alert);
    };
  });
