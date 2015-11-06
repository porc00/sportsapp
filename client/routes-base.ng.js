'use strict';

angular.module('sportsApp')

.config(function($urlRouterProvider, $locationProvider, $ionicConfigProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/map');
    $ionicConfigProvider.tabs.position('bottom');
});