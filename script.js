function addition() {
  let firstno = Number(document.getElementById("first").value);
  let secondno = Number(document.getElementById("second").value);
  let calculation = document.getElementById("value");
  let value = firstno + secondno;

  if(firstno=="" || secondno==""){
    alert("enter value")
  }else{
    calculation.innerText = `${value}`;
  }
}

function subtraction() {
  let firstno = Number(document.getElementById("first").value);
  let secondno = Number(document.getElementById("second").value);
  let calculation = document.getElementById("value");
  let value = firstno - secondno;
  if(firstno=="" || secondno==""){
    alert("enter value")
  }else{
    calculation.innerText = `${value}`;
  }
}

function multiplication(){
  let firstno = Number(document.getElementById("first").value);
  let secondno = Number(document.getElementById("second").value);
  let calculation = document.getElementById("value");
  let value = firstno * secondno;
  if(firstno=="" || secondno==""){
    alert("enter value")
  }else{
    calculation.innerText = `${value}`;
  }
}

function division(){
  let firstno = Number(document.getElementById("first").value);
  let secondno = Number(document.getElementById("second").value);
  let calculation = document.getElementById("value");
  if(secondno<=0){
    alert("please enter positive number in second field")
  }
  let value = firstno / secondno;
  if(firstno=="" || secondno==""){
    alert("enter value")
  }else{
    calculation.innerText = `${value}`;
  }
}

function modlus(){
  let firstno = Number(document.getElementById("first").value);
  let secondno = Number(document.getElementById("second").value);
  let calculation = document.getElementById("value");
  let value = firstno % secondno;
  if(firstno=="" || secondno==""){
    alert("enter value")
  }else{
    calculation.innerText = `${value}`;
  }
}

function change(){

let calculation = document.getElementById("value");
if(calculation.innerText==""){
  // alert("result is empty")
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
}
else{
  calculation.innerText=""
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
}
}
