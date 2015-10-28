'use strict'

angular.module('sportsApp')
    .controller('MainCtrl', function($scope, $meteor, $ionicScrollDelegate) {
        var mapOptions = {
            center: {
                lat: -27.593500,
                lng: -48.593500
            },
            zoom: 16
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;
    });