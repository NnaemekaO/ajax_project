// JavaScript source code
//retrieves data from city of calgary
var xhr = new XMLHttpRequest();
var r;//global variable-parsed data
window.onload=loaddata;

function loaddata() {
	document.getElementById("sector").addEventListener("keyup",function(){display_sector_data(this.value);},true);
	document.getElementById("community_name").addEventListener("keyup",function(){display_community_name_data(this.value);},true);
	document.getElementById("category").addEventListener("keyup",function(){display_category_data(this.value);},true);
	
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			 r = JSON.parse(xhr.responseText);
			//displayData(xhr);//display data
		}
	};
	xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
	xhr.send();
}


function display_sector_data(sector) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Crime data </h2>";
	// var search=document.getElementById("sector").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.sector.startsWith(sector)) {
			
		output+="sector: "
		output += obj.sector;
		output += "<br>";
		output+="community_name: "
		output += obj.community_name;
		output += "<br>";
		output+="group_category: "
		output += obj.group_category;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_community_name_data(community_name) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Crime data by Community name </h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.community_name.startsWith(community_name)) {
			
		output+="sector: "
		output += obj.sector;
		output += "<br>";
		output+="community_name: "
		output += obj.community_name;
		output += "<br>";
		output+="group_category: "
		output += obj.group_category;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_category_data(group_category) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Crime Data by Category </h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.group_category.startsWith(group_category)) {
			
		output+="sector: "
		output += obj.sector;
		output += "<br>";
		output+="community_name: "
		output += obj.community_name;
		output += "<br>";
		output+="group_category: "
		output += obj.group_category;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}