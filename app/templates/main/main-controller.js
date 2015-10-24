"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.userMenu = "search"
    $scope.tab = "account"

    $scope.closeToggler = function() {
        $scope.footerMenu = "";
    }

    $scope.closeToggler();
}]);
