'use strict';

angular.module('angularPlayground', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/notFound', {
      templateUrl: '404.html'
    })
    .otherwise({
      redirectTo: '/notFound'
    });
});
