var activity = ["Volunteer at a Homeless Shelter", 
                "Park Clean Up", 
                "Tutor",
                "Go for a Walk",
                "Learn Something New",
                "Take Time to Recycle",
                ];

var image = ["https://voiceofoc.org/wp-content/uploads/2018/03/tent1_t800EDIT-1170x658.jpg", 
            "http://www.local79.org/wp-content/uploads/2015-Park-lLeanup-9.jpg", 
            "https://goingivy.com/wp-content/uploads/2017/06/Spanish-Tutor.jpg",
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunset-walk-with-friends-nikolyn-mcdonald.jpg",
            "https://media.boingboing.net/wp-content/uploads/2015/05/lean.jpg",
            "https://www.plasticsmakeitpossible.com/wp-content/uploads/2015/09/Screen-Shot-2016-10-03-at-5.15.37-PM.png",
          ];

var description = ["Helping those in need is always something beneficial for society! Whether it's working at a soup kitchen or volunteering at a donation center, any help would be great!",
                    "Parks are meant to be for the community and should be kept clean in order to maintain the amximum enjoyment. Anyone could go to their local park and begin to clean up pieces of trash they find.",
                    "If you have a lot of knowledge, why not pass that knowledge to someone else? You can either volunteer or earn money from tutoring a person.",
                    "Taking walks is healthy for any person. Sometimes it's nice to take some time for yourself and take a walk.",
                    "If you have a lot of time, try learning something new! Anyone can pretty much learn anything for free.",
                    "Recycling allows for certain materials to be reused, limiting the overall garbage that has been building up. Recycling lowers production of material, which typically produces substantial amounts of gases, and helps to keep the Earth clean!"
                    ];

var type = ["church", "park", "school", "park", "school"];

// For element changes
function changeElements() {
    var randomize = Math.floor(Math.random()*activity.length);
    var randomActivity = activity[randomize];
    var randomImage = image[randomize];
    var randomDescription = description[randomize];
    document.getElementById("activity").innerHTML = randomActivity;
    document.getElementById("image").src = randomImage;
    document.getElementById("description").innerHTML = randomDescription;
}

