"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.menu = "search";
    $scope.userName = "John";
    $scope.changePass = false;
    $scope.tab = "account";
    $scope.searchText = "";
    $scope.cardView = false;

    $scope.closeToggler = function() {
        $scope.menu = "search";
    }

    $scope.resetPassword = function() {
        $scope.changePass = false;
    }

    $scope.closeToggler();
}]);
