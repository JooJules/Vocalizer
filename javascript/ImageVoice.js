const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

function outputVoice(parameter) { 
    
    findVoice();
    //For Chrome. The browser needs an event to fire for the getVoices() function.
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = findVoice;
    }
    
    utterance.pitch = 2;
    utterance.rate = 1;
    utterance.volume = 1.0;
    utterance.text = parameter;

    // Speak the utterance
    synth.speak(utterance);
}

function findVoice () {
  let voices = synth.getVoices();
		
  for (let i = 0; i < voices.length; i++) {
    if ((voices[i].name === "Microsoft Zira - English (United States)") || //Chrome and Edge Voice
        (voices[i].name === "Samantha") ||                                 //Safari Voice
        (voices[i].name === "English (America)+Steph")) {                  //FireFox Voice 
      utterance.voice = voices[i];
      break;
    }
  } 
}