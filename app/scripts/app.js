'use strict';

angular.module('angularPlayground', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'checklist-model'
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
    .when('/checklist', {
      templateUrl: 'views/checklist.html',
      controller: 'ChecklistCtrl'
    })
    .when('/notFound', {
      templateUrl: '404.html'
    })
    .otherwise({
      redirectTo: '/notFound'
    });
});
