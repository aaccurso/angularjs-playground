'use strict';

describe('Directive: globalMessages', function () {

  // load the directive's module
  beforeEach(module('globalAlertsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<global-messages></global-messages>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the globalMessages directive');
  }));
});
