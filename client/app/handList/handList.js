'use strict';

angular.module('holdemHandReplayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('handList', {
        url: '/handList',
        templateUrl: 'app/handList/handList.html',
        controller: 'HandListCtrl'
      });
  });