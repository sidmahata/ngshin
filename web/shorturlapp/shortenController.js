(function(){

    var app = angular.module("shorturlApp");

    var shortenController = function($scope, $http, $location){

        var onUserLoadComplete = function(response){
            $scope.shorturl = response.data;
            $scope.error = null;
            $scope.shorturl_loader = false;
        };

        var onError = function(response){
            $scope.error = "Could not fetch data";
            $scope.shorturl_loader = false;
        };

        $scope.shorten = function(){
            $http.post("http://localhost/shin/web/app_dev.php/api/urls", $scope.urlentry)
                .then(onUserLoadComplete, onError);
            $scope.shorturl_loader = true;
        };

//        $scope.shorten = function(){
//            $http.get("https://api.github.com/users/sidmahata")
//                .then(onUserLoadComplete, onError);
//        };



        $scope.message = "hello world , Its working";
        $scope.isAdvancedFormOpen = false;
        $scope.locationHost = $location.host();
        $scope.shorturl_loader = false;

    };

    app.controller("shortenController", ["$scope", "$http", "$location", shortenController]);

}());