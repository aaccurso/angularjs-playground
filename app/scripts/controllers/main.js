'use strict';

angular.module('globalAlertsApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.broadcastAlert = function () {
    	var alert = alert = {
      		type: 'alert-info',
      		text: 'Test alert.'
      	};
    	// $rootScope.$emit('event:alert-message', alert);
    }
  });
