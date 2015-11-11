'use strict'

angular.module('sportsApp')
    .directive('nav', function($state) {
        return {
            restrict: 'AE',
            templateUrl: 'client/components/nav/nav.view.ng.html',
            replace: true,
            link: function(scope, elem, attrs) {
                scope.getState = function() {
                    return $state.current.name;
                };
                scope.isIos = ionic.Platform.platform() == 'ios';
            }
        };
    });