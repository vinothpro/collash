"use strict";

module.controller("ConnectController", ["$scope", function($scope) {

    $scope.closeOverlay = function() {
        $scope.overlay = "";
    }
    $scope.closeOverlay();
}]);
