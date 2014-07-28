'use strict';

/* Directives */

angular.module('myApp.directives', [])
    .directive('appVersion', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    })
    .directive('problem', function () {
        return {
            restrict: 'E',
            scope : {},
            controller : function($scope) {

            },
            templateUrl : 'template/problem.tpl.html'
        }
    })
    .directive('superman', function() {
        return {
            restrict: 'A',
            link : function() {
                alert("this is a function");
            }
        }
    })
    .directive('enter', function() {
        return function(scope, element, attrs) {
            //element.addClass(attrs.enter);
            element.bind("mouseenter", function() {
                // element actually is a jq element
                element.find('div').addClass(attrs.enter);
                scope.$apply(attrs.call);
            });
            element.bind("mouseleave", function() {
                jQuery(element.find('div')[0]).removeClass(attrs.enter);
            });
        };
    });

