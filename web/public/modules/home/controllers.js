'use strict';

angular.module('Home')
.controller('HomeController',
	['$scope','$rootScope','AuthenticationService',
	function ($scope,$rootScope,AuthenticationService) {


		var mainApp = $rootScope.firebaseApp;
		console.log(mainApp);
		firebase.database().ref('devices/device'+1+'/status').once('value')
		.then(function(snapshot) {
			console.log(snapshot.val()); 
			$scope.checkboxModel.value1 = snapshot.value;
		});
		firebase.database().ref('devices/device'+2+'/status').once('value')
		.then(function(snapshot) {
			console.log(snapshot.val());  
			$scope.checkboxModel.value2 = snapshot.value;
		});
		firebase.database().ref('devices/device'+3+'/status').once('value')
		.then(function(snapshot) {
			console.log(snapshot.val());  
			$scope.checkboxModel.value3 = snapshot.value;
		});
		firebase.database().ref('devices/device'+4+'/status').once('value')
		.then(function(snapshot) {
			console.log(snapshot.val());  
			$scope.checkboxModel.value4 = snapshot.value;
		});
		$scope.checkboxModel= {
			value1 : false,
			value2 : false
		};
		$scope.checkbox1Clicked = function (){
			updateDevice(1,$scope.checkboxModel.value1);

		}
		$scope.checkbox2Clicked = function (){
			updateDevice(2,$scope.checkboxModel.value2);

		}
		$scope.checkbox3Clicked = function (){
			updateDevice(3,$scope.checkboxModel.value3);

		}
		$scope.checkbox4Clicked = function (){
			updateDevice(4,$scope.checkboxModel.value4);

		}
		function updateDevice(id,val){
			try{
				firebase.database().ref('/devices/device' + id + '/status').set({
					on:val
				});
			}catch(exception){
				console.log(exception)
			}
		}
	}]);