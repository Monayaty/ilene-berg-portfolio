function openTab(tabName) {
		  var i;
		  var x = document.getElementsByClassName("details");
		  for (i = 0; i < x.length; i++) {
		    x[i].style.display = "none";  
		  }
		  document.getElementById(tabName).style.display = "block";  
		}

function onClickMenu() {
	document.getElementById("menu").classList.toggle("change");
  	var nav = document.getElementById("nav");
  	if (nav.style.display === "block") {
    nav.style.display = "none";
  	} else {
    nav.style.display = "block";
  }
}