'use strict';

angular.module('sportsApp')
    .controller('AboutCtrl', function($scope) {
        $scope.viewName = 'About';

        $scope.currentDate = new Date();
        $scope.minDate = new Date(2105, 6, 1);
        $scope.maxDate = new Date(2015, 6, 31);

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