var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("main.json").then(function (response) {
        $scope.myData = response.data.Prerak;
    });
});