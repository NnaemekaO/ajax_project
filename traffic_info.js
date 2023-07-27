// JavaScript source code
//retrieves data from city of calgary
var xhr = new XMLHttpRequest();
var r;//global variable-parsed data
window.onload=loaddata;

function loaddata() {
	document.getElementById("incident_information").addEventListener("keyup",function(){display_incident_info(this.value);},true);
	document.getElementById("desc").addEventListener("keyup",function(){display_traffic_description(this.value);},true);
	document.getElementById("city_quadrant").addEventListener("keyup",function(){display_city_quadrant(this.value);},true);
	
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			 r = JSON.parse(xhr.responseText);
			//displayData(xhr);//display data
		}
	};
	xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
	xhr.send();
}


function display_incident_info(incident_info) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Incident Information </h2>";
	// var search=document.getElementById("incident_info").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.incident_info.startsWith(incident_info)) {
			
		output+="incident_info: "
		output += obj.incident_info;
		output += "<br>";
		output+="description: "
		output += obj.description;
		output += "<br>";
		output+="quadrant: "
		output += obj.quadrant;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_traffic_description(description) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Incident Description</h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.description.startsWith(description)) {
			
		output+="incident_info: "
		output += obj.incident_info;
		output += "<br>";
		output+="description: "
		output += obj.description;
		output += "<br>";
		output+="quadrant: "
		output += obj.quadrant;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_city_quadrant(quadrant) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Quadrant of Occurance</h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.quadrant.startsWith(quadrant)) {
			
		output+="incident_info: "
		output += obj.incident_info;
		output += "<br>";
		output+="description: "
		output += obj.description;
		output += "<br>";
		output+="quadrant: "
		output += obj.quadrant;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}