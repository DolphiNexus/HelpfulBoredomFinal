var activity = ["Volunteer at a Homeless Shelter", 
                "Park Clean Up", 
                "Beach Clean Up",
                "Tutor",
                "Go for a Walk",
                "Learn Something New",
                ]

var image = ["https://voiceofoc.org/wp-content/uploads/2018/03/tent1_t800EDIT-1170x658.jpg", 
            "Park Clean Up", 
            "Beach Clean Up",
            "Tutor",
            "Go for a Walk",
            "Learn Something New",
            ]

function changeElements() {
    var randomize = Math.floor(Math.random()*activity.length);
    var randomActivity = activity[randomize];
    var randomImage = image[randomize];
    document.getElementById("activity").innerHTML = randomActivity;
    document.getElementById("image").src = randomImage;
}

function clear() {
    location.reload();
}