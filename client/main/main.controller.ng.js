'use strict'

angular.module('sportsApp')
    .controller('MainCtrl', function($scope, $meteor, $state, $ionicScrollDelegate, $rootScope, $ionicModal) {

        $scope.filterType = function(type) {
            var unbindRootScope = $rootScope.$emit('filter', type);
        }
        //falta unbind on destroy

        $scope.$on('$ionicView.enter', function() {
            console.log('tolog')

            $scope.showTabs = $state.current.parent.indexOf("tabs") != -1;
            $scope.showFooter = $state.current.parent.indexOf("footer") != -1;
        });
    });