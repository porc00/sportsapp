'use strict';

angular.module('sportsApp')
    .controller('MyBoxCtrl', function($scope, $ionicHistory, $stateParams) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };
    });