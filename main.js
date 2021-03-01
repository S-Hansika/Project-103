Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png' ,
    png_quality: 90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_img" src="'+data_uri+'">';
    })

}

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LiVbketwR/model.json', modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}

function identify_img(){
    image= document.getElementById('captured_img');
    classifier.classify(image, gotResult);

}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML= results[0].label;
        document.getElementById("result_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
    if(results[0].label == "Father"){
        document.getElementById("result_father").innerHTML= results[0].confidence.toFixed(3);
    }
    if(results[1].label == "Father"){
        document.getElementById("result_father").innerHTML= results[1].confidence.toFixed(3);
    }
    if(results[2].label == "Father"){
        document.getElementById("result_father").innerHTML= results[2].confidence.toFixed(3);
    }

    if(results[0].label == "Mother"){
        document.getElementById("result_mother").innerHTML= results[0].confidence.toFixed(3);
    }
    if(results[1].label == "Mother"){
        document.getElementById("result_mother").innerHTML= results[1].confidence.toFixed(3);
    }
    if(results[2].label == "Mother"){
        document.getElementById("result_mother").innerHTML= results[2].confidence.toFixed(3);
    }

    
    if(results[0].label == "Brother"){
        document.getElementById("result_brother").innerHTML= results[0].confidence.toFixed(3);
    }
    if(results[1].label == "Brother"){
        document.getElementById("result_brother").innerHTML= results[1].confidence.toFixed(3);
    }
    if(results[2].label == "Brother"){
        document.getElementById("result_brother").innerHTML= results[2].confidence.toFixed(3);
    }

}