function instruction(selected) {
    let vid = document.getElementById("video-box");

    if (selected == 'day') {
        texttoshow = "To sign the word 'day', start by having the pointer finger of your dominant hand point upward. Have your other arm in front of you and bring your dominant hand down sideways.";
        vid.src = "../ASL Videos/timewords/dayASL.mp4";
    }
    else if (selected == 'night') {
        texttoshow = "To sign the word 'night', start by placing the arm of your non-dominant hand horizontally in front of you. Next, with the finger of your dominant hand pointing down, place the wrist of your dominant hand on top of the wrist of your other hand.";
        vid.src = "../ASL Videos/timewords/nightASL.mp4";
    }
    else if (selected == 'week') {
        texttoshow = "To sign the word 'week', start by making a fist with your dominant hand while keeping the pointer finger out. Next, move your dominant hand across the palm of your other hand.";
        vid.src = "../ASL Videos/timewords/weekASL.mp4";
    }
    else if (selected == 'month') {
        texttoshow = "To sign the word 'month', start by pointing upwards with your non-dominant hand. With your dominant hand pointing in the direction of your other hand, move your dominant hand behind your non-dominant hand.";
        vid.src = "../ASL Videos/timewords/monthASL.mp4";
    }
    else if (selected == 'year') {
        texttoshow = "To sign the word 'year', start by making two fists. Move the fist of your right hand around the fist of your left hand once and place it on top of your left hand.";
        vid.src = "../ASL Videos/timewords/yearASL.mp4";
    }
    else if (selected == 'will') {
        texttoshow = "To sign the word 'will' or 'future', start by having flat hand with fingers closed pointing towards the ceiling. Next, move your hand down so that it is horizontal. Stretching your arm can mean farther into the future.";
        vid.src = "../ASL Videos/timewords/willASL.mp4";
    }
    else if (selected == 'before') {
        texttoshow = "To sign the word 'before' or 'past', move your dominant arm up and back until your hand is over your shoulder.";
        vid.src = "../ASL Videos/timewords/beforeASL.mp4";
    }
    else if (selected == 'today') {
        texttoshow = "To sign the word 'today', close both hands but keep your pinky and thumb outward to form a 'Y' shape. Quickly move both hands shortly downward.";
        vid.src = "../ASL Videos/timewords/todayASL.mp4";
    }
    else if (selected == 'finish') {
        texttoshow = "To sign the word 'finish' to say that your are done with something, with your hand in front of your fingers apart and palms facing you, turn hands so that palms are facing away from you.";
        vid.src = "../ASL Videos/timewords/finishASL.mp4";
    }

    vid.load();
    document.getElementById("text-box").innerHTML = texttoshow;
}