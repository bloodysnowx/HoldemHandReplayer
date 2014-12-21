'use strict';

describe('Controller: StatisticsListCtrl', function () {

  // load the controller's module
  beforeEach(module('holdemHandReplayerApp'));

  var StatisticsListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatisticsListCtrl = $controller('StatisticsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
