'use strict';

angular.module('sportsApp')
    .directive('activity', function() {
        return {
            restrict: 'EA',
            templateUrl: 'client/main/activity/activity.view.ng.html',
            replace: true

        };
    });

angular.module('sportsApp')
    .directive('activityList', function() {
        return {
            restrict: 'EA',
            templateUrl: 'client/main/activity/list.view.ng.html',
            replace: true
        };
    });