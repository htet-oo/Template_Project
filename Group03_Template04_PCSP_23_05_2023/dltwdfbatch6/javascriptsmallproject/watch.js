let getdisplay=document.getElementById("display");
console.log(getdisplay);
function settime(){
    let date=new Date();
    let hour =date.getHours();
    let minute =date.getMinutes();
    let second =date.getSeconds();
    let session="AM";
    if(hour>12){
        hour=hour-12;
        session="PM";
    }else{
        session="AM";
    }
    getdisplay.innerText=hour+":"+minute+":"+second+":"+session;
}

setInterval(settime,1000);