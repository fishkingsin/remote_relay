'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        var config = {
            apiKey: "AIzaSyCmeWkrbTuBEfHU5ZH90mSo0vwvh6z111I",
            authDomain: "myfirstapp-455ad.firebaseapp.com",
            databaseURL: "https://myfirstapp-455ad.firebaseio.com",
            storageBucket: "myfirstapp-455ad.appspot.com",
            messagingSenderId: "393073173175"
        };
        var f = firebase.initializeApp(config);
        $scope.login = function () {
            $scope.dataLoading = true;
            var user = firebase.auth()
            .signInWithEmailAndPassword($scope.username, $scope.password)
            .catch(function(error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                $scope.error = errorMessage;
                $scope.dataLoading = false;
            });
            if(user!=null){
                AuthenticationService.SetCredentials(user.email, user.auth_token);
                $rootScope.firebaseApp = f;
                $location.path('/');
            }
            
        };
    }]);