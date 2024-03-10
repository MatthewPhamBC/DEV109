i = 0;
myImages = ["https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?cs=srgb&dl=pexels-broderick-armbrister-6462662.jpg&fm=jpg", 
"https://cdn.pixabay.com/photo/2023/05/05/04/38/ai-generated-7971480_1280.png", "https://images.pexels.com/photos/3972750/pexels-photo-3972750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
"https://media.sketchfab.com/models/ff8fb2251dfa4bb9979e7022c5a6666c/thumbnails/5d94951eea044d9b92596e176378a968/f8a32c8c1ea440799bfc1c22dae22369.jpeg", "https://images1.the-dots.com/3420977/poast-this-one-only-the-best.png?p=projectImageFullJpg"];
myPhrases = ["lamborghini ", "bugatti", "Lexus", "Nissan", "Mclaren"];
window.setInterval(repeat, 6000);

function repeat(){
    window.setInterval(showPhrases, 5000, i++);
}

var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", function() {
    showPhrases(i--)
});

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
        showPhrases(i++);
});

function showPhrases(){
    if(i < myPhrases.length)  
    { 
    if(i < 0){
        i = 0
    } 
    else {
        document.getElementById("Phrases").innerHTML = "<h1>" + myPhrases[i] + "</h1>";
        document.getElementById("newImages").src=myImages[i];
    }
        
    }
    else {
    i = 0;
    }
} 
