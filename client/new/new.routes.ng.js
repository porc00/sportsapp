'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/new/:formType',
                templateUrl: 'client/new/new.view.ng.html',
                controller: 'NewCtrl'
            });
    });