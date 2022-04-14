noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristx = 0;

function setup(){
  video = createCapture(VIDEO);
  video.size(550,550);

  canvas = createCanvas(550,550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("PoseNet is initialized");
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);

    noseX = results[0].pose.nose.x ;
    noseY = results[0].pose.nose.y ;
    console.log("noseX "+ noseX + "noseY" + noseY);

    leftwristX = results[0].pose.leftWrist.x ;
    rightwristx = results[0].pose.rightWrist.x ;
    difference = floor(leftwristX - rightwristX);
    console.log("leftwristX"+ leftwristX + "rightwristx" + rightwristx + "difference" + difference + "px");
  }
}

function draw(){
  background("#02d49c");
  document.getElementById("info").innerHTML = "Width and height of the square is =" +difference + "px";
  fill("#FFA500");
  stroke("#000000");
  square(noseX,noseY,difference);
}