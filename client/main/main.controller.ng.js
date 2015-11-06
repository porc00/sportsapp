'use strict'

angular.module('sportsApp')
    .controller('MainCtrl', function($scope, $meteor, $state, $ionicScrollDelegate, $rootScope, $ionicModal) {

        $scope.filterType = function(type) {
            var unbindRootScope = $rootScope.$emit('filter', type);
        }
        //falta unbind on destroy

        $ionicModal.fromTemplateUrl('client/main/map/marker-detail-modal.view.ng.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal
        })


    });