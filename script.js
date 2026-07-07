// Text Chat

function sendMessage(){

let text=document.getElementById("message").value;

if(text=="") return;

reply(text);

}

// AI Reply

function reply(message){

let response="";

message=message.toLowerCase();

if(message.includes("hello")){

response="Hello! Nice to meet you.";

}

else if(message.includes("name")){

response="My name is Buddy.";

}

else if(message.includes("how are you")){

response="I am doing great.";

}

else{

response="Sorry, I am still learning.";

}

document.getElementById("response").innerHTML=response;

speak(response);

}

// Text To Speech

function speak(text){

const speech=new SpeechSynthesisUtterance();

speech.text=text;

speech.rate=1;

speech.pitch=1;

speech.volume=1;

window.speechSynthesis.speak(speech);

}

// Voice Recognition

function startListening(){

const SpeechRecognition=

window.SpeechRecognition||

window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.lang="en-US";

recognition.start();

recognition.onresult=function(event){

let transcript=

event.results[0][0].transcript;

document.getElementById("message").value=transcript;

reply(transcript);

};

}