/* var animals = [
  {		
    name: 'Devyash',	species: 'Sanghai'
	},
	{
  	name: 'Siddharth', species: 'Gupta'
	},
	{	
    name: 'Suyog',	species: 'Dagga'
	}
];
/*
var names= animals.map(animal => animal.name)
console.log(names);
*/
/*
//console.log(obj);
var output=obj.filter(key=> key);
console.log(output);*/
/*
var names= animals.reject(animal => animal.name=='Devyash')
console.log(names);*/
   //  var routput= animals.reduce((sum,X)=> (sum+1),0);
    //console.log(routput);
    //
 // var fs = require('fs') 
 /*let dragons=[
   {name : 'Devyash', element:'Lightning'},
   {name : 'Raj', element:'Fire'},
   {name : 'Sagar', element:'Lightning'}
];
     var names=dragons.filter(X => X.element=='Lightning' ).reduce((names,X)=> names+" "+X.name,"");
  console.log(names);
*/
let GetImage= (url)=>new Promise((resolve,reject) =>{
                          let image = new Image();
 												  image.src=url;
													image.onload=()=>resolve(image);
													image.onerror=()=> reject( new Error("LOAD FAILED!"));
                          });
GetImage("https://www.hallaminternet.com/assets/URL-tagging-image.png")
.then(img => document.body.appendChild(document.createElement("img").src=img.src))
.catch(error => console.log(error));
