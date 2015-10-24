"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.userName = "John Doe"

    $scope.closeToggler = function() {
        $scope.footerMenu = "";
    }

    $scope.closeToggler();
}]);
