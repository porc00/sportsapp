'use strict'

angular.module('sportsApp')
    .controller('MainCtrl', function($scope, $meteor, $ionicScrollDelegate, $ionicModal) {

        $ionicModal.fromTemplateUrl('client/main/marker-detail-modal.view.ng.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal
        })
        var mapOptions = {
            center: {
                lat: -27.593500,
                lng: -48.593500
            },
            zoom: 16
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;

        var marker = new google.maps.Marker({
            position: {
                lat: -27.593500,
                lng: -48.593500
            },
            icon: 'surf.png'
        });

        marker.addListener('click', function() {
            $scope.modal.show();
        });

        var googleMarker = new google.maps.Marker(marker);
        googleMarker.setMap(map);
    });