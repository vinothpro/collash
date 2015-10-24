"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.userName = "John Doe"
    $scope.footerMenu = "";

    $scope.FooterMenuClick = function(menu) {
        $scope.footerMenu = menu;
    }
    $scope.isEqual = function(x, y) {
        return x === y;
    }
}]);
