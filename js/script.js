$(function(){

		/*$('.content-mission-vision').css('display','none');
	    $('.site-logo').css('display','none');*/
	    

	//
	


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

    $('#learnMore').click(function () {
       $('html, body').animate({scrollTop: $('.main-body').offset().top = 730}, 1000); 
    });


	$('#btnbacktoTopTwo').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});



	$('[data-tooltip="tooltip"]').tooltip();
	//alert(1);



	/* Animations on scroll */


	$('.tlt').textillate();

    $('.main-body').waypoint(function(direction) {
        if (direction == "down") {
            //$('nav').addClass('sticky');
             $('#btnbacktoTop').fadeIn();
             $('.icon-bars').fadeIn();
              $('header nav').addClass('inbody');
              $('.img-brand').css('width','230px');
              $('.img-brand').attr("src","img/HHI Logo edit2.png");

        } else {
           // $('nav').removeClass('sticky');
           $('#btnbacktoTop').fadeOut();
           $('header nav').removeClass('inbody');
           $('.icon-bars').fadeOut();
           $('.img-brand').css('width','250px');
           $('.img-brand').attr("src","img/HHI Logo edit2.png");
           

        }
    }, {
      offset: '60px;'
    });	


    /*$('#it_professional').click(function(){
    	$('.it_professional-person').toggle();
    });


    $('#non-it_professional').click(function(){
    	$('.non-it_professional-person').toggle();
    })*/


    //different page
    /*$('.people-skill-section').waypoint(function(direction) {
        if (direction == "down") {
            //$('nav').addClass('sticky');
             $('#btnbacktoTopTwo').fadeIn();
             $('.icon-bars').fadeIn();
              $('header nav').addClass('inbody');
        } else {
           // $('nav').removeClass('sticky');
           $('#btnbacktoTopTwo').fadeOut();
           $('.icon-bars').fadeOut();
           $('header nav').removeClass('inbody');
        }
    }, {
      offset: '60px;'
    });*/

    $('.mission-vision').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
	      //alert(1);
	     if (direction == "down") {
            //$('nav').addClass('sticky');
             //$('.sidenav').fadeIn();
 			 $('#btnbacktoTopTwo').fadeIn();
             $('.icon-bars-two').fadeIn();
             $('header nav').addClass('inbody');
              
        } else {
           // $('nav').removeClass('sticky');
          	 
           //$('.sidenav').fadeOut();
		   $('#btnbacktoTopTwo').fadeOut();
           $('.icon-bars-two').fadeOut();
           $('header nav').removeClass('inbody');
        }
	}, {
	      offset: '50%'
	});


    $('.people-skill-section').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
      	$('.people-skill-section-row-1').addClass('animated fadeInLeft');
	}, {
	      offset: '50%'
	});



    $('.people-skill-section-row-1').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
      	$('.people-skill-section-row-2').addClass('animated fadeInRight');
	}, {
	      offset: '50%'
	});


    $('.people-skill-section-row-2').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
      	$('.people-skill-section-row-3').addClass('animated fadeInLeft');
	}, {
	      offset: '50%'
	});


    $('.people-skill-section-row-3').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
      	$('.people-skill-section-row-4').addClass('animated fadeInRight');
	}, {
	      offset: '50%'
	});


    $('.people-skill-section-row-5').waypoint(function(direction) {
      //$('.first-row-skills').addClass('animated bounceInUp');
     
      	$('.people-skill-section-row-5').addClass('animated fadeInLeft');
	}, {
	      offset: '50%'
	});

	$('.content-mission-vision').waypoint(function(direction) {
	    $('.content-mission-vision').addClass('animated fadeIn');
	    $('.site-logo').addClass('animated fadeInUp');
	    
	}, {
	    offset: '50%'
	});


	$('.w-h-h-text').waypoint(function(direction) {
	    $('.w-h-h-text').addClass('animated fadeIn');
	    //$('.site-logo').addClass('animated fadeInUp');
	    
	}, {
	    offset: '50%'
	});
	


	$('.features').waypoint(function(direction) {
	    $('.features').addClass('animated fadeIn');
	   
	    
	}, {
	    offset: '50%'
	});





	$('.partners').waypoint(function(direction) {
	    $('.partners-image').addClass('animated fadeInLeft');
	   
	    
	}, {
	    offset: '50%'
	});



	$('.our-team').waypoint(function(direction) {
	    $('.team-image').addClass('animated fadeInLeft');
	   
	    
	}, {
	    offset: '50%'
	});


  /*  $('.first-row-skills').waypoint(function(direction) {
      $('.first-row-skills').addClass('animated bounceInUp');
     
	      
	}, {
	      offset: '50%'
	});*/












	$('#testing1').on('click',function(){
		alert('12');
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

