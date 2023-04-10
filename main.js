nose_x=0
nose_y=0

function preload() {
    clown_nose=loadImage("https://i.postimg.cc/Y0sn1nMb/clown-nose.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    image(video, 0, 0, 300, 300)
    //fill(255,0,0)
    //stroke(230,20,50)
    //circle(nose_x-140, nose_y-50, 40)
    image(clown_nose, nose_x-180, nose_y-57, 35, 35)

}

function takePhoto() {
    save("FilterTimmy.jpg")
}

function gotPoses(results) {
    console.log(results)
    if (results.length > 0) {
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log("nose_x="+ nose_x)
        console.log("nose_y="+ nose_y)
    }
}


