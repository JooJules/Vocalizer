function instruction(selected) {
    let vid = document.getElementById("video-box");

    if (selected == 'home') {
        texttoshow = "To sign the word 'home', bring your fingers including your thumb together so that your fingertips are touching. Place your hand on your cheeck and then move it back close to your ear.";
        vid.src = "../ASL Videos/placeswords/homeASL.mp4";
    }
    else if (selected == 'work') {
        texttoshow = "To sign the word 'work', start by making two fists. Tap the wrist of your dominant hand on the top of your other wrist. Keep both wrists facing down.";
        vid.src = "../ASL Videos/placeswords/workASL.mp4";
    }
    else if (selected == 'school') {
        texttoshow = "To sign the word 'school', start by placing your non-dominant hand infront of you with the palm facing up. Bring your dominant hand down onto your other hand quickly two times.";
        vid.src = "../ASL Videos/placeswords/schoolASL.mp4";
    }
    else if (selected == 'store') {
        texttoshow = "To sign the word 'store', start by placing your hand in front of you with your fingers pointing down. Keeping your thumbs touching the back of your fingers, quickly move your hands forward and back a couple of times.";
        vid.src = "../ASL Videos/placeswords/storeASL.mp4";
    }
    else if (selected == 'car') {
        texttoshow = "To sign the word 'car', start by pretending you are holding onto a steering wheel and slightly rotate your arms as if your are steering a car. To say you want to drive somewhere start again by pretending your holding a steering wheel and move your hands away from you.";
        vid.src = "../ASL Videos/placeswords/carASL.mp4";
    }
    else if (selected == 'come') {
        texttoshow = "To sign if you want something to come to you, use both hands and have your pointer fingers point out in front on you. Next, turn your hands up and towards you. To sign if your want to go somewhere do the opposite. With your pointer fingers pointing towards you, move your hands so that they are pointing away from you.";
        vid.src = "../ASL Videos/placeswords/comeASL.mp4";
    }
    else if (selected == 'in') {
        texttoshow = "To sign 'in', start by placing your nondominant hand in front of you as if your are holding a cup. Next, place the fingers of your dominant hand into your other hand. To sign 'out' move the fingers of your dominant hand out of your other hand.";
        vid.src = "../ASL Videos/placeswords/inASL.mp4";
    }
    else if (selected == 'with') {
        texttoshow = "To sign 'with', sign the letter 'a' with both hands and bring them together.";
        vid.src = "../ASL Videos/placeswords/withASL.mp4"; 
    }

    vid.load();
    document.getElementById("text-box").innerHTML = texttoshow;
}