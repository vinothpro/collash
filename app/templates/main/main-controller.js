"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.userName = "John";
    $scope.userMenu = "search";
    $scope.changePass = false;
    $scope.tab = "account";
    $scope.searchText = "";
    $scope.cardView = false;

    $scope.closeToggler = function() {
        $scope.footerMenu = "";
    }

    $scope.resetPassword = function() {
        $scope.changePass = false;
    }

    $scope.closeToggler();
}]);
