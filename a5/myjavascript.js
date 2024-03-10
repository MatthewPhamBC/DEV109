i = 0;
myImages = ["https://static.vecteezy.com/system/resources/thumbnails/020/336/375/small/nike-logo-nike-icon-free-free-vector.jpg", 
"https://www.shutterstock.com/image-vector/valencia-spain-april-25-2023-600nw-2293213071.jpg", "https://static.vecteezy.com/system/resources/thumbnails/010/994/431/small_2x/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg", 
"https://seeklogo.com/images/N/New_Balance-logo-F34722CB97-seeklogo.com.png", "https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg"];
myPhrases = ["Nike", "Adidas", "Puma", "NewBalance", "Reebok"];
window.setInterval(showPhrases, 2000);

function showPhrases(){
        if (i < myPhrases.length)  
        { document.getElementById("Phrases").innerHTML = "<h1>" + myPhrases[i] + "</h1>";
        i++;}
        else 
        i = 0;
}
