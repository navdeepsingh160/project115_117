

function startclassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassififer('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}