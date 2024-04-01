function instruction(selected) {
    let vid = document.getElementById("video-box");

    if (selected == 'hello')
    {
        texttoshow = "To say 'Hello' start by place an open hand by your ear. Then move you hand forward away from your head.";
        vid.src = "phraseVideos/HelloASL.mp4";
    }
    else if (selected == 'goodbye')
    {
        texttoshow = "To say 'Goodbye' start by placing an open hand next to your face. Then close and open your hand.";
        vid.src = "phraseVideos/goodbyeASL.mp4";
    }
    else if (selected == 'thank you')
    {
        texttoshow = "To say 'Thank you.' start by placing the finger tips of you dominant hand near your mouth. While keeping you hand open, move your hand away from your mouth.";
        vid.src = "phraseVideos/thankyouASL.mp4";
    }
    else if (selected == 'your welcome')
    {
        texttoshow = "To say 'Your Welcome' use your dominant hand and with your fingers closed place your hand so that your index finger is touching your chin. Next, curve your hand down and outward until it touches your chest.";
        vid.src = "phraseVideos/yourWelcomeASL.mp4";
    }
    else if (selected == 'sorry')
    {
        texttoshow = "To say 'Sorry' start by signing the letter 'A'. Next, place your hand to your chest and move it in a clockwise circular motion a couple of times.";
        vid.src = "phraseVideos/sorryASL.mp4";
    }
    else if (selected == 'excuse me')
    {
        texttoshow = "To say 'Excuse me' start by placing one hand palm up in front of you. Next, slide the fingertips of your other hand forward starting from the palm of your hand. Repeat a couple of times.";
        vid.src = "phraseVideos/excuseMeASL.mp4";
    }
    else if (selected == 'good morning')
    {
        texttoshow = "To say 'Good Morning!' start by placing an open hand with the palm facing your body on your chin. Next, move your hand outwards. This is the sign for 'good'. To say 'morning' place your left arm horizontally in front of you and stretch your right arm out. Next, raise your right arm up towards you. This is the sign for 'morning'.";
        vid.src = "phraseVideos/goodMorningASL.mp4";
    }
    else if (selected == 'good afternoon')
    {
        texttoshow = "To say 'Good Afternoon!' start by placing an open hand with the palm facing your body on your chin. Next, move your hand outwards. This is the sign for 'good'. To say 'morning' place your left arm horizontally in front of you and your right arm bent 90 degrees with your right hand facing the cieling. Next, lower your right hand. This is the sign for 'afternoon'.";
        vid.src = "phraseVideos/goodAfternoonASL.mp4";
    }
    vid.load();
    document.getElementById("text-box").innerHTML = texttoshow;
}