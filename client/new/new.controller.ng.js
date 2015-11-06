'use strict';

angular.module('sportsApp')
    .controller('NewCtrl', function($scope, $ionicHistory, $stateParams) {
        $scope.formType = $stateParams.formType;
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };


        var mapOptions = {
            center: {
                lat: -27.593500,
                lng: -48.593500
            },
            zoom: 16
        };

        if (!$scope.map) {
            var map = new google.maps.Map(document.getElementById("map-rental"), mapOptions);
        }

        $scope.map = map;
    });