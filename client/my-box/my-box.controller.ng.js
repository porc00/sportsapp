'use strict';

angular.module('sportsApp')
    .controller('MyBoxCtrl', function($scope, $ionicHistory, $ionicPopup, $stateParams) {
        $scope.goBack = function() {
            $ionicHistory.goBack();
        };

        $scope.$on('$ionicView.enter', function() {
            // code to run each time view is entered
            if ($stateParams.showConfirm) {
                $ionicPopup.alert({
                    cssClass: "confirm-dialog",
                    template: 'Your request has been sent to the Listing Owner and will be available for payment as soon as he accepts it. Meanwhile you can use the chat to contact him.',
                    buttons: [{
                        text: 'OK',
                        type: 'button-dialog'
                    }]
                });
            }
        });
    });