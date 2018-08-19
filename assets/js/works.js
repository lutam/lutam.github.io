var gcw = $('.container').width()/1.61803398875;


	if($(window).width()>=992){
		var work_height = gcw/2;
		var divertissement_height = gcw/3;
	}else if($(window).width()>= 768 && $(window).width()< 992){
		var divertissement_height = gcw/2; 
		var work_height = gcw/2;
	}
	else{ var work_height = gcw; var divertissement_height = gcw; }

	var work_margin_bottom = 0;

	var second_row_top = work_height + work_margin_bottom;
	var work_container_height = second_row_top * 2;
	var new_work_container_height = second_row_top * 3;


	$(document).ready(function(){
			$('#work_container .work').css({'height' : work_height+'px', 'margin-bottom' : work_margin_bottom+'px'});
			$('#divertissement .work').css({'height' : divertissement_height+'px', 'margin-bottom' : work_margin_bottom+'px'});
		if($(window).width()>768){

			$('#work_container').css({'height' :  work_container_height+'px' });
			$('#aa').add('#sis').css({ 'top' : second_row_top+'px'});
		}
	}); 


	function collapseEverything(){
		$('#work_container').css({'height' : work_container_height+'px'});
		$('#lvstore').css({'width':'50%', 'height':work_height+'px', 'left' : 0, top:0});
		$('#lvmagazine').css({'width':'50%', 'height':work_height+'px', 'left' : '50%', top:0});
		$('#sis').css({'width':'50%', 'height':work_height+'px', 'left' : 0, top:second_row_top+'px'});
		$('#aa').css({'width':'50%', 'height':work_height+'px', 'left' : '50%', top:second_row_top+'px'});

		$('.patina').fadeIn();


	}

	function expandLVSTORE(){

		if($(window).width() >= 768 ){
			collapseEverything();

			$('#lvstore').animate({'width':'100%' },200); 
			$('#lvstore').css({'height':''});
			$('#lvstore').css({'height':'auto'});
		
			tmp_second_row_top = $('#lvstore').height()+30;
			tmp_third_row_top = tmp_second_row_top + work_height + work_margin_bottom*2;
			tmp_new_work_container_height = second_row_top * 2 + tmp_second_row_top;

			$('#work_container').css({'height' : tmp_new_work_container_height+'px'});

			$('#lvmagazine').animate({'left':'0', 'top': tmp_second_row_top+'px'}, 200); 
			$('#sis').animate({'left': '50%', 'top' : tmp_second_row_top+'px'}, 200); 
			$('#aa').animate({'left' : 0, 'top': tmp_third_row_top}, 200);
		
			$("html, body").animate({
    			scrollTop: $('#work_container').offset().top-50
			}, 100);
		}else{
			$('#lvstore').css({'height':''});
			$('#lvstore').css({'height':'auto'});

			$("html, body").animate({
    			scrollTop: $('#lvstore .col-sm-4').offset().top - 50
			}, 100);

		}
		$('#lvstore .patina').fadeOut();
	}

	function collapseLVSTORE(){
		if($(window).width() >= 768 ){
			$('#lvstore').animate({'width':'50%', height : work_height+'px'},200); 
			$('#work_container').css({'height' : work_container_height+'px'});

			$('#lvmagazine').animate({'left':'50%', 'top': '0'}, 200); 
			$('#sis').animate({'left': '0', 'top' : second_row_top+"px"}, 200); 
			$('#aa').animate({'left' : '50%', 'top': second_row_top+'px'}, 200);
		}else{
			$('#lvstore').css({'height' : work_height+'px'});
		}
		$('#lvstore .patina').fadeIn();
	}

	function expandLVMAGAZINE(){
		if($(window).width() >= 768 ){

			collapseEverything();
		
			$('#lvmagazine').animate({'width':'100%', 'left' : '0'},200); 
			$('#lvmagazine').css({'height':''});
			$('#lvmagazine').css({'height':'auto'});

			tmp_second_row_top = $('#lvmagazine').height()+30;
			tmp_third_row_top = tmp_second_row_top + work_height + work_margin_bottom*2;
			tmp_new_work_container_height = second_row_top * 2 + tmp_second_row_top;

			$('#work_container').css({'height' : tmp_new_work_container_height+'px'});

			$('#lvstore').animate({'top': tmp_second_row_top+'px'}, 200); 
			$('#sis').animate({'left': '50%', 'top' : tmp_second_row_top}, 200);
			$('#aa').animate({'left' : 0, 'top': tmp_third_row_top}, 200);
 
 			$("html, body").animate({
    			scrollTop: $('#work_container').offset().top-50
			}, 100);
 		}else{
 			$('#lvmagazine').css({'height':''});
			$('#lvmagazine').css({'height':'auto'});

			$("html, body").animate({
    			scrollTop: $('#lvmagazine .col-sm-4').offset().top - 50
			}, 100);
		}
		$('#lvmagazine .patina').fadeOut();
	}

	function collapseLVMAGAZINE(){
		if($(window).width() >= 768 ){
			$('#lvmagazine').animate({'width':'50%', 'left' : '50%',  height : work_height+'px'},200); 
			$('#work_container').css({'height' : work_container_height+'px'});

			$('#lvstore').animate({'top': '0'}, 200); 
			$('#sis').animate({'left': '0', 'top' : second_row_top+'px'}, 200);
			$('#aa').animate({'left' : '50%', 'top': second_row_top+'px'}, 200);
 		}else{
			$('#lvmagazine').css({'height' : work_height+'px'});
		}
		$('#lvmagazine .patina').fadeIn();
	}	

	function expandSIS(){
		if($(window).width() >= 768 ){

			collapseEverything();
		
			$('#sis').animate({'width' : '100%', 'top' : 0}, 200);
			$('#sis').css({'height':''});
			$('#sis').css({'height':'auto'});

			tmp_second_row_top = $('#sis').height()+30;
			tmp_third_row_top = tmp_second_row_top + work_height + work_margin_bottom*2;
			tmp_new_work_container_height = second_row_top * 2 + tmp_second_row_top;

			$('#work_container').css({'height' : tmp_new_work_container_height+'px'});

			$('#lvstore').add('#lvmagazine').animate({'top' : tmp_second_row_top+'px'}, 200);
			$('#aa').animate({'left' : 0, 'top': tmp_third_row_top}, 200);

			$("html, body").animate({
    			scrollTop: $('#work_container').offset().top-50
			}, 100);
		}else{
			$('#sis').css({'height':''});
			$('#sis').css({'height':'auto'});

			$("html, body").animate({
    			scrollTop: $('#sis .col-sm-4').offset().top - 50
			}, 100);
		}

		$('#sis .patina').fadeOut();
	}

	function collapseSIS(){
		if($(window).width() >= 768 ){
			$('#sis').animate({'width' : '50%', 'top' : second_row_top+'px' , height : work_height+'px' }, 200);
			$('#work_container').css({'height' : work_container_height+'px'});

			$('#lvstore').add('#lvmagazine').animate({'top' : '0'}, 200);
			$('#aa').animate({'left' : '50%', 'top': second_row_top+'px'}, 200);
		}else{
			$('#sis').css({'height' : work_height+'px'});
		}
		$('#sis .patina').fadeIn();
	}

	function expandAA(){
		if($(window).width()>=768){
			collapseEverything();
		
			$('#aa').animate({'width' : '100%', 'top' : 0, 'left':0 }, 200);
			$('#aa').css({'height':''});
			$('#aa').css({'height':'auto'});

			tmp_second_row_top = $('#aa').height()+30;
			tmp_third_row_top = tmp_second_row_top + work_height + work_margin_bottom*2;
			tmp_new_work_container_height = second_row_top * 2 + tmp_second_row_top;

			$('#work_container').css({'height' : tmp_new_work_container_height+'px'});

			$('#lvstore').add('#lvmagazine').animate({'top' : tmp_second_row_top+'px'}, 200);
			$('#sis').animate({'left' : 0, 'top': tmp_third_row_top}, 200);

			$("html, body").animate({
    			scrollTop: $('#work_container').offset().top-50
			}, 100);
		}else{
			$('#aa').css({'height':''});
			$('#aa').css({'height':'auto'});

			$("html, body").animate({
    			scrollTop: $('#aa .col-sm-4').offset().top -50
			}, 100);
		}
		$('#aa .patina').fadeOut();
	}

	function collapseAA(){
		if($(window).width() >= 768 ){
			$('#aa').animate({'width' : '50%', 'top' : second_row_top+'px', 'left':'50%' , height : work_height+'px'}, 200);
			$('#work_container').css({'height' : work_container_height+'px'});

			$('#lvstore').add('#lvmagazine').animate({'top' : '0'}, 200);
			$('#sis').animate({'left' : '0', 'top': second_row_top+'px'}, 200);
		}else{
			$('#aa').css({'height' : work_height+'px'});
		}
		$('#aa .patina').fadeIn();
	}
