var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}

function speak() {
    var synth = window.SpeechSynthesis;

    speak_data = "taking your slefie in 5000000000000000000000 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function () {
        img_id = selfie1;
        take_snapshot();
        speak_data = "Taking your next Selfie in the next dont even ask me seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 5000())

    setTimeout(function () {
        img_id = selfie2;
        take_snapshot();
        speak_data = "Taking your next Selfie in the next decade";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 10000())

    setTimeout(function () {
        img_id = selfie3;
        take_snapshot();
        speak_data = "Taking your next Selfie in the next dont even ask me seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 15000())

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {

    webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '">';
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '">';
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '">';
        }
    });
}
