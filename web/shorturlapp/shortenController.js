(function(){

    var app = angular.module("shorturlApp");

    var shortenController = function($scope, $http){

        var onUserLoadComplete = function(response){
            $scope.shorturl = response.data;
        };

        var onError = function(response){
            $scope.error = "Could not fetch data";
        };

        $scope.shorten = function(){
            $http.post("http://localhost/shin/web/app_dev.php/api/urls", $scope.urlentry)
                .then(onUserLoadComplete, onError);
        };

        $scope.message = "hello world , Its working";
    };

    app.controller("shortenController", ["$scope", "$http", shortenController]);

}());