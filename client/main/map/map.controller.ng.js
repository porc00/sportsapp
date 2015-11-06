'use strict'

angular.module('sportsApp')
    .controller('MapCtrl', function($scope, $rootScope, activityService) {
        $scope.markers = [];
        var activities = activityService.getActivities();

        var unbind = $rootScope.$on('filter', function(evt, type) {

            console.log('are you there')

            activities = activityService.getActivities();
            if (type) {
                activities = activities.filter(function(actv) {
                    return actv.type == type;
                });
            }
            loadMap($scope, activities);
        });

        loadMap($scope, activities);
        $scope.$on('$destroy', unbind);
    });


function loadMap($scope, activities) {
    var mapOptions = {
        center: {
            lat: -27.593500,
            lng: -48.593500
        },
        zoom: 16
    };

    if (!$scope.map) {
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;
    } else {
        $scope.markers.forEach(function(marker) {
            marker.setMap(null);
        });
        $scope.markers = [];
    }

    activities.forEach(function(actv) {

        var marker = new google.maps.Marker({
            position: actv.position,
            icon: actv.icon
        });

        marker.addListener('click', function() {
            $scope.modal.show();
        });

        var googleMarker = new google.maps.Marker(marker);
        googleMarker.setMap($scope.map);

        $scope.markers.push(googleMarker);
    });
}