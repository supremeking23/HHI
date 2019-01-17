$(function(){

	//minified this
	//index banner
	//$(".text-one").addClass('animated fadeInLeft');
	// scroll body to 0px on click
	$('#btnbacktoTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

    $('#learnMore').click(function () {
       $('html, body').animate({scrollTop: $('.main-body').offset().top = 690}, 1000); 
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
	$( ".btn-hide-social-media" ).click(function() {
		var data_arrow = $(this).data("arrow");
		
		//alert(data_value);
		if(data_arrow =="arrow-left"){
			data_arrow = "arrow-right";
			$("i").removeClass("fa-arrow-left");
			$("i").addClass("fa-arrow-right");
			$('.btn-hide-social-media').data("arrow",data_arrow);
			
			//alert(data_value);
		}else if(data_arrow =="arrow-right"){
			$("i").removeClass("fa-arrow-right");
			$("i").addClass("fa-arrow-left");
			data_arrow = "arrow-left";
			$('.btn-hide-social-media').data("arrow",data_arrow);

		}
		//alert(data_value);
	  $( ".social-media" ).toggle("slide");
	});

    $('.why-hunters-hub').waypoint(function(direction) {
        if (direction == "down") {
            //$('nav').addClass('sticky');
             $('#btnbacktoTop').fadeIn();
             //$('.icon-bars').fadeIn();
              $('header nav').addClass('inbody');
              $('.img-brand').css('width','230px');
              $('.img-brand').attr("src","img/HHI Logo edit2.png");

        } else {
           // $('nav').removeClass('sticky');
           $('#btnbacktoTop').fadeOut();
           $('header nav').removeClass('inbody');
           //$('.icon-bars').fadeOut();
           $('.img-brand').css('width','250px');
           $('.img-brand').attr("src","img/HHI Logo edit2.png");
           

        }
    }, {
      offset: '100px;'
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
             //$('.icon-bars-two').fadeIn();
             //$('.icon-bars').fadeIn();
             $('header nav').addClass('inbody');
              
        } else {
           // $('nav').removeClass('sticky');
          	 
           //$('.sidenav').fadeOut();
		   $('#btnbacktoTopTwo').fadeOut();
           //$('.icon-bars-two').fadeOut();
           //$('.icon-bars').fadeOut();
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


	$('.content-mission-vision').waypoint(function(direction) {
	    $('.content-mission-vision').addClass('animated fadeIn');
	    /*$('.site-logo').addClass('animated fadeInUp');*/
	    
	}, {
	    offset: '50%'
	});


	$('.w-h-h-text').waypoint(function(direction) {
	    $('.w-h-h-text').addClass('animated fadeIn');
	    //$('.site-logo').addClass('animated fadeInUp');
	    
	}, {
	    offset: '50%'
	});
	

	$('.core-values-row').waypoint(function(direction) {
	    $('.core-values-row').addClass('animated fadeIn');
	   
	    
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



	$('.team-image').waypoint(function(direction) {
	    $('.team-image').addClass('animated fadeInLeft');
	   
	    
	}, {
	    offset: '50%'
	});


	/*$('.skill-image-row-one').waypoint(function(direction) {
	    $('.skill-image').addClass('animated fadeInLeft');
	   
	    
	}, {
	    offset: '50%'
	});*/


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

	$('.facebook').click(function(){
		open("https://www.facebook.com/Hunters-Hub-Incorporated-208732030013230/","","height=150");
	});

});

