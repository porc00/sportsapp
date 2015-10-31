'use strict';

angular.module('sportsApp')
.directive('perfilMenu', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/perfilMenu/perfil-menu.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'perfilMenu';
    }
  };
});