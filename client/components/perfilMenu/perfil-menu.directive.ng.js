'use strict';

angular.module('sportsApp')
    .directive('perfilMenu', ['$state', '$ionicSideMenuDelegate',
        function($state, $ionicSideMenuDelegate) {
            return {
                restrict: 'EA',
                templateUrl: 'client/components/perfilMenu/perfil-menu.view.ng.html',
                replace: true,
                link: function(scope, elem, attrs) {
                    scope.goTo = function(path) {
                        console.log("tolog");
                        $state.go(path);
                    };

                }
            };
        }
    ]);