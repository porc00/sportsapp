'use strict';

angular.module('sportsApp')
    .factory('activityService', function() {


        var activities = [{
            title: "Al Merrick 6,2",
            desc: "A very fast Surf Board",
            distance: "5 Km from you",
            extras: "Board Cover",
            type: "rental",
            location: {
                lat: -27.598050,
                lng: -48.593500
            },
            icon: 'kite.png',
            image: 'surfboards.jpg'

        }, {
            title: "Wind Surf Class",
            distance: "5 Km from you",
            type: "class",
            location: {
                lat: -27.460645,
                lng: -48.476643
            },
            icon: 'surf.png',
            image: 'school.jpg'
        }, {
            title: "Mavericks",
            distance: "5 Km from you",
            type: "spot",
            location: {
                lat: -27.782178,
                lng: -48.490719
            },
            icon: 'trekking.png',
            image: 'barrel.jpg'
        }, {
            title: "Surfing class",
            distance: "5 Km from you",
            type: "class",
            location: {
                lat: -27.752407,
                lng: -48.561444
            },
            icon: 'bike.png',
            image: 'school.jpg'
        }];

        // Public API
        return {
            getActivities: function() {
                return activities;
            },
            get: function(id) {
                return activities[id];
            }
        };
    });