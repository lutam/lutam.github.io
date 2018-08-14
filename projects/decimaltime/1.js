



$(document).ready(function(){
	
	var date = new Date;
date.setTime(date.getTime());

var ss = date.getSeconds();
var mm = date.getMinutes();
var hh = date.getHours();

setInterval(function(){
	ss++;
		if(ss>60){
			mm++; ss=0;
			if(mm>60){
				hh++; mm=0;		
				if(hh>23){hh=0;}	
			}		
		}
		var zss=""; var zmm="";
		if(mm<9){zmm="0";}
		if(ss<9){zss="0";}
		$('#scriviqua').html(hh+":"+zmm+mm+":"+ss);
		$('#lancetta').css({'transform':'rotate('+ss*6+'deg)'});
	 	$('#lancetta2').css({'transform':'rotate('+mm*6+'deg)'});
	 	$('#lancetta3').css({'transform':'rotate('+hh*30+'deg)'});

},1000);

var quantisecondisonopassatioggi=(ss + (60 * (mm + (60 * hh))))/0.864;

	 	
	 	var tempd=quantisecondisonopassatioggi/10000;
	 	var dhh=parseInt(tempd);
		var tempm=(tempd-dhh)*100;
		var dmm=parseInt(tempm);
		var dss=parseInt((tempm-dmm)*100);
	
	setInterval(function(){
	 dss++; 
	 	if(dss>99){
	 		dmm++; dss=0; 
			if(dmm>99){
			
					dhh++; dmm=0; 
					if(dhh>9){dhh=0;}
					
					

						
			}		
	 	}
	 	$('#scriviqua2').html(dhh+":"+dmm+":"+dss);
	 	$('#lancettad').css({'transform':'rotate('+dss*3.6+'deg)'});
	 	$('#lancettad2').css({'transform':'rotate('+dmm*3.6+'deg)'});
	 	$('#lancettad3').css({'transform':'rotate('+dhh*36+'deg)'});
	 }, 864);
	 
	 

	
 var mcw=$('#mainc').width();
	$('#mainc').add('#mainc2').height(mcw);


});

$(window).resize(function(){
	 var mcw=$('#mainc').width();
	$('#mainc').add('#mainc2').height(mcw);

})




 