'use strict';

angular.module('sportsApp')

.config(function($urlRouterProvider, $locationProvider, $ionicConfigProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $ionicConfigProvider.tabs.position('bottom');
});