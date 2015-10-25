"use strict";

module.controller("MainController", ["$scope", function($scope) {
    $scope.page = "main";
    $scope.menu = "search";
    $scope.userName = "John";
    $scope.changePass = false;
    $scope.tab = "account";
    $scope.searchText = "";
    $scope.cardView = false;
    $scope.plus = false;
    $scope.mouse = false;
    $scope.overlay = "";


    $scope.navigateMenu = function(menu) {
        $scope.menu = menu;
    }

    $scope.closeToggler = function() {
        $scope.menu = "search";
    }

    $scope.closeOverlay = function() {
        $scope.overlay = "";
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
    $scope.$watch('overlay', function(oldValue, newValue) {
        console.log(oldValue, newValue)
    });
}]);
