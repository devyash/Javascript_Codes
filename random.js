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
var obj= {"users": {"nagios": [0, 0, 0, "-", 0], "whowell": [8220, 0, 0, "-", 10], "pbs": [0, 0, 0, "-", 0], "magitz": [585222380, 0, 0, "-", 2424759], "chasman": [755852580, 0, 0, "-", 223157], "yingz": [223031268, 0, 0, "-", 354385], "bang": [8784, 0, 0, "-", 97], "kmast": [4, 0, 0, "-", 1], "replicator": [0, 0, 0, "-", 0], "devyashsanghai": [4, 0, 0, "-", 1], "mlemmone": [4, 0, 0, "-", 1], "sas": [0, 0, 0, "-", 0], "jakers": [534744, 0, 0, "-", 227], "davidestricklin": [4, 0, 0, "-", 1], "lthibert": [4, 0, 0, "-", 1], "moskalenko": [13405506596, 0, 0, "-", 2908650], "maxprok": [3941061388, 0, 0, "-", 1497661], "cpp": [156074452, 0, 0, "-", 94983], "testusr-jstrds": [0, 0, 0, "-", 0], "etomeo": [788028, 0, 0, "-", 12], "brantleyk": [4, 0, 0, "-", 1], "jstrds": [101624656, 0, 0, "-", 307195], "bio": [0, 0, 0, "-", 0], "slurm": [0, 0, 0, "-", 0], "sharath1231": [453816, 0, 0, "-", 6538], "yfu": [109209464, 0, 0, "-", 39]}, "group": {"ufhpc": [11706055752, 23622320128, 23622320128, "-", 6342521]}};
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