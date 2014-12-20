'use strict';

describe('Controller: HandPlayerCUICtrl', function () {

  // load the controller's module
  beforeEach(module('holdemHandReplayerApp'));

  var HandPlayerCUICtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HandPlayerCUICtrl = $controller('HandPlayerCUICtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
