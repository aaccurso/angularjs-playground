'use strict';

angular.module('globalAlertsApp')
  .factory('eventService', function () {
  var cache = {}, eventService = {};

  eventService.subscribe = function(topic, callback) {
    // Cache the event if it's not already cached
    if (!cache[topic]) {
      cache[topic] = [];
    }
    // Add callback associated with the event
    cache[topic].push(callback);
    return [topic, callback];
  };
  eventService.unsubscribe = function(topic, callback) {
    var callbackCount;
    if (cache[topic]) {
      callbackCount = cache[topic].length;
      while (callbackCount--) {
        if (cache[topic][callbackCount] === callback) {
          cache[topic].splice(callbackCount, 1);
        }
      }
    }
    return;
  };
  eventService.publish = function(topic) {
    var callbackCount, event, res;
    event = cache[topic];
    if (event && event.length > 0) {
      callbackCount = event.length;
      while (callbackCount--) {
        if (event[callbackCount]) {
          res = event[callbackCount].apply({}, Array.prototype.slice.call(arguments, 1));
        }
      }
      eventService.publish(topic + "_done");
      return res;
    }
  };
  return eventService;
});