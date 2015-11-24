
(function(){
    var app = angular.module('shorturlApp', ['ui.router']).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
        });

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home/dashboard');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'http://localhost/ngshin/web/shorturlapp/home.html',
                controller : 'homeController'
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'http://localhost/ngshin/web/shorturlapp/dashboard.html',
                controller : 'dashboardController'
            })
            .state('home.shorten', {
                url: '/shorten',
                templateUrl: 'http://localhost/ngshin/web/shorturlapp/shorten.html',
                controller : "shortenController"
            });

    });

}());