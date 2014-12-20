'use strict';

angular.module('holdemHandReplayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('handPlayerCUI', {
        url: '/handPlayerCUI',
        templateUrl: 'app/handPlayerCUI/handPlayerCUI.html',
        controller: 'HandPlayerCUICtrl'
      });
  });