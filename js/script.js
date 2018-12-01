$(function(){

		/*$('.content-mission-vision').css('display','none');
	    $('.site-logo').css('display','none');*/
	    

	//
	$('.tlt').textillate();

    $('.main-body').waypoint(function(direction) {
        if (direction == "down") {
            //$('nav').addClass('sticky');
             $('#btnbacktoTop').fadeIn();
              $('header nav').addClass('inbody');
        } else {
           // $('nav').removeClass('sticky');
           $('#btnbacktoTop').fadeOut();
           $('header nav').removeClass('inbody');
        }
    }, {
      offset: '60px;'
    });	

	// When the user scrolls down 20px from the top of the document, show the button
	/*window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	       
	        $('#btnbacktoTop').fadeIn();
	    } else {
	       \
	       
	        $('#btnbacktoTop').fadeOut();
	    }
	}*/

	// When the user clicks on the button, scroll to the top of the document
	/*function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	}*/

	// scroll body to 0px on click
	$('#btnbacktoTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});



	$('[data-tooltip="tooltip"]').tooltip();
	//alert(1);



	/* Animations on scroll */
	$('.content-mission-vision').waypoint(function(direction) {
	    $('.content-mission-vision').addClass('animated fadeIn');
	    $('.site-logo').addClass('animated fadeInUp');
	    
	}, {
	    offset: '50%'
	});


	$('.features').waypoint(function(direction) {
	    $('.features').addClass('animated fadeIn');
	   
	    
	}, {
	    offset: '50%'
	});


 /* $(window).scroll(function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = 520;   
	    if(y_scroll_pos > scroll_pos_test ) {
		   $('header nav').addClass('inbody');
	    }else{
			$('header nav').removeClass('inbody');
		}
	});	*/


	/*$('.navbar-toggle').on('click',function(){
		//$('header nav').addClass('inbody');
		//alert('ds');
		//background: rgba(22,19,180,.9);
		//$("header nav").css("background-color","rgba(22,19,180,.9)");
		$('header nav').addClass('inbody');

		var counter;

		if(counter == 0){
			counter = 1;
			$('header nav').addClass('inbody');
		}else if (counter == 1){
			$('header nav').removeClass('inbody');
			counter = 0;
		}


		console.log('counter is' + counter);
	});*/

});

