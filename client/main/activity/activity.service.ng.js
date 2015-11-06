'use strict';

angular.module('sportsApp')
    .factory('activityService', function() {


        var activities = [{
            name: "Al Merrick",
            distance: "5 Km from you",
            type: "rental",
            position: {
                lat: -27.598050,
                lng: -48.593500
            },
            icon: 'favicon.ico'

        }, {
            name: "Wind Surf Class",
            distance: "5 Km from you",
            type: "class",
            position: {
                lat: -27.593500,
                lng: -48.598000
            },
            icon: 'surf.png'
        }, {
            name: "Mavericks",
            distance: "5 Km from you",
            type: "spot",
            position: {
                lat: -27.595500,
                lng: -48.593500
            },
            icon: 'surf.png'
        }, {
            name: "Surfing class",
            distance: "5 Km from you",
            type: "class",
            position: {
                lat: -27.594000,
                lng: -48.593500
            },
            icon: 'surf.png'
        }];

        // Public API
        return {
            getActivities: function() {
                return activities;
            }
        };
    });