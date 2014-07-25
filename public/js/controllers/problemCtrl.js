'use strict';

angular.module('myApp.controllers').
    controller('problemCtrl', function ($scope, $http, problemService) {

        problemService.success(function(data, status, headers, config) {
            debugger;
        });

    });