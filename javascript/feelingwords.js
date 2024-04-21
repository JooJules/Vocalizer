function instruction(selected) {
    let vid = document.getElementById("video-box");

    if (selected == 'happy') {
        texttoshow = "To sign that you are happy, have both hands in front of you with your palms facing towards you. Move your hands in a forward circular motion.";
        vid.src = "../ASL Videos/feelingwords/happyASL.mp4";
    }
    else if (selected == 'angry') {
        texttoshow = "To sign that you are angry, have your hands down to your stomach and act like you are holding a baseball. Move your hands outward and up to the height of your shoulders.";
        vid.src = "../ASL Videos/feelingwords/angryASL.mp4";
    }
    else if (selected == 'sad') {
        texttoshow = "To sign that you are sad, have your hands in front of your face with fingers apart and palms facing towards you. Have a sad look on your face and move your hands down.";
        vid.src = "../ASL Videos/feelingwords/sadASL.mp4";
    }
    else if (selected == 'like') {
        texttoshow = "To sign the word 'like', have in front of your chest with your fingers spread apart and palm facing towards you. Next, touch your thumb and middle finger together. To sign that you don't like, sign the word like and then move your hand away from you while opening it.";
        vid.src = "../ASL Videos/feelingwords/likeASL.mp4";
    }   
    else if (selected == 'good') {
        texttoshow = "To sign the word 'good', place your right hand in front of your mouth fingers closed. Next, move it down into your left hand. To sign the word for 'bad', with your hand in front of your mouth fingers closed, move it down so that your palm is facing the floor.";
        vid.src = "../ASL Videos/feelingwords/goodASL.mp4";
    }
    else if (selected == 'love') {
        texttoshow = "To sign the word 'love', cross both arms in front of your chest with your hand closed.";
        vid.src = "../ASL Videos/feelingwords/loveASL.mp4";
    }

    vid.load();
    document.getElementById("text-box").innerHTML = texttoshow;
}