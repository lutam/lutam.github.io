var M_timer;
		var S_timer;
		$(document).on('click', '#play', function(){ 
			startgame();
		});

		$(document).on('click', '.gameplay #logo', function(){

			    clearTimeout(M_timer);
			    clearTimeout(S_timer);
			    $('#header nav').toggle();
				$('body').toggleClass('gameplay');

		})



		function startgame(){
			

			$('#header nav').toggle();
			$('body').toggleClass('gameplay');
			//$('#logo h1').html("X");
			

			M_timer = setInterval(move, 300);
			S_timer = setInterval(shout, 100);

			

		}

		var isrightdir= true; 

		function move(){
			var rt=($(window).width() - ($('#ludovico').offset().left + $('#ludovico').outerWidth()));
			var lt= $('#ludovico').offset().left;
			if(rt < 20){ isrightdir = false; }
			else if(lt < 20){ isrightdir = true;  }

			if(isrightdir){
				$('#ludovico').add('#introduction').animate({'margin-left':'+=10px'}, 300, "linear");
			}else{ 	
				$('#ludovico').add('#introduction').animate({'margin-left':'-=10px'}, 300, "linear");
 			}

 			
		}

		function shout(){
			if($('.hostile_laser').length==0){
				shouting_letter= Math.floor(Math.random() * 20); 
				$('#ludovico .square').add('#introduction .square').each(function( index ) {
					if(index==shouting_letter)
  						$(this).append("<div class='hostile_laser' style='left:"+$(this).offset().left+"px;'></div>");
				});
			}

			$('.hostile_laser').animate({'top': '+=10px'}, 10);
			$('.base .square').each(function(){
 				 var collisions = $(this).collision(  ".hostile_laser",{ relative: "collider", obstacleData: "odata", colliderData: "cdata", directionData: "ddata", as: "<div/>" });
 				 for( var i=0; i<collisions.length; i++ ){		
					var o = $(collisions[i]).data("odata");
					o.remove();
					$(this).remove(); 
				}
			});

			 var collisions2 = $('#starship').collision(  ".hostile_laser",{ relative: "collider", obstacleData: "odata", colliderData: "cdata", directionData: "ddata", as: "<div/>" });
			 if(collisions2.length>0){
			 console.log(collisions2); $('.hostile_laser').remove(); $('#starship').toggleClass('bleau'); } 



			if($('.hostile_laser').offset().top > $('#starship').offset().top){ $('.hostile_laser').remove(); }
 			$('.my_laser').animate({"top": "-=50px"}, 100, "linear");

 			$('.square').each(function(){
 				 var collisions = $(this).collision(  ".my_laser",{ relative: "collider", obstacleData: "odata", colliderData: "cdata", directionData: "ddata", as: "<div/>" });
 				 for( var i=0; i<collisions.length; i++ ){		
					var o = $(collisions[i]).data("odata");
					o.remove();
					$(this).remove(); 
				}
			})

 			$('.my_laser').each( function(){
 				if( $(this).offset().top < 0) { $(this).remove(); } 
 			})
		}

		function moveStarShip(direction){
			if(direction==37){
				$('#starship').animate({'left' : '-=30px'}, 10, "linear");
			}
			else if(direction==39){
				$('#starship').animate({'left' : '+=30px'}, 10, "linear");
			}else if(direction==32){
				$('#starship').append("<div class='my_laser' style='left:"+$('#starship').offset().left+"px;'></div>");                                                          			}
		}



		var keys = {};

$(document).keydown(function (e) {
    keys[e.which] = true;
    
for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
       moveStarShip(i);
    }
});

$(document).keyup(function (e) {
    delete keys[e.which];
    
for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
       moveStarShip(i);
    }
});
