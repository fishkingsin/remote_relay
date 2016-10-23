

angular.module('main', [])
.controller('controller', ['$scope', function($scope) {

	
	
	var config = {
		apiKey: "AIzaSyCmeWkrbTuBEfHU5ZH90mSo0vwvh6z111I",
		authDomain: "myfirstapp-455ad.firebaseapp.com",
		databaseURL: "https://myfirstapp-455ad.firebaseio.com",
		storageBucket: "myfirstapp-455ad.appspot.com",
		messagingSenderId: "393073173175"
	};
	var mainApp = firebase.initializeApp(config);
	
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
		value1 : true,
		value2 : 'YES'
	};
	$scope.checkboxClicked = function (){
		try{
			firebase.database().ref()
			.update({
				'devices':
				{
					'device1':
					{
						'status':$scope.checkboxModel.value1
					},
					'device2':
					{
						'status':$scope.checkboxModel.value2
					},
					'device3':
					{
						'status':$scope.checkboxModel.value3
					},
					'device4':
					{
						'status':$scope.checkboxModel.value4
					},
				} 
			});
		}catch(exception){
			console.log(exception)
		}

	}

}])
