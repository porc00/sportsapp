'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('mybox', {
                parent: 'base',
                url: '/mybox?showConfirm',
                views: {
                    'main-content': {
                        templateUrl: 'client/my-box/my-box.view.ng.html',
                        controller: 'MyBoxCtrl'
                    }
                }
            })
            .state('chat', {
                parent: 'base',
                url: '/mybox/chat',
                views: {
                    'main-content': {
                        templateUrl: 'client/my-box/chat.view.ng.html',
                        controller: 'MyBoxCtrl'
                    }
                }
            })
            .state('calendar', {
                parent: 'base',
                url: '/mybox/calendar',
                views: {
                    'main-content': {
                        templateUrl: 'client/my-box/calendar.view.ng.html',
                        controller: 'MyBoxCtrl'
                    }
                }
            })
    });