"use strict";

module.controller("HomeController", ["$scope", function($scope) {
    $scope.page = "home";
    $scope.navigatePage = function(page) {
        if(this.page !== page) {
            this.page = page;
        }
    }
    $scope.submitLogin = function() {

    }
}]);
