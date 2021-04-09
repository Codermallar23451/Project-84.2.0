canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=200;
car1_height=90;
car1_x=10;
car1_y=10;

car2_width=200;
car2_height=90;
car2_x=10;
car2_y=100;

background_image="racingcanvas2.0.jpg";
car1_image="car1.png";
car2_image="car2.png";

function add() {
background_imagetag=new Image();
background_imagetag.onload=uploadbackground;
background_imagetag.src=background_image;

car1_imagetag=new Image();
car1_imagetag.onload=uploadcar1;
car1_imagetag.src=car1_image;

car2_imagetag=new Image();
car2_imagetag.onload=uploadcar2;
car2_imagetag.src=car2_image;
}

function uploadbackground() {
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);    
}

function uploadcar2() {
ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='38') {
car1up();
console.log("up");
}

if(keypressed=='40') {
car1down();
console.log("down");
}

if(keypressed=='37') {
car1left();
console.log("left");
}

if(keypressed=='39') {
car1right();
console.log("right");
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='87') {
car2up();
console.log("up");
}

if(keypressed=='83') {
car2down();
console.log("down");
}

if(keypressed=='65') {
car3left();
console.log("left");
}

if(keypressed=='68') {
car4right();
console.log("right");
}

}
}