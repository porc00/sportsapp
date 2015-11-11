'use strict';

angular.module('sportsApp')
    .controller('NewCtrl', function($scope, $ionicHistory, $ionicPopup, $state, $stateParams, activityService) {
        $scope.formType = $stateParams.formType;
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };
        $scope.rental = activityService.get($stateParams.rentalId);



        var mapOptions = {
            center: {
                lat: -27.593500,
                lng: -48.593500
            },
            zoom: 16,
            disableDefaultUI: true
        };

        if (!$scope.map) {
            var map = new google.maps.Map(document.getElementById("map-rental"), mapOptions);
        }

        $scope.map = map;

        $scope.showConfirm = function() {
            $ionicPopup.show({
                title: 'Confirm request for ' + $scope.rental.title,
                cssClass: 'confirm-dialog',
                scope: $scope,
                buttons: [{
                    text: 'CANCEL',
                    type: 'button-dialog'
                }, {
                    text: 'OK',
                    type: 'button-dialog',
                    onTap: function(e) {
                        $state.go("mybox", {
                            showConfirm: true
                        });
                    }
                }]
            });
        };
    });