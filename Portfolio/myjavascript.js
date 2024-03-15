function isValid() {
    if(firstName() && messAge()
    
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
Message.addEventListener('blur', messAge, false);

function firstName(){
    var validFirstname=false;
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname==="null" || firstname==="" || firstname.length > 15 ) {
        errorMessages += "<p>Your name is required and cannot be greater than 15 characters.</p>";
        } 
        else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in your name (accepts only A-Z, a-z, and ,.'-)</p>";
        } 
        else 
        {
                validFirstname = true;
        };
        document.getElementById("fname").innerHTML = errorMessages;
        return(validFirstname)
}

function messAge(){
    var validMessage = false;
    var message = document.getElementById("Message").value;
    var errorMessages = "";

    if (message==="null" || message==="") {
        errorMessages += "<p>A message is required.</p>";
        } 
        else 
        {
                validMessage = true;
        };

        document.getElementById("messwarning").innerHTML = errorMessages;

        return(validMessage)
}
    
