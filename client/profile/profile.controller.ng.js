'use strict'

angular.module('sportsApp')
    .controller('ProfileCtrl', function($scope, $state) {
        $scope.goTo = function(path) {
            $state.go(path);
        };

        var mapOptions = {
            center: {
                lat: -27.593500,
                lng: -48.593500
            },
            zoom: 16,
            disableDefaultUI: true
        };


        if ($state.current.name == "professionalProfile") {
            if (!$scope.map) {
                var map = new google.maps.Map(document.getElementById("map-profile"), mapOptions);
            }
            $scope.map = map;
        }
    });