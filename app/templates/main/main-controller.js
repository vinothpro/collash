"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.menu = "search";
    $scope.userName = "John";
    $scope.changePass = false;
    $scope.tab = "account";
    $scope.searchText = "";
    $scope.cardView = false;
    $scope.mouse = false;

    $scope.navigateMenu = function(menu) {
        $scope.menu = menu;
    }

    $scope.closeToggler = function() {
        $scope.menu = "search";
    }

    $scope.resetPassword = function() {
        $scope.changePass = false;
    }

    $scope.showMenu = function() {
        $scope.mouse = !$scope.mouse;
    }

    $scope.closeToggler();

    $scope.$watch('menu', function() {
        console.log($scope.menu)
    });
}]);
