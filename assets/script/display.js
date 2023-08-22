function slide_display(index) {
	console.log("slide_display " + index);
	var i;
	var slides = document.getElementsByClassName("slide");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
  var overlay = document.getElementById("div_overlay");
  overlay.style.display = "block";
	var overlay_image = document.getElementById("div_overlay_image_"+index);
	overlay_image.style.display = "block";
}
function slide_undisplay(i) {
	var i;
	var slides = document.getElementsByClassName("overlay_img");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	var overlay = document.getElementById("div_overlay");
	overlay.style.display = "none";
}
