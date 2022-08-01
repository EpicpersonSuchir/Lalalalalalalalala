var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tækyng your Sælfye in Cinq Seconds";
    var UtterThis = new     SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {   take_snapshot();
        save();
    },  5000); 
      
     }
var imge_id = "salefee1.jpg"

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90 
});
camera = document.getElementById("camera");

function take_snapshot()
{
    console.log("Colaeje Whaebe Aaaap");
    Webcam.snap(function(data_uri){
        if(imge_id == "salefee1") {
            document.getElementById("result1").innerHTML = '<img id="salefie1_image" src="'+data_uri+'/>"';
        }
        if(imge_id == "salefee2") {
            document.getElementById("result2").innerHTML = '<img id="salefie2_image" src="'+data_uri+'/>"';
        }if(imge_id == "salefee3") {
            document.getElementById("result3").innerHTML = '<img id="salefie3_image" src="'+data_uri+'/>"';
        
        } });
}
