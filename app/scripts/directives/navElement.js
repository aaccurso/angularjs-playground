'use strict';

angular.module('angularPlayground')
.directive( 'navElement', function ( $location ) {
  return {
    scope: { href: '@href', title: '@title' },
    template: '<a ng-href="#{{href}}">{{title}}</a>',
    link: function ( scope, element, attrs ) {
      scope.$on( '$routeChangeSuccess', function () {
        if ( $location.path() === scope.href ) {
            element.addClass( 'active' );
        } else {
            element.removeClass( 'active' );
        }
      });
    }
  };
});