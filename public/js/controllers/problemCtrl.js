'use strict';

angular.module('myApp.controllers').
    controller('problemCtrl', function ($scope, $http, problemService) {

        problemService.success(function(data, status, headers, config) {
            $scope.data = data;
        });

        $scope.loadMoreProblems = function() {
            console.log("Load more problems");
        }

        $scope.focusCls = 'focus-doc';

    });