function instruction(selected) {
    let vid = document.getElementById("video-box");

    if (selected == 'mom') {
        texttoshow = "To sign the word 'mom', place the thumb of your dominant hand to your chin while keeping your hand open.";
        vid.src = "../ASL Videos/familywords/momASL.mp4"
    }
    else if (selected == 'dad') {
        texttoshow = "To sign the word 'dad', place the thumb of your dominant hand to your forehead while keeping your hand open.";
        vid.src = "../ASL Videos/familywords/dadASL.mp4"
    }
    else if (selected == 'boy') {
        texttoshow = "To sign the word 'boy', make a 'C' shape with your hand a place it in front of your forehead. Next, close your fingers together like your grabbing the brim of a hat.";
        vid.src = "../ASL Videos/familywords/boyASL.mp4"
    }
    else if (selected == 'girl') {
        texttoshow = "To sign the word 'girl', sign the letter 'a' and place your hand under your ear. Next, slide your hand along your jawline to your chin.";
        vid.src = "../ASL Videos/familywords/girlASL.mp4"
    }
    else if (selected == 'brother') {
        texttoshow = "To sign the word 'brother', sign the letter 'L' and place your hand in front of your forehead. Have your other hand pointing your pointer finger away from you. Next, move your hand by your forehead down to your other hand while at the same time signing from a letter 'L' to a 1.";
        vid.src = "../ASL Videos/familywords/brotherASL.mp4"
    }
    else if (selected == 'sister') {
        texttoshow = "To sign the word 'sister', sign the letter 'L' and place your hand in front of your chin. Have your other hand pointing your pointer finger away from you. Next, move your hand by your forehead down to your other hand while at the same time signing from a letter 'L' to a 1.";
        vid.src = "../ASL Videos/familywords/sisterASL.mp4"
    }
    else if (selected == 'grandma') {
        texttoshow = "To sign the word 'grandma', place the thumb of your dominant hand on your chin while keeping your hand open. Next, move your hand forward with 2 arches.";
        vid.src = "../ASL Videos/familywords/grandmaASL.mp4"
    }
    else if (selected == 'grandpa') {
        texttoshow = "To sign the word 'grandpa', place the thumb of your dominant hand on your forehead while keeping your hand open. Next, move your hand forward with 2 arches.";
        vid.src = "../ASL Videos/familywords/grandpaASL.mp4"
    }
    else if (selected == 'aunt') {
        texttoshow = "To sign the word 'aunt', sign the letter 'a' and place your hand by your ear. Next, shake your hand a couple of times.";
        vid.src = "../ASL Videos/familywords/auntASL.mp4"
    }
    else if (selected == 'uncle') {
        texttoshow = "To sign the word 'uncle', sign the letter 'U' and place your hand by your ear. Next, shake your hand a couple of times.";
        vid.src = "../ASL Videos/familywords/uncleASL.mp4"
    }
    else if (selected == 'baby') {
        texttoshow = "To sign the word 'baby', pretend you are cradling a baby.";
        vid.src = "../ASL Videos/familywords/babyASL.mp4"
    }

    vid.load();
    document.getElementById("text-box").innerHTML = texttoshow;
}