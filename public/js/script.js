var start  = new Date().getTime();


		  function getRandomColor(){ 

             var letters = '0123456789ABCDEF'.split('');

             var color = '#';

             for (var i=0; i<6; i++){ 

                    
                color += letters[Math.floor(Math.random() * 16)];


             }

              return color;

		  }

		  function makeShapeAppear(){ 

              var top = Math.random() * 400; 	/*to get random 
                                              pixels in top positioning here from 0 to 400 px*/	

              var left = Math.random() * 400 ; 

              var width = (Math.random() * 200) + 100; /*This will
                                                         give random width between 100 and 200 px*/

              if(Math.random() > 0.5){ 

         
                   document.getElementById("shape").style.borderRadius = "50%";

              }  //This will make a circle appear half a time

              else{ 

                      document.getElementById("shape").style.borderRadius = "0%";
 

              }

              document.getElementById("shape").style.backgroundColor = getRandomColor();

              document.getElementById("shape").style.width = width + "px"; 	

              document.getElementById("shape").style.top = top + "px";		  	

              document.getElementById("shape").style.left = left + "px"; // adding "px" to give the unit i.e pixels

              document.getElementById("shape").style.display = "block"   //use block to make the object appear


               start  = new Date().getTime();

		  }

		  function appearAfterDelay(){


              setTimeout(makeShapeAppear, Math.random() * 2000);


		  }

		  appearAfterDelay();

		   

		  /*setTimeout(functionName, time after which you want
		    the object to appear) .. Here we used Math.random() * 2000 as we dont want a fixed time after which the shape appears hence now the shape will appear after any time between 0 to 2 seconds*/
		                                          

          


		  document.getElementById("shape").onclick = function(){



           document.getElementById("shape").style.display = "none";

           var end = new Date().getTime();

           var timeTaken = (end - start) / 1000; /* dividing by  
                                                    1000 to convert time from miliseconds to seconds */

           document.getElementById("timeTaken").innerHTML = timeTaken + "s";



            appearAfterDelay();


	}