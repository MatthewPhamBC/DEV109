function isValid(){
    if(firstName() && messAge()
    
    )
    return true
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
Message.addEventListener('blur', messAge, false);

function firstName(){
    var validFirstName=false;

    var firstname = document.getElementById("FirstName").value;
    var errorMessage = "";

    if(firstname==="null" || firstname==="" || firstname.length > 15 ) {
        errorMessages += "<p>The name field is required and cannot be greater than 15 characters.</p>";
        console.log("Name is invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("Name valid")
        };

        document.getElementById("fname").innerHTML = errorMessage;

        return(validFirstname)
}

    
