'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('new', {
                url: '/new/:formType',
                templateUrl: 'client/new/new.view.ng.html',
                controller: 'NewCtrl'
            })
            .state('newSpot', {
                url: '/newSpot/:formType',
                templateUrl: 'client/new/newSpot.view.ng.html',
                controller: 'NewCtrl'
            })
            .state('rental', {
                url: '/rental/:rentalId',
                templateUrl: 'client/new/rental.view.ng.html',
                controller: 'NewCtrl'
            });

    });