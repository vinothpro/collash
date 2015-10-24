"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.userMenu = "search";
    $scope.changePass = false;
    $scope.tab = "account";

    $scope.closeToggler = function() {
        $scope.footerMenu = "";
    }

    $scope.resetPassword = function() {
        $scope.changePass = false;
    }

    $scope.closeToggler();
}]);
