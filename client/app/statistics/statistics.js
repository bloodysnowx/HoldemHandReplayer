'use strict';

angular.module('holdemHandReplayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('statistics', {
        url: '/statistics',
        templateUrl: 'app/statistics/statistics.html',
        controller: 'StatisticsCtrl'
      });
  });