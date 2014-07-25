'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'ngRoute'
]).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/problems', {
                templateUrl: 'partials/problems',
                controller: 'problemCtrl'
            }).
            when('/welcome', {
                templateUrl: 'partials/welcome',
                controller: 'welcomeCtrl'
            }).
            otherwise({
                redirectTo: '/welcome'
            });

        $locationProvider.html5Mode(true);
    });
