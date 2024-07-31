console.log('run');

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
let isSpeaking = true;


const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if(!synth.speaking){
        const utterence = new SpeechSynthesisUtterance(text);
        synth.speak(utterence);
    }


    if(synth.speaking && isSpeaking){
        button.innerHTML = 'Pause'
        synth.resume();

        isSpeaking = false
   }
   else{
    button.innerHTML = 'Resume';
    synth.pause();

    isSpeaking = true;
   }


  setInterval( () => {
    if(!synth.speaking && !isSpeaking){
        isSpeaking = true;
        button.innerText = 'Convert to Speech'

    }


})


}

button.addEventListener('click', textToSpeech);
