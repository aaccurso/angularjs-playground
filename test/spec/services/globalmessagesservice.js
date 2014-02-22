'use strict';

describe('Service: globalMessagesService', function () {

  // load the service's module
  beforeEach(module('globalAlertsApp'));

  // instantiate service
  var globalMessagesService;
  beforeEach(inject(function (_globalMessagesService_) {
    globalMessagesService = _globalMessagesService_;
  }));

  it('should do something', function () {
    expect(!!globalMessagesService).toBe(true);
  });

});
