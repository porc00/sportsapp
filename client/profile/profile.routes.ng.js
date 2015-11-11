'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('personProfile', {
                parent: 'base-footer',
                url: '/profile/person',
                views: {
                    'main-content': {
                        templateUrl: 'client/profile/profile.view.ng.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })
            .state('professionalProfile', {
                parent: 'base-footer',
                url: '/profile/professional',
                views: {
                    'main-content': {
                        templateUrl: 'client/profile/professionalProfile.view.ng.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })
    });