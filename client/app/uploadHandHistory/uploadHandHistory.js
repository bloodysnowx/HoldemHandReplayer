'use strict';

angular.module('holdemHandReplayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('uploadHandHistory', {
        url: '/uploadHandHistory',
        templateUrl: 'app/uploadHandHistory/uploadHandHistory.html',
        controller: 'UploadHandHistoryCtrl'
      });
  });