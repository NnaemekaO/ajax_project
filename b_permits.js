// JavaScript source code
//retrieves data from city of calgary
var xhr = new XMLHttpRequest();
var r;//global variable-parsed data
window.onload=loaddata;

function loaddata() {
	document.getElementById("permit_type").addEventListener("keyup",function(){display_permit_type_data(this.value);},true);
	document.getElementById("permit_class_group").addEventListener("keyup",function(){display_permit_class_group_data(this.value);},true);
	document.getElementById("contractor_name").addEventListener("keyup",function(){display_contractor_name_data(this.value);},true);
	
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			 r = JSON.parse(xhr.responseText);
			//displayData(xhr);//display data
		}
	};
	xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
	xhr.send();
}


function display_permit_type_data(permittype) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Categorization by Permit Type </h2>";
	// var search=document.getElementById("permittype").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.permittype.startsWith(permittype)) {
			
		output+="permittype: "
		output += obj.permittype;
		output += "<br>";
		output+="permitclassgroup: "
		output += obj.permitclassgroup;
		output += "<br>";
		output+="contractorname: "
		output += obj.contractorname;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_permit_class_group_data(permitclassgroup) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Categorization by Permit Class Group</h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.permitclassgroup.startsWith(permitclassgroup)) {
			
		output+="permittype: "
		output += obj.permittype;
		output += "<br>";
		output+="permitclassgroup: "
		output += obj.permitclassgroup;
		output += "<br>";
		output+="contractorname: "
		output += obj.contractorname;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}

function display_contractor_name_data(contractorname) {
	//displays json data. 
	//for testing purposes, display only partial data
	//var r = JSON.parse(xhr.responseText);
	var output = "<h2>Categorization by Contractor Name </h2>";
	// var search=document.getElementById("cameralocation").value;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
        console.log(obj);
		//comparing parsed data with user input
		if (obj.contractorname.startsWith(contractorname)) {
			
		output+="permittype: "
		output += obj.permittype;
		output += "<br>";
		output+="permitclassgroup: "
		output += obj.permitclassgroup;
		output += "<br>";
		output+="contractorname: "
		output += obj.contractorname;
		output += "<br>";
		output += "<br>";
		}
	}
	document.getElementById("searchresults").innerHTML = output;
}