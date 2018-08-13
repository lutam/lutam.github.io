
    var border = 20;
    const logosinarow=4;
    var radiuscod = ($(window).width()*0.5875 * (1-0.05*(logosinarow-1)) )/(logosinarow*2)-border/2; 
    var radius = radiuscod.toFixed(2)-0.01;
    console.log(radius);//($('.great_container').width()+0.15*$('.great_container').width())/4;

    var justFilled=false;
    $(document).scroll(function(){ 
    	if(!justFilled){
    		var par= $('#skills').offset().top-$(window).scrollTop()-$('#space_invaders').height()+250;
    		if(par<0){ fillCircles(); justFilled=true; }
    	}

});

    $(document).ready(function(){
    	 $('figure').each(function(){
        circleW=radius*2+border;
        $(this).css({ "width" : circleW+"px", "height": circleW+"px"});
        var svgelement=$(this).find('svg');
        var canvaselement= $(this).find('canvas');
        svgelement.css({ "width" : circleW+"px", "height": circleW+"px"});
        svgelement.find('circle').css({"stroke-width" : border});
        svgelement.find('circle').attr('cx', radius+ border/2);
        svgelement.find('circle').attr('cy', radius+ border/2);
        svgelement.find('circle').attr('r', radius);


       canvaselement.attr('width', circleW);
       canvaselement.attr('height',circleW);
        

      
    });

    });


    function fillCircles(){
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

           ctx.clearRect(0, 0, radius * 2 + border, radius * 2 + border);
          
            var mustclear=false;           
            if(ang<2*Math.PI*limit ){ ang+=0.08; }
            else{ ang=2*Math.PI*limit; mustclear=true;  }

           ctx.arc(radius+ctx.lineWidth/2, radius+ctx.lineWidth/2, radius, 0, ang);

            ctx.stroke();
            if(mustclear){ clearInterval(tim); }


        }, 10);

      });

    }
