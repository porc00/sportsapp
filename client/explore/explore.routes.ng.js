'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('explore', {
                parent: 'base',
                url: '/explore',
                views: {
                    'main-content': {
                        templateUrl: 'client/explore/explore.view.ng.html',
                        controller: 'ExploreCtrl'
                    }
                }
            });
    });