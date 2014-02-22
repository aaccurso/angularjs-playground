'use strict';

angular.module('globalAlertsApp')
.directive( 'whenActive', function ( $location ) {
  return {
    scope: true,
    link: function ( scope, element, attrs ) {
      scope.$on( '$routeChangeSuccess', function () {
        if ( '#' + $location.path() === element.find('a').attr( 'href' ) ) {
            element.addClass( 'active' );
        } else {
            element.removeClass( 'active' );
        }
      });
    }
  };
});