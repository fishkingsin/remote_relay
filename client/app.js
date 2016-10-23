var gpio = require("gpio");
var firebase = require("firebase");

pinList = [gpio.export(2, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',

   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   interval: 200,

   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
   	pinList[0].set();
   }
}), gpio.export(3, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',
   
   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   interval: 200,
   
   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
   	pinList[1].set();
   }
}), gpio.export(17, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',
   
   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   interval: 200,
   
   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
   	pinList[2].set();
   }
}), gpio.export(22, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',
   
   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   interval: 200,
   
   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
   	pinList[3].set();
   }
})]

firebase.initializeApp({
	serviceAccount: "./MyFirstApp-af1f7fce86e2.json",
	databaseURL: "https://myfirstapp-455ad.firebaseio.com/"
});


// console.log(firebase.database);
// console.log(firebase.auth);

var db = firebase.database();

// Attach an asynchronous callback to read the data at our posts reference
db.ref("devices/device1/status/").on("value", function(snapshot) {
	console.log(snapshot.val());
	setPinValue(0, snapshot.val().on);
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
db.ref("devices/device2/status/").on("value", function(snapshot) {
	console.log(snapshot.val());
	setPinValue(1, snapshot.val().on);
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
db.ref("devices/device3/status/").on("value", function(snapshot) {
	console.log(snapshot.val());
	setPinValue(2, snapshot.val().on);
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
db.ref("devices/device4/status/").on("value", function(snapshot) {
	console.log(snapshot.val());
	setPinValue(3, snapshot.val().on);
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});
function setPinValue(pin , val){
   console.log('pin :'+pin+' val :'+val);
	(val)?pinList[pin].set():pinList[pin].set(0);
}