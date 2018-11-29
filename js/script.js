$(function(){

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       // document.getElementById("btnbacktoTop").style.display = "block";
        $('#btnbacktoTop').fadeIn();
    } else {
        //document.getElementById("btnbacktoTop").style.display = "none";
       
        $('#btnbacktoTop').fadeOut();
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll body to 0px on click
$('#btnbacktoTop').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});



$('[data-tooltip="tooltip"]').tooltip();
//alert(1);

 



  $(window).scroll(function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = 520;   
	    //console.log(y_scroll_pos);   
	   // var mobile_view = 235;



		// set to whatever you want it to be

	    if(y_scroll_pos > scroll_pos_test ) {
		  // $("body").css("background-color","#000");
		    $('header nav').addClass('inbody');
	    }
		else
		{
			//$("body").css("background-color","#FFF");
			//alert(2);
			  $('header nav').removeClass('inbody');
		}
	});	




});

