var module = angular.module("collash", []);

module.config(["$routeProvider", function($routeProvider) {

    "use strict";

    $routeProvider.
        when("/home", {
            templateUrl: "templates/home/home.html",
            controller: "HomeController"
        }).when("/main", {
            templateUrl: "templates/main/main.html",
            controller: "MainController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);
