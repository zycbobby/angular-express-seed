'use strict';

angular.module('myApp.services').
    factory('problemService', ['$http', function ($http) {
        return $http({
            method: 'GET',
            url: '/api/problems'
        });
    }]);
