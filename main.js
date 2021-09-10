function preload(){

}

function setup(){
    canvas= createCanvas(640,480);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}



function draw(){

}


function take_snapshot(){
    save('filtered_image.png');
}

