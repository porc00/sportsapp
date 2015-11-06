'use strict'

angular.module('sportsApp')
    .controller('ListCtrl', function($scope, $meteor, activityService, $rootScope, $ionicScrollDelegate) {

        $scope.activities = activityService.getActivities();

        var unbind = $rootScope.$on('filter', function(evt, type) {
            var activities = activityService.getActivities();
            if (type) {
                activities = activities.filter(function(actv) {
                    return actv.type == type;
                });
            }
            $scope.activities = activities;
        });

        $scope.$on('$destroy', unbind);
    });