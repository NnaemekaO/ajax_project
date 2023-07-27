// JavaScript source code
//retrieves data from city of calgary
var xhr = new XMLHttpRequest();
var r;//global variable-parsed data
window.onload=loaddata;

function loaddata() {
	document.getElementById("cameralocation").addEventListener("keyup",function(){displayData(this.value);},true);
	document.getElementById("quadrant").addEventListener("keyup",function(){revealData(this.value);},true);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			 r = JSON.parse(xhr.responseText);
			//displayData(xhr);//display data
		}
	};
	xhr.open("GET", "https://data.calgary.ca/resource/k7p9-kppz.json", true);
	xhr.send();
}

function displayData(camera_location) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Camera Location </h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
		//comparing parsed data with user input
		if (obj.camera_location.startsWith(camera_location)) {
			
		output+="quadrant: "
		output += obj.quadrant;
		output += "<br>";
		output+="camera_location: "
		output += obj.camera_location;
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function revealData(quadrant) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>City Quadrant </h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
		//comparing parsed data with user input
		if (obj.quadrant.startsWith(quadrant)) {
			
		output+="quadrant: "
		output += obj.quadrant;
		output += "<br>";
		output+="camera_location: "
		output += obj.camera_location;
		
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}