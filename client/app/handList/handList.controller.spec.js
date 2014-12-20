'use strict';

describe('Controller: HandListCtrl', function () {

  // load the controller's module
  beforeEach(module('holdemHandReplayerApp'));

  var HandListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HandListCtrl = $controller('HandListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
