var counter=0;
window.setInterval(function(){
fetch("https://one.uf.edu/api/myschedule/course-search/?category=RES&course-code=&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=011914001&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-row=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=GRPR&term=20178&var-cred=true&writing=",{
  credentials: "same-origin"})  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
      	counter+=1;
      	console.log("Number of times the server was queried: "+counter);
        var x=(data[0]["COURSES"].map((obj)=>{return [obj.code,obj.name,obj.sections[0].openSeats]})); 
        for(var i=0;i<x.length;i++){
        	if(x.code=="CNT6885"){
        		  var win = window.open("https://www.youtube.com/watch?v=xnKhsTXoKCI", '_blank');
        	}
        } 
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}, 60000);
