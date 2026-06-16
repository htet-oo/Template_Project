var start=document.getElementById("startid");
var stop=document.getElementById("stopid");
var reset=document.getElementById("resetid");
var second=00;
var minute=00;
console.log(start.value);
var interval;
start.addEventListener("click",function(){
   interval= setInterval(starttimer,1000);
})

function starttimer(){
    second=second+1;
    document.getElementById("second").innerText=second;
    if(second===60){
        second=00;
        minute=1+minute;
        if(minute===60){
            minute=10+minute;
            document.getElementById("minute").innerText=minute;

        }
    }

}
stop.addEventListener("click",function(){
    clearInterval(interval);
})
reset.addEventListener("click",function(){
    second=00;
    document.getElementById("second").innerText="0"+second;
    minute=00;
    document.getElementById("minute").innerText="0"+minute;
    clearInterval(interval);
})

