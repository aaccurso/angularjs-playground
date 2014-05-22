'use strict';
angular.module('angularPlayground')
.controller('ChecklistCtrl', function ($scope) {
  $scope.roles = [{
      id: 1,
      text: 'guest'
  }, {
      id: 2,
      text: 'user'
  }, {
      id: 3,
      text: 'customer'
  }, {
      id: 4,
      text: 'admin'
  }];
  
  $scope.user = {
      roles: [2, 4]
  };
  
  $scope.allToggled = false;
  $scope.toggleCheck = function () {
    $scope.allToggled = !$scope.allToggled;
    ($scope.allToggled ? $scope.checkAll : $scope.uncheckAll)();
  };
  $scope.$watch('user.roles', function(newArr) {
    if ( newArr.length === $scope.roles.length ) {
        $scope.allToggled = true;
        return;
    }
    if ( newArr.length === 0 ) {
        $scope.uncheckAll();
    }
    $scope.allToggled = false;
  }, true);
  $scope.checkAll = function () {
    $scope.user.roles = $scope.roles.map(function (item) {
        return item.id;
    });
  };
  $scope.uncheckAll = function () {
      $scope.user.roles = [];
  };
  $scope.checkFirst = function () {
      $scope.user.roles.splice(0, $scope.user.roles.length);
      $scope.user.roles.push(1);
  };
});