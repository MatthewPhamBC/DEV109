function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);


    // UpLeft
    function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
    var lLine ="";
    for (i=0;i<pHeight;i++){
    lLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<=i;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    lLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    lLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    lLine +="</p>";
    }
    document.getElementById("upLeft").innerHTML = lLine;
    }
    
    // Down Left
    function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
    var lLine ="";
    for (i=pHeight;i > 0;i--){
    lLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    lLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    lLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    lLine +="</p>";
    }
    document.getElementById("downLeft").innerHTML = lLine;
    }
    
    // Down Right
    function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    rLine +="</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
    }

    // Up Right
    function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
        var rLine ="";
        for (i=0;i<pHeight;i++){
        rLine +="<p>";
        //Create each line on the Rhombus
        for(j=0;j<=i;j++){
        
        //Is the position even or odd so we change the color
        if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        
        }
        rLine +="</p>";
        }
        document.getElementById("upRight").innerHTML = rLine;
        }


}
