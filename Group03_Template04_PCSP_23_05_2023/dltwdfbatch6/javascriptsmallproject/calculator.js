// var input=document.getElementById("input"),
//     number=document.querySelectorAll(".numbers div"),
//     opearator=document.querySelectorAll(".operators div"),
//     result=document.getElementById("result"),
//     clear=document.getElementById('clear'),
//     resultDisplayed=false;
// var num=123456;
// for(var i=0;i<number.length;i++){
//   number[i].addEventListener("click",function(e){
//     var currentString=input.innerHTML;
//     var lastChar=currentString[currentString.length-1];
    
//     if(resultDisplayed===false){
//       input.innerHTML+=e.target.innerHTML;
//     }
//     else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
//       resultDisplayed=false;
//       input.innerHTML+=e.target.innerHTML;
//     }
//     else{
//       resultDisplayed=false;
//       input.innerHTML="";
//       input.innerHTML=input.innerHTML += e.target.innerHTML;

//     }
//     // console.log(currentString);
//     // console.log(lastChar)
//   })
// }
// for(var i=0;i<opearator.length;i++){
//   opearator[i].addEventListener("click",function(e){
//     var currentString=input.innerHTML;
//     var lastChar=currentString[currentString.length-1];
  
//     if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
//       var newString=currentString.substring(0,currentString.length-1)+e.target.innerHTML;
//       input.innerHTML=newString;
//     }
//     else if(currentString.length==0){
//       console.log("enter a number first");
//     }
//     else{
//       input.innerHTML+=e.target.innerHTML;
//     }

//   })
// }
// result.addEventListener("click",function(){
//   var inputString=input.innerHTML;
//   var numbers = inputString.split(/\+|\-|\*|\//g);
//   var operators = inputString.replace(/[0-9]|\./g, "").split("");
//   console.log(numbers,operators)
//   var divide=operators.indexOf("/");
//   while(divide!=-1){
//     numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
//     operators.splice(divide,1);
//     divide = operators.indexOf("/");
//   }
//   var multiply=operators.indexOf("*");
//   while(multiply!=-1){
//     numbers.splice(multiply,2,numbers[multiply]*numbers[multiply+1]);
//     operators.splice(multiply,1);
//     multiply=operators.indexOf("*");
//   }
//   var subtract=operators.indexOf("-");
//   while(subtract!=-1){
//     numbers.splice(subtract,2,numbers[subtract]-numbers[subtract+1]);
//     operators.splice(subtract,1);
//     subtract=operators.indexOf("-");
//   }
//   var add=operators.indexOf("+");
//   while(add!=-1){
//     numbers.splice(add,2,numbers[add]+numbers[add+1]);
//     operators.splice(add,1);
//     add=operators.indexOf("+");
//     console.log(numbers);
//   }
//   input.innerHTML=numbers[0];
//   resultDisplayed=true;
// })
// clear.addEventListener('click',function(){
//   input.innerHTML="";
// })
var inputbox=document.getElementById("inputbox"),
    operator=document.querySelectorAll(".operators div"),
    number=document.querySelectorAll(".numbers .subnumbers div"),
    result=document.getElementById("resultbtn"),
    clear=document.getElementById('clear'),
    resultDisplayed=false;
for(var i=0;i<number.length;i++){
  number[i].addEventListener("click",function(e){
    var currentString=inputbox.value;
    var lastChar=currentString[currentString.length-1];
    if(resultDisplayed===false){
      inputbox.value+=e.target.innerHTML;
    }
    else if(resultDisplayed===true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
      resultDisplayed=false;
      inputbox.value+=e.target.innerHTML;
    }
  })
};
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener("click",function(e){
    var currentString=inputbox.value;
    var lastChar=currentString.charAt(currentString.length-1);
    console.log(lastChar);
    if(lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/"){
      console.log(currentString.substring(0,currentString.length-1)+e.target.innerHTML);
      var newString=currentString.substring(0,currentString.length-1)+e.target.innerHTML;
      inputbox.value=newString;
    }
    else if(currentString.length===0){
      console.log("Enter the number first");
    }
    else{
      inputbox.value+=e.target.innerHTML;
    }
  })
}
result.addEventListener("click",function(e){
  console.log(typeof inputbox.value);
  var inputString=inputbox.value;
  var numbers=inputString.split(/\+|\-|\*|\//g);
  var operators=inputString.replace(/[0-9]|\./g,"").split("");
  console.log(numbers);
  console.log(operators)

  var add=operators.indexOf("+");
  number1=+numbers[add];
  number2=+numbers[add+1];
  while(add!=-1){
    number1=+numbers[add];
    number2=+numbers[add+1];
    numbers.splice(add,2,number1+number2);
    operators.splice(add,1);
    add=operators.indexOf("+");
    console.log(numbers);
  }
  var subtract=operators.indexOf("-");
  while(subtract!=-1){
    number1=+numbers[subtract];
    number2=+numbers[subtract+1];
    numbers.splice(subtract,2,number1-number2);
    operators.splice(subtract,1);
    subtract=operators.indexOf("-");
    console.log(numbers);
  }
  var multiply=operators.indexOf("*");
  while(multiply!=-1){
    number1=+numbers[multiply];
    number2=+numbers[multiply+1];
    numbers.splice(multiply,2,number1*number2);
    operators.splice(multiply,1);
    multiply=operators.indexOf("*");
    console.log(numbers);
  }
  var divide=operators.indexOf("/");
  while(divide!=-1){
    number1=+numbers[divide];
    number2=+numbers[divide+1];
    numbers.splice(divide,2,number1/number2);
    operators.splice(divide,1);
    divide=operators.indexOf("/");
    console.log(numbers);
  }
  inputbox.value=numbers;
  resultDisplayed=true;
})
clear.addEventListener("click",function(){
  inputbox.value="";
  resultDisplayed=false;
})
