noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clownNose, noseX, noseY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
