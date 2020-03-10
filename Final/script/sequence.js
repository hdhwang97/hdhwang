var canvas = document.getElementById('screen1')
var ctx = canvas.getContext('2d')
var scrollYPos = 1622;
var img = new Image(); 

img.src = "images/office/office_1622.png "

window.addEventListener('scroll', function(e){
console.log(scrollYPos); 
scrollYPos = Math.round(window.scrollY/20);
    //Math - 정수값으로 변환 round - 반올림 

    player(scrollYPos);
})



function player(num) {
img.src = "images/office/office_" + num + ".png";
}

img.addEventListener('load', function(e){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
ctx.drawImage(img,0,0);
}) 








//var canvas2 = document.getElementById('screen2')
//var ctx2 = canvas.getContext('2d')
//var scrollYPos2 = 0;
//var img2 = new Image(); 
//
//img2.src = "images/room/room_1548.png "
//
//window.addEventListener('scroll', function(e){
//console.log(scrollYPos2); 
//scrollYPos2 = Math.round(window.scrollY/20);
//    //Math - 정수값으로 변환 round - 반올림 
//
//    player(scrollYPos);
//})
//
//
//
//function player(num) {
//img2.src = "images/room/room_" + num + ".png";
//}
//
//img2.addEventListener('load', function(e){
//ctx2.clearRect(0,0,ctx2.canvas.width,ctx2.canvas.height)
//ctx2.drawImage(img2,0,0);
//}) 
//
//
