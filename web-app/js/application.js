var app = angular.module("firstModule", ["ui.router"]).config(
    function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("user",{
            url:"/",
            templateUrl:"html/userShow.html"
        })


    });