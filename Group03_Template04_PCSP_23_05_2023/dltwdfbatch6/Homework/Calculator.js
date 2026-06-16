let input=document.getElementById('getnum').value;
let temp1=document.getElementById('tempsign').value;
let temp2=document.getElementById('tempsign1').value;
let temp3=document.getElementById('tempsign2').value;
function getele1(sign){
	// console.log("i am "+sign);
	input+=sign;
	document.getElementById('getnum').value=input;
	if(temp2.length===0){
		temp1+=sign;
		document.getElementById('tempsign').value=temp1;
		console.log('temp2 is null');
	}else{
		temp3+=sign;
		document.getElementById('tempsign2').value=temp3;
		console.log('temp2 is not null');
	}

}
function getele(sign){
	input+=sign;
	document.getElementById('getnum').value=input;
	temp2+=sign;
	document.getElementById('tempsign1').value=temp2;
}
function calculate(){
	let num1=Number(temp1);
	let num2=Number(temp3);
	// console.log(num1,num2);
	switch(temp2){
			case '+':
				cal=num1+num2;
			break;
			case '-':
				cal=num1-num2;
			break;
			case '*':
				cal=num1*num2;
			break;
			case '/':
				cal=num1/num2;
			break;
			case '%':
				cal=num1%num2;
			break;
			default:
			window.alert('No sign');
	}
	document.getElementById('getnum').value=cal;
}
function clean(e){
	document.getElementById('getnum').value=null;
}
		let getdisplay=document.getElementById('display');
		const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
		function startclock(){
			let getdate=new Date();
			//console.log(getdate);

			let gethours=getdate.getHours();
			//console.log(gethours);

			let getminutes=getdate.getMinutes();
			//console.log(getminutes);

			let getseconds=getdate.getSeconds();
			//console.log(getseconds);

			let getampn;

			switch(gethours>12){
				case true:
					getampm="PM";
					gethours=gethours-12;
				break;
				case false:
					gerampm="AM";
				break;
			}

			let setclock=gethours+":"+getminutes+":"+getseconds+" "+getampm;
			// let setclock=`${gethours}:${getminutes}:${getseconds} ${getampm} ${days{getday}}`;

			getdisplay.textContent=setclock;
		};
		startclock();
		setInterval(startclock,1000);