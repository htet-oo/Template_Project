let val;
val=document;
val=document.doctype;
val=document.head;
val=document.body;
val=document.URL;
val=document.links;//HTMLCOLLECTION

val=document.links[0];
val=document.links[3];
val=document.links[3].className;
val=document.links[0].classList;//DOMTOKENLIST
val=document.links[0].classList[0];
val=document.links[0].classList[1];
val=document.links[0].id;

val=document.forms;//HTMLCOLLECTION
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].className;
val=document.forms[0].classList;
val=document.forms[0].classList[0];
val=document.forms[0].action;
val=document.forms[0].method;

val=document.images;//HTMLCOLLECTION
val=document.images[0];
val=document.images[0].src;
val=document.images[0].className;
val=document.images[0].classList;
val=document.images[0].classList[0];
val=document.images[0].alt;
val=document.images[0].getAttribute("abc");

val=document.scripts;//HTMLCOLLECTION
val=document.scripts[0];
val=document.scripts[0].src;
val=document.scripts[0].type;
val=document.scripts[0].getAttribute('src');
val=document.scripts[0].getAttribute('type');
console.log(val);

//change style

document.getElementById("tasktitle").style.background="grey";
// document.getElementById("tasktitle").style.color="#fff";
document.getElementById("tasktitle").style.padding="5px";

//change content

// document.getElementById("tasktitle").textContent="My list";
// document.getElementById("tasktitle").innerText="My text";
// document.getElementById("tasktitle").innerHTML=`<span style="color:yellow;">My jobs</span>`;

//call to class name

let lis=document.getElementsByClassName("list-group-item");
console.log(lis);
// lis[0].style.color="red";
// lis[1].textContent="Have to visit";

//call to tag
let litags=document.getElementsByTagName("li");
console.log(litags);
console.log(litags[0]);
// litags[0].style.color="red";
// litags[0].innerText="have to cook";

// querySelector can call class id tag but call only one item
console.log(document.querySelector("#tasktitle"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h3"));

// document.querySelector("li").style.color="red";
// document.querySelector("ul li").style.color="blue";
// document.querySelector("ul li:nth-child(odd)").style.color="green";//only one change cause querySelector can do only one
// document.querySelector("ul li:nth-child(even)").style.color="grey";
// document.querySelector("ul li:last-of-type").style.color="pink";
// document.querySelector("ul li:nth-of-type(3)").style.color="violet";
// document.querySelector("ul li:nth-of-type(3").textContent="Have to read";

const listitems=document.querySelector("ul").getElementsByClassName("list-group-item");
console.log(listitems);

// document.querySelector("ul li:nth-child(odd").style.background="silver";
// document.querySelector("ul li:nth-of-type(even)").style.background="green";


//HTMLCOLLECTION IS NOT PURE ARRAY
// let arritems=Array.from(listitems);
// console.log(arritems);
// arritems.forEach(function(listitem,indexnumber){
// 	listitem.innerText=`${indexnumber}:Hello`;
// });
// //querySelectorAll

// let its=document.querySelector("ul.list-group li.list-group-item");
// console.log(its);

// let itms=document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(itms);
// console.log(itms[0]);

// // itms.forEach(function(itm,index){
// // 	// itm.textContent="Hello";
// // 	itm.innerText=`${index}:Helloworld`;
// // });

// const liodd=document.querySelectorAll("li:nth-child(odd)");
// const lieven=document.querySelectorAll("li:nth-child(even)");
// // console.log(lieven);
// liodd.forEach(function(li,index){
// 	console.log(li);
// 	li.style.background="grey";
// });

// for(let i=0;i<lieven.length;i++){
// 	// console.log(lieven[i]);
// 	lieven[i].style.background="silver";
// }

//children
let chl;

const getul=document.querySelector('ul.list-group');
console.log(getul);
const getli=document.querySelector('li.list-group-item:first-child');
console.log(getli);

chl=getul.children;
console.log(chl);
// chl[0].innerText="Have to eat";
chl[0].innerHTML=`Have to read <a href="#" id="delete-item1" class="delete-item delete-me"><i class="fa-solid fa-trash-can"></i></a>`;

// children of children

chl=getul.children[1].children;//HTMLCOLLECTION
chl=getul.children[1].children[0];
chl=getul.children[1].children[0].id;
chl=getul.children[1].children[0].className;
chl=getul.children[1].children[0].href;
chl=getul.children[1].children[0].getAttribute('href');

chl=getul.children[0].children[0].children;
chl=getul.children[0].children[0].children[0];


//First Element Child
chl=getul.firstElementChild;
//last Element Child
chl=getul.lastElementChild;

//Child Element Count
chl=getul.children.length;
chl=getul.childElementCount;
chl=getul.children[0].childElementCount;
chl=getul.children[0].children[0].childElementCount;
console.log(chl);

//Parent Element

const getfirstli=document.querySelector("li.list-group-item:first-child")
let par=getfirstli.parentElement;
console.log(par);

//nextElementSibling

let sbl=getfirstli.nextElementSibling;
sbl=getfirstli.nextElementSibling;
console.log(sbl);

//previousElementSibling

let psbl=getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(psbl);

//Create Element

const newli =document.createElement("li");
console.log(newli);

//Add id
newli.id='new-item';
console.log(newli);

//Add Class
newli.className='list-group-item'; 
console.log(newli);

//Add Attritude(qualifiedname.value)
newli.setAttribute('title','newitem');
console.log(newli);

// newli.textContent="hay";
// newli.innerText="hi";
// newli.innerHTML=`List Item 6 <a href="#" id="delete-item6" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`

//Create Text Note
newli.appendChild(document.createTextNode("Save Myanmar"));
console.log(newli);


const newlink=document.createElement("a");
newlink.href="#";
newlink.className='delete-item';
newlink.id='delete-item6';
newlink.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;

newli.appendChild(newlink);

console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);

//Replace Element
const newtitle=document.createElement('h2');
newtitle.id="tasktitle";
newtitle.appendChild(document.createTextNode("All my lists"));
console.log(newtitle);

const oldtitle=document.getElementById('tasktitle');
console.log(oldtitle);

const getcardaction=document.querySelector('.card-action');

//Replace Child(new,old)
getcardaction.replaceChild(newtitle,oldtitle);

//remove Element
const getlis=document.querySelectorAll('li');
// getlis[0].remove();
getlis[4].remove();
// getlis[3].remove();

//className vs classList
const firstli=document.querySelector('li:first-child');
// console.log(firstli);
// const firstlink=firstli.children;//HTML COLLECTION
const firstlink=firstli.children[0];
//console.log(firstlink);
let firstlnk;
firstlnk=firstlink.className;
console.log(firstlnk);

firstlink.className="delete-myself";
firstlink.className="delete-item delete-myself";
firstlink.className="delete-item delete-me delete-myself";
console.log(firstlnk);
firstlnk=firstlink.classList;
console.log(firstlnk);

firstlnk=firstlink.classList;//DOM Token List
// console.log(firstlnk);
// firstlink.classList.add('delete-ourserve');
// console.log(firstlnk);
// firstlink.classList.add('delete-myself','delete-ourserve');
// firstlink.classList.remove('delete-item');
// firstlink.classList.remove('delete-me','delete-myself');
// firstlink.classList.replace('delete-ourserve','delete-delete');

// if(firstlink.classList.contains('delete-me')){
// 	console.log('yes');
// }else{
// 	console.log('no');
// }

//Attribute
let getatt=firstlink.getAttribute('href')
console.log(getatt);
firstlink.setAttribute('href','https://www.google.com');
getatt=firstlink.hasAttribute('href');
console.log(getatt);//true
getatt=firstlink.hasAttribute('title');
console.log(getatt);//false

//Method 2
let clearbtn=document.getElementById('clear-tasks');

clearbtn.addEventListener('click',myclick);

function myclick(e){
let val;	
val=e;

//Event target element
val=e.target;
val=e.target.id;
val=e.target.className;
val=e.target.classList;//DomToken List
// e.target.innerText='Finished';

// //Event Type
// val=e.type;
// //Coordinates event - relative to the window
// val=e.clientX;
// val=e.clientY;

// //Coordinates event -rlative to the element
val=e.offsetX;
// val=e.offsetY;

console.log(val);
// e.preventDefault();
}

//MouseEvent

const clbtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h2');

// console.log(heading);

//single click
// clbtn.addEventListener('click',mouseeventtype);

//double click
// clbtn.addEventListener('dblclick',mouseeventtype);

//mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

//mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

//mouseenter
//card.addEventListener('mouseenter',mouseeventtype);

//mouseover
//card.addEventListener('mouseover',mouseeventtype);

//mouseleave
//card.addEventListener('mouseleave',mouseeventtype);

//mouseout
//card.addEventListener('mouseout',mouseeventtype);

//mousemove
//card.addEventListener('mousemove',mouseeventtype);
function mouseeventtype(e){
	console.log(`Event type =${e.type}`);
	heading.textContent=`MouseX: ${e.clientX} MouseY ${e.clientY}`;
	document.body.style.background=`rgba(${e.offsetX},${e.offsetY},1)`;
	e.preventDefault();

};

const formel=document.querySelector('form');
const inputtext=document.getElementById('task');

//formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
// 	console.log(`Event Type = ${e.type}`);
// 	console.log(inputtext.value);
// 	e.preventDefault();
// }


//keydown
//inputtext.addEventListener('keydown',inputeventtype);

//keyup
//inputtext.addEventListener('keyup',inputeventtype);

//keypress
//inputtext.addEventListener('keypress',inputeventtype);

//focus
//inputtext.addEventListener('focus',inputeventtype);

//blur
//inputtext.addEventListener('blur',inputeventtype);

//cut
//inputtext.addEventListener('cut',inputeventtype);

//paste
//inputtext.addEventListener('paste',inputeventtype);

//input
//inputtext.addEventListener('input',inputeventtype);


const geth2=document.querySelector('h2');
function inputeventtype(e){
	console.log(`Event Type = ${e.type}`);
	console.log(e.target.value);
	geth2.innerText=e.target.value;
	// e.preventDefault();
}

//Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card');
// });

//Event Delegation

// const deleitem=document.querySelector('.delete-item');
// deleitem.addEventListener('click',deleteitem);
// function deleteitem(e){
// 	console.log('i am delete item');
// 	console.log(e.target);
// 	e.preventDefault();
// };

document.body.addEventListener('click',eventdelg);
function eventdelg(e){
	// console.log('i am working');
	// console.log(e.target);

	// if(e.target.className==='fa-solid fa-trash-can'){
	// 	console.log('i am trash can');
	// };
	// if(e.target.parentElement.className==='delete-item'){
	// 	console.log('i am delete item by a tag');
	// };
	// if(e.target.parentElement.className==='delete-item delte me'){
	// 	console.log('i am delete item by a tag');
	// };
	if(e.target.parentElement.classList.contains('delete-item')){
		// console.log('i am delete item by a tag');
		//e.target.remove();
		e.target.parentElement.parentElement.remove();
	};
	//e.preventDefault();
};
document.querySelector('form').addEventListener('submit',function(e){
	e.preventDefault();
	// console.log('hey i am working');
	const getnewtask=document.getElementById('task').value;
	console.log(getnewtask);

	//localStorage.setItem('mytask',getnewtask); //only work with one item

	 let alltasks;//cannont be one array cus of function
	// alltasks=[];
	// alltasks.push(getnewtask);
	// console.log(alltasks);

	if(localStorage.getItem('mytasks')===null){
		alltasks=[];
	}else{
		alltasks=JSON.parse(localStorage.getItem('mytasks'));
	}
	alltasks.push(getnewtask);

	localStorage.setItem('mytasks',JSON.stringify(alltasks));

});
// console.log(JSON.parse(localStorage.getItem('mytasks')));
// console.log(typeof localStorage.getItem('mytasks'));

let getalltasks=localStorage.getItem('mytasks');
getalltasks=JSON.parse(getalltasks);
console.log(getalltasks);

getalltasks.forEach(function(getalltask){
	console.log(getalltask);
});
