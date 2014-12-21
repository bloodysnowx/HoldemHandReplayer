'use strict';

angular.module('holdemHandReplayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('statisticsList', {
        url: '/statisticsList',
        templateUrl: 'app/statisticsList/statisticsList.html',
        controller: 'StatisticsListCtrl'
      });
  });