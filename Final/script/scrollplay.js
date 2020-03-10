var canvas = document.getElementById('screen1')
var ctx = canvas.getContext('2d')
var scrollYPos = 0;
var img = new Image(); 

img.src = "images/office/office_0.png "

window.addEventListener('scroll', function(e){
console.log(scrollYPos); 
scrollYPos = Math.round(window.scrollY/21 )-31386;
    //Math - 정수값으로 변환 round - 반올림 
if(scrollYPos > 56) {
    scrollYPos = 1;
}
    player(scrollYPos);
})



function player(num) {
img.src = "images/Sequence/Office_" + num + ".png";
}

img.addEventListener('load', function(e){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
ctx.drawImage(img,0,0);
}) 