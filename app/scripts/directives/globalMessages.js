'use strict';

angular.module('angularPlayground')
  .directive('globalMessages', function (eventService) {
    return {
      templateUrl: 'views/globalMessages.html',
      scope: true,
      restrict: 'E',
      link: function (scope, element, attrs) {
      	// TODO: make a queue of alerts
      	scope.alert = {};

      	scope.dismiss = function (mode) {
      		element.fadeOut( mode || 200 );
      	};

      	// Hide message on route change success
      	scope.$on( '$routeChangeSuccess', function () {
      		scope.dismiss(100);
      	});

      	// Subscribe to eventAlert
      	eventService.subscribe('eventAlert', function(alert){
    			scope.alert = alert || {};
    			// Fade in new message
    			alert && element.fadeIn('fast');
      	});
      }
    };
  });
