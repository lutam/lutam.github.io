
  


$(document).ready(function(){
	var arry=["", "Call me Ishmael.","Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.", "It is a way I have of driving off the spleen and regulating the circulation."];	
	var tieniconto=0;
	scriviparagrafoevaiacapo(arry, tieniconto);

	

	


});


function scriviparagrafoevaiacapo(arry, tieniconto){

var quale=0;	
tieniconto++; 
if(tieniconto<arry.length){
var stringatot="";
		for(i=0; i<tieniconto; i++){
			stringatot+=arry[i]+"<br>";		
		}	

		
		var myt=setInterval(function () {
					
					if(quale<arry[tieniconto].length){
						stringatot+=arry[tieniconto][quale];
						$('#scriviqua').html(stringatot+"|");
						quale++;
					}
					
					else{
						
						clearInterval(myt); 
						var intbar=	setInterval(function () {
											if(quale==arry[tieniconto].length+1){$('#scriviqua').html(stringatot+"");}
											if(quale==arry[tieniconto].length+2){$('#scriviqua').html(stringatot+"|");}
											if(quale==arry[tieniconto].length+3){$('#scriviqua').html(stringatot+"");}
											if(quale==arry[tieniconto].length+4){$('#scriviqua').html(stringatot+"|");}
											if(quale==arry[tieniconto].length+5){$('#scriviqua').html(stringatot+"");}
											if(quale==arry[tieniconto].length+6){$('#scriviqua').html(stringatot+"|");}
											if(quale==arry[tieniconto].length+7){$('#scriviqua').html(stringatot+"");}
											if(quale==arry[tieniconto].length+8){
																
																clearInterval(intbar);$('#scriviqua').html(stringatot+"<br>");
																scriviparagrafoevaiacapo(arry, tieniconto);
											}	
											quale++;
											}, 500);				
					
					}
					
					

      }   , 100);

}
}



 