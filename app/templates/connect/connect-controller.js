"use strict";

module.controller("ConnectController", ["$scope", function($scope) {

    $scope.closeOverlay = function() {
        console.log("fsdfsdfsdfsdfsf")
        $scope.overlay = "";
    }
    $scope.closeOverlay();
}]);
