'use strict'

angular.module('sportsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('mybox', {
                url: '/mybox',
                templateUrl: 'client/my-box/my-box.view.ng.html',
                controller: 'MyBoxCtrl'
            })
            .state('chat', {
                url: '/mybox/chat',
                templateUrl: 'client/my-box/chat.view.ng.html',
                controller: 'MyBoxCtrl'
            })
            .state('calendar', {
                url: '/mybox/calendar',
                templateUrl: 'client/my-box/calendar.view.ng.html',
                controller: 'MyBoxCtrl'
            });
    });