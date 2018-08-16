
    var border = 20;
    var ww = $(window).width();
    console.log(ww);
    var logosinarow;
  
/* if(ww >= 1024){ logosinarow = 4; }
    else if(ww>=768 && ww < 1024){ logosinarow = 3; }
    else{ logosinarow = 2; }
*/

    
    //var radius = $('#figmod').width(); //($(window).width()*0.5875 * (1-0.05*(logosinarow-1)) )/(logosinarow*2)-border/2; 
    //var radius = radiuscod.toFixed(2)-0.01;



    var justFilled=false;
    var radius;

   


    $(document).ready(function(){


var circleW=$('#figmod').width();
var radius = (circleW - border)/2;


        
    	 $('figure').each(function(){
            
       
            console.log("r35:", radius);

        $(this).css({  "height": circleW+"px"});
        var svgelement=$(this).find('svg');
        var canvaselement= $(this).find('canvas');
        svgelement.css({ "width" : circleW+15+"px", "height": circleW+"px"});
        svgelement.find('circle').css({"stroke-width" : border});
        svgelement.find('circle').attr('cx', radius+ border/2+15);
        svgelement.find('circle').attr('cy', radius+ border/2);
        svgelement.find('circle').attr('r', radius);


       canvaselement.attr('width', circleW);
       canvaselement.attr('height',circleW);
        

      
    });



 $(document).scroll(function(){ 
        if(!justFilled){
            var par= $('#skills').offset().top-$(window).scrollTop()-$('#space_invaders').height()+250;
            if(par<0){ fillCircles(); justFilled=true; }
        }

});


          function fillCircles(){

        // var circleW22= $('#figmod').width();
        var radius22 = radius; // (circleW22 - 20)/2;

      $('figure').each(function(){


       
        var canvaselement= $(this).find('canvas');
      
       
        

        var tim;
        var ang=0;
        var limit = canvaselement.data('limit');
        var color = canvaselement.data('color');

        tim= setInterval(function(){
            var cc =  canvaselement[0];
            var ctx = cc.getContext("2d");





            ctx.lineWidth=border;
            ctx.strokeStyle = color;

            ctx.beginPath();

           ctx.clearRect(0, 0, radius22 * 2 + border, radius22 * 2 + border);
          
            var mustclear=false;           
            if(ang<2*Math.PI*limit ){ ang+=0.08; }
            else{ ang=2*Math.PI*limit; mustclear=true;  }
console.log(radius22);
           ctx.arc(radius22+ctx.lineWidth/2, radius22+ctx.lineWidth/2, radius22, 0, ang);

            ctx.stroke();
            if(mustclear){ clearInterval(tim); }


        }, 10);

      });

    }


    });




/////////////
//////////////////
/////////////////////


/*

    $(window).resize(function(){


var circleW=$('#figmod').width();
var radius = (circleW - border)/2;


        
         $('figure').each(function(){
            
       
            console.log("r35:", radius);

        $(this).css({  "height": circleW+"px"});
        var svgelement=$(this).find('svg');
        var canvaselement= $(this).find('canvas');
        svgelement.css({ "width" : circleW+15+"px", "height": circleW+"px"});
        svgelement.find('circle').css({"stroke-width" : border});
        svgelement.find('circle').attr('cx', radius+ border/2+15);
        svgelement.find('circle').attr('cy', radius+ border/2);
        svgelement.find('circle').attr('r', radius);


       canvaselement.attr('width', circleW);
       canvaselement.attr('height',circleW);
        

      
    });


fillCircles();

          function fillCircles(){

        // var circleW22= $('#figmod').width();
        var radius22 = radius; // (circleW22 - 20)/2;

      $('figure').each(function(){


       
        var canvaselement= $(this).find('canvas');
      
       
        

        var tim;
        var ang=0;
        var limit = canvaselement.data('limit');
        var color = canvaselement.data('color');

        tim= setInterval(function(){
            var cc =  canvaselement[0];
            var ctx = cc.getContext("2d");





            ctx.lineWidth=border;
            ctx.strokeStyle = color;

            ctx.beginPath();

           ctx.clearRect(0, 0, radius22 * 2 + border, radius22 * 2 + border);
          
            var mustclear=false;           
            if(ang<2*Math.PI*limit ){ ang+=0.08; }
            else{ ang=2*Math.PI*limit; mustclear=true;  }
console.log(radius22);
           ctx.arc(radius22+ctx.lineWidth/2, radius22+ctx.lineWidth/2, radius22, 0, ang);

            ctx.stroke();
            if(mustclear){ clearInterval(tim); }


        }, 10);

      });

    }




    });


   */
