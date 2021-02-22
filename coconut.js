var myMusic = document.getElementById('music');
document.getElementById('coconutButton').setAttribute('onclick',play);  
var img_coconut = document.getElementById('coconutButton');
var rotateAngle = 0;

function play() {
    console.log("play");  

    myMusic.play();
    document.getElementById('coconutButton').setAttribute('onclick',pause);
    console.log("play");  
}

function pause() {
    myMusic.pause();
    document.getElementById('coconutButton').setAttribute('onclick',play);  
    console.log("pause");
}

function onloadfunction(){
    play();
    step();
}

function step(timestamp) {
    console.log("step");
    img_coconut.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle++;
    if(rotateAngle>360){
        rotateAngle = 0;
    }
    requestAnimationFrame(step);
}
  
