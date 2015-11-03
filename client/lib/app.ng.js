angular.module('sportsApp', [
    'angular-meteor',
    'ionic',
    'ng-mfb',
    'ionMdInput',
    'ionic-datepicker'

]);

onReady = function() {
    angular.bootstrap(document, ['sportsApp']);
};

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}