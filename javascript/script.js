let capsLockEnabled = false; //capslock is off when keybored is called first
let currentKeyboard = 1; //keep track of if user was on capslock or lowercase keybored
let lastKnownCapsLockState = false; //also helps keep track of capslock state
const synth = window.speechSynthesis; //API for audio
let utterance = new SpeechSynthesisUtterance(); //API for audio

function toggleKeyboard() { //function to display kybored
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  keyboard.innerHTML = "";
//both uppercase and lowercasekeybored are stored in array's
  const keysLayout = (capsLockEnabled) ? [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
    ['capslock', ' ', 'backspace']
  ] : [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    ['capslock', ' ', 'backspace']
  ];

  keysLayout.forEach(row => { //create keybored layout on screen
    row.forEach(key => {
      var button = document.createElement('button');

      if (key === ' ') { //display space on spacebar
        button.textContent = 'space';
        button.onclick = function () {
          onKeyPress(' ');
        };
      } else {
        button.textContent = key;
        button.onclick = function () {
          onKeyPress(key);
        };
      }

      button.className = 'keyboard-button';
 
//create special key ID to use for CSS
      if (key === ' ' || key === 'backspace' || key === 'capslock') {
        button.className += ' special-key';
      }

      button.setAttribute('data-key', key.toLowerCase());

      keyboard.appendChild(button);
    });

    keyboard.appendChild(document.createElement('br'));
  });

  keyboard.style.display = 'block';
}

function toggleCase() {    //if keybored is closed, open back up on last keybored used
  currentKeyboard = (currentKeyboard === 1) ? 2 : 1;
  toggleKeyboard();
  document.getElementById('textInput').focus(); 
}

function onKeyPress(key) {  //what to do if a key is pressed
  var textInput = document.getElementById('textInput');

  if (key === 'backspace') {  //what to do for special keys
    textInput.value = textInput.value.slice(0, -1);
  } else if (key === 'capslock') {
    capsLockEnabled = !capsLockEnabled;
    applyCapsLockStyle();
    toggleKeyboard();
  } else {
    textInput.value += capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
  }
}

//update keybored button lables, should be redundant, but there were errors when I took 
//it out
function updateKeyboardLabels() { 
  var buttons = document.querySelectorAll('#virtualKeyboard button');
  buttons.forEach(button => {
    var key = button.textContent.toLowerCase();

    if (key !== 'backspace' && key !== 'capslock' && key !== 'space') {
      button.textContent = capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
    }
  });
}

//makes sure buttons type capital letetrs/symbols if capslock is enabled
function applyCapsLockStyle() {
  var capsLockButton = document.querySelector('button[data-key="capslock"]');
  if (capsLockEnabled) {
    capsLockButton.classList.add('capsLockEnabled');
  } else {
    capsLockButton.classList.remove('capsLockEnabled');
  }
}

document.getElementById('textInput').addEventListener('click', function () {
  toggleCase();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'CapsLock') {
    event.preventDefault();
    capsLockEnabled = !capsLockEnabled;
    applyCapsLockStyle();
    toggleCase();
    toggleKeyboard();
  }

  onPhysicalKeyPress(event);
});

//play audio to user when speak button clicked
document.getElementById('speakButton').addEventListener('click', function (event) {
  event.preventDefault();  // Prevent the default behavior of the click event
  speakText(document.getElementById('textInput').value);
});

//check if user has pressed their physical keybored. 
document.addEventListener('keyup', function (event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    virtualButton.classList.remove('pressed');
  }
});

//light up keys on virtual keybored when physcial key pressed
function onPhysicalKeyPress(event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    virtualButton.classList.add('pressed');

    setTimeout(function () {
      virtualButton.classList.remove('pressed');
    }, 1000);
  }
}

//clear text box when clear button clicked
function deleteContents() {
  var textBox = document.getElementById('textInput');
  textBox.value = '';
}

document.getElementById('clear').addEventListener('click', function () {
  deleteContents();
});


document.addEventListener('keydown', function (event) {
  var isCapsLockActive = event.getModifierState('CapsLock');
  if (isCapsLockActive !== lastKnownCapsLockState) {
    capsLockEnabled = isCapsLockActive;
    applyCapsLockStyle();
    updateKeyboardLabels();
    lastKnownCapsLockState = isCapsLockActive;
  }
});
//check if user has pressed capslock
document.addEventListener('keyup', function (event) {
  if (event.getModifierState('CapsLock')) {
    lastKnownCapsLockState = capsLockEnabled;
  }
});


document.addEventListener('click', function (event) {
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  // Check if the clicked element is not the text input, a keyboard button, or the clear button
  if (event.target !== textInput && !event.target.classList.contains('keyboard-button') && event.target.id !== 'clear') {
    lastKnownCapsLockState = capsLockEnabled;
    keyboard.style.display = 'none';
  } else {
    keyboard.style.display = 'block';
  }
});


//use specific voice for audio
function speakText(text) {
  findVoice();
  utterance.pitch = 2;
  utterance.rate = 1;
  utterance.volume = 1.0;
  utterance.text = text;

  // Speak the utterance
  synth.speak(utterance);
}

function findVoice() {
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













