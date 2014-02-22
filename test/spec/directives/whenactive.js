'use strict';

describe('Directive: whenActive', function () {

  // load the directive's module
  beforeEach(module('globalAlertsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<when-active></when-active>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the whenActive directive');
  }));
});
