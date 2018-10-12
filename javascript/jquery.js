/* Universal Code */

/* Menu Import */

$(function(){
  $("#includedMenu").load("./universal/Menu.html"); 
});		

/* Footer Import */

$(function(){ 
  $("#includedFooter").load("./universal/footer.html"); 
});

/* ----------------------------------------------------------------------------------- */

	/* Pages */

$(function(){
  $("#includedSitemap").load("./sitemap.html"); 
});

/* ----------------------------------------------------------------------------------- */

/* AIT - 616 Project Grade 100/100 */

/* HTML Imports */

	/* Index */

$(function(){
  $("#includedP51").load("./project_1-build.html"); 
});

	/* About */

$(function(){
  $("#includedP52").load("./project_2-build.html"); 
});

	/* Directions */

$(function(){
  $("#includedP53").load("./project_3-build.html"); 
});

	/* Game */

$(function(){
  $("#includedP54").load("./project_4-build.html"); 
});

	/* Silver */

$(function(){
  $("#includedP55").load("./project_5-build.html"); 
});

	/* History */

$(function(){
  $("#includedP56").load("./project_6-build.html"); 
});

	/* Cleaning */

$(function(){
  $("#includedP57").load("./project_7-build.html"); 
});

	/* Value */

$(function(){
  $("#includedP58").load("./project_8-build.html"); 
});

	/* Storage */

$(function(){
  $("#includedP59").load("./project_9-build.html"); 
});

	/* Privacy */

$(function(){
  $("#includedP510").load("./project_10-build.html"); 
});

	/* Links */

$(function(){
  $("#includedP511").load("./project_11-build.html"); 
});

	/* Contact */

$(function(){
  $("#includedP512").load("./project_12-build.html"); 
});

	/* FAQ */

$(function(){
  $("#includedP513").load("./project_13-build.html"); 
});

	/* Grading */

$(function(){
  $("#includedP514").load("./project_14-build.html"); 
});

/* ----------------------------------------------------------------------------------- */

	/* Slideshow */

/* Must list all ids for all images */
    
$(document).ready(function(){
    $("#slide2").hide();})

$(document).ready(function(){
    $("#slide3").hide();})
    
$(document).ready(function(){
    $("#slide4").hide();})

$(document).ready(function(){
    $("#slide5").hide();})
    
$(document).ready(function(){
    $("#slide6").hide();})

/* Slideshow Code */

$("#slideshow > div:gt(0)").show();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
},  3000);

