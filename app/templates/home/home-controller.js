"use strict";

module.controller("HomeController", ["$scope", function($scope) {
    $scope.page = "home";
    $scope.navigatePage = function(page) {
        if(this.page !== page) {
            this.page = page;
            var scrollTo = this.page === "login" ? document.querySelector(".link-panel").offsetTop : 0;
            window.scrollTo(0, scrollTo);
        }
    }
    $scope.submitLogin = function() {

    }

    var header = document.querySelector(".fixed-header");
    window.onscroll = function() {
        if(header) {
            if(window.scrollY >= header.offsetTop) {
                document.body.classList.add("landing-fixed-header");
            } else if(window.scrollY < header.offsetTop) {
                document.body.classList.remove("landing-fixed-header");
            }
        }
    }
}]);
