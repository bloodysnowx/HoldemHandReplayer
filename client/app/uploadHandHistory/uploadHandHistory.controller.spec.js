'use strict';

describe('Controller: UploadHandHistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('holdemHandReplayerApp'));

  var UploadHandHistoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadHandHistoryCtrl = $controller('UploadHandHistoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
