'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('base', {
                abstract: true,
                templateUrl: "client/main/main.view.ng.html",
                controller: "MainCtrl"
            })
            .state('base-tabs', {
                abstract: true,
                templateUrl: "client/main/main.view.ng.html",
                controller: "MainCtrl"
            })
            .state('base-footer', {
                abstract: true,
                templateUrl: "client/main/main.view.ng.html",
                controller: "MainCtrl"
            })
            .state('base-tabs-footer', {
                abstract: true,
                templateUrl: "client/main/main.view.ng.html",
                controller: "MainCtrl"
            })
            .state('main-map', {
                parent: 'base-tabs-footer',
                url: '/map',
                views: {
                    'main-content': {
                        templateUrl: 'client/main/map/map.view.ng.html',
                        controller: 'MapCtrl'
                    }
                }
            })
            .state('main-list', {
                parent: 'base-tabs-footer',
                url: '/list',
                views: {
                    'main-content': {
                        templateUrl: 'client/main/activity/list.view.ng.html',
                        controller: 'ListCtrl'
                    }
                }
            })

    });