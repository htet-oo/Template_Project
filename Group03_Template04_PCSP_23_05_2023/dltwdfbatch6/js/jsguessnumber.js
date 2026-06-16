//UI
const minnum=document.querySelector('.mininumber'),
	  maxnum=document.querySelector('.mixinumber'),
	  getinput=document.querySelector('#guessnumber'),
	  getbtn=document.querySelector('#btn'),
	  message1=document.querySelector('.message1'),
	  message2=document.querySelector('.message2'),
	  getgame=document.querySelector('.game');

let min=1,
	max=10,
	gameleft=3;
	winningnum=randomnum(min,max);

minnum.textContent=min;
maxnum.innerText=max;

getbtn.addEventListener('click',function(){
	// console.log('i am working');
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	let guess=parseInt(getinput.value);
	// console.log(typeof guess);
	if(guess<min || guess > max || isNaN(guess)){
		// console.log(`Please enter a number between ${min} to ${max}`);
		message2.textContent=`Please enter a number between ${min} to ${max}`;
		setmessage2(`Gameover,You have lost,The correct number is ${winningnum}`,'red');

	}
	if(guess===winningnum){
		//Gameover
		//disable input
		// getinput.disabled=true;
		//getinput border color to green
		// getinput.style.borderColor='green';
		//message 1
		// message1.innerText=`${winningnum} is correct!!!,You won`;
		// message1.style.color='green';
		// setmessage1(`${winningnum} is correct!!!,You won`,'green')
		//play again
		// getbtn.value='play again';
		gameover(true,`${winningnum} is correct!!!,You won`)
	}else{
		//Wrong Number
		//Gameover
		gameleft--;
		console.log(gameleft);
		if(gameleft===0){
			//Gameover LOST	
			// console.log('Game Over');
			//disabled getinput
			// getinput.disabled=true;
			//getinput bordercolor to red
			// getinput.style.borderColor='red';
			//message 2
			// message2.textContent=`Gameover,You have lost,The correct number is ${winningnum}`;
			// message2.style.color='red';
			// setmessage1(`Gameover,You have lost,The correct number is ${winningnum}`,'red');
			//play again?
			// getbtn.value='Play Again';
			gameover(false,`Gameover,You have lost,The correct number is ${winningnum}`);
		}else{
			//COMTINUE Game
			//getinput borderColor to red
			getinput.style.borderColor='red';
			//clear getinput text
			getinput.value='';
			//message1
			// message1.innerText=`${guess} is not correct,You have ${gameleft} chance`
			setmessage1(`${guess} is not correct,You have ${gameleft} chance`,'blue');
		}

	}
});
//Message 
function setmessage1(msg,color){
	message1.textContent=msg;
	message1.style.color=color;
}
function setmessage2(msg,color){
	message2.innerText=msg;
	message2.style.color=color;

	setTimeout(function(){
		message2.innerText='';
	},2000);
}

//GameOver

function gameover(won,msg){
	let color;
	won===true? color='green':color='red';

	//disable getinput
	getinput.disabled=true;
	//getinput border color to green
	getinput.style.borderColor=color; 
	//message1
	setmessage1(msg,color);
	//anymore
	getbtn.value='Play Again';

	// getbtn.classList='btn-playagain';
	getbtn.classList.add('playagain');
}

getgame.addEventListener('mouseup',(e)=>{
	// console.log(e.target);
	if(e.target.className==='btn playagain'){
		// console.log('i am playagain');
		window.location.reload();
	}
});

function randomnum(minnum,maxnum){
	let getrdm=Math.floor(Math.random()*(maxnum-minnum)+1);

	return getrdm;
}