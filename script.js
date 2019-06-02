let menuKnop = document.querySelector(".Button");
let navKnop = document.querySelectorAll(".Nav");
let wisselknop = document.querySelector(".wissel");
let stijlsheet = document.querySelector(".stijl");
let terugKnop = document.querySelector(".Mode");
let i=0;

let opties = document.querySelectorAll('nav a');


while (i < navKnop.length) {
navKnop[i].addEventListener("mouseover",change);
navKnop[i].addEventListener("mouseout",back);
i++;
}




function change() {
  data = this.innerHTML;
  console.log("yeet");
  this.innerHTML = "-" + data + "-";
}

function back() {
this.innerHTML = data;
}
