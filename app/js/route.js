var module = angular.module("collash", ['ngResource', 'ngRoute']);

module.config(["$routeProvider", function($routeProvider) {

    "use strict";

    $routeProvider.
        when("/home", {
            templateUrl: "templates/home/home.html",
            controller: "HomeController"
        }).when("/main", {
            templateUrl: "templates/main/main.html",
            controller: "MainController"
        }).when("/connect", {
            templateUrl: "templates/connect/connect-search.html",
            controller: "ConnectController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);
