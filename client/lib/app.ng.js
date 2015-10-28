angular.module('sportsApp', [
    'angular-meteor',
    'ionic'

]);

onReady = function() {
    angular.bootstrap(document, ['sportsApp']);
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}