
(function(){
    var app = angular.module('shorturlApp', ['ui.router']).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
        });

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'http://localhost/shin/web/shorturlapp/home.html',
                controller : 'homeController'
            })
            .state('home.shorten', {
                url: '/shorten',
                templateUrl: 'http://localhost/shin/web/shorturlapp/shorten.html',
                controller : "shortenController"
            });

    });

}());