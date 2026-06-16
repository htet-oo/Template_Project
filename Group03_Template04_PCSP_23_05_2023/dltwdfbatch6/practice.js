var rgbvalue1=document.getElementById("rgbvalue1");
var rgbvalue2=document.getElementById("rgbvalue2");
var rgbvalue3=document.getElementById("rgbvalue3");
rgbvalue1.innerHTML=Math.floor(Math.random()*100);
rgbvalue2.innerHTML=Math.floor(Math.random()*100);
rgbvalue3.innerHTML=Math.floor(Math.random()*100);
var first=document.getElementById("first");
// var color="green";
// console.log(color);
// console.log(first);
var color1=+rgbvalue1.innerHTML;
var color2=+rgbvalue2.innerHTML;
var color3=+rgbvalue3.innerHTML;
console.log(Math.random()*100);

var colorblock=document.querySelectorAll(".firstsection div");
var i=0;
for(i=0;i<colorblock.length;i++){
    var lastnum=Math.floor(Math.random()*100);
    colorblock[i].style=`background-color:rgba(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)})`;

    
}