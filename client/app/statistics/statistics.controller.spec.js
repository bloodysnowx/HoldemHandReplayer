'use strict';

describe('Controller: StatisticsCtrl', function () {

  // load the controller's module
  beforeEach(module('holdemHandReplayerApp'));

  var StatisticsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatisticsCtrl = $controller('StatisticsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
