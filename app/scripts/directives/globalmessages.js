'use strict';

angular.module('globalAlertsApp')
  .directive('globalMessages', function () {
    return {
      template: '<div class="alert-wrapper" ng-show="alert.text">'
      		+ '<div class="alert alert-float alert-dismissable {{alert.type}}">'
      			+ '<button type="button" class="close" ng-click="dismiss()">&times;</button>'
      			+ '{{alert.text}}'
      		+ '</div>'
      	+ '</div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
      	scope.alert = {};
      	// scope.alert = {
      	// 	type: 'alert-info',
      	// 	text: 'Test alert.'
      	// };

      	scope.dismiss = function () {
      		scope.alert = {};
      	}

      	scope.$on('event:alert-message', function())
      }
    };
  });
