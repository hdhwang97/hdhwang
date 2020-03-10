// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('street');
var ctx = canvas.getContext('2d');

img.src = "images/street/street_";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 56) {
            imgNum = 0;
        }
        
        player(imgNum);
        imgNum++;
    }, 30);
}

function player(num) {
    img.src = "images/street/street_" + num + ".png";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});
