let speech =new SpeechSynthesisUtterance();

let voices=[];

let voiceselector = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice= voices[0];
    voices.forEach((voice,i)=>(voiceselector.options[i]=new Option(voice.name,i)));
};

voiceselector.addEventListener("change",()=>{
    speech.voice = voices[voiceselector.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})