believer_song = "";
unstoppable_song = "";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function preload()
{
    believer_song = loadSound("music.mp3");
    unstoppable_song = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 530);
    canvas.position(424, 200);

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 530);
}

function gotPoses(results)
{
    if(results > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}