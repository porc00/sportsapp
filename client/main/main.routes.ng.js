'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('scaffold', {
                abstract: true,
                templateUrl: "client/main/main.view.ng.html",
                controller: "MainCtrl"
            })
            .state('main-map', {
                parent: 'scaffold',
                url: '/map',
                views: {
                    'main-content': {
                        templateUrl: 'client/main/map/map.view.ng.html',
                        controller: 'MapCtrl'
                    }
                }
            })
            .state('main-list', {
                parent: 'scaffold',
                url: '/list',
                views: {
                    'main-content': {
                        templateUrl: 'client/main/activity/list.view.ng.html',
                        controller: 'ListCtrl'
                    }
                }
            })

    });