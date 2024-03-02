function isValid() {
    if (firstName() && lastName() && eMail() && pHone() && userName() && passWord() && addRess() && citY() && statE() && countrY() && zipCode()
    
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
LastName.addEventListener('blur', lastName, false);
Phone.addEventListener('blur', pHone, false);
Email.addEventListener('blur', eMail, false);
UserName.addEventListener('blur', userName, false);
PassWord.addEventListener('blur', passWord, false);
Address.addEventListener('blur', addRess, false);
City.addEventListener('blur', citY, false);
State.addEventListener('blur', statE, false);
Country.addEventListener('blur', countrY, false);
ZipCode.addEventListener('blur', zipCode, false);
// First Name Field
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters.</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };


    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname)
};

// Last Name Field
function lastName() {
    var validLastname=false;

    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname==="null" || lastname==="" || lastname.length > 50) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters.</p>";
        console.log("Last name invalid - length")
    } else if(lastname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters")
    } else {
        validLastname = true;
        console.log("Last name valid")
    }

    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname)
};


// Email
function eMail() {
    var validEmail=false;
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>userEmail.length) {
        errorMessages += "<p>An email is required please include a @ or period in your email.</p>"
    } else {
        validEmail=true;
        console.log("Email Valid.")
    }

    document.getElementById("ewarning").innerHTML = errorMessages;

    return(validEmail)
}

// Phone
function pHone() {
    var validPhone=false;
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";
    if (isNaN(phone) || phone.length >15 || phone===null || phone ==="") {
        errorMessages += "<p> A phone number is required and cannot be greater than 15 characters with only numbers.</p>"
    } else {
        validPhone=true;
        console.log("Phone Valid.")
    }
    
    document.getElementById("phwarning").innerHTML = errorMessages;

    return(validPhone)
}

// Username
function userName() {
    var validUsername = false;

    var username = document.getElementById("UserName").value;
    var errorMessages = "";
    if (username==="null" || username==="" || username.length > 12) {
        errorMessages += "<p>A Username is required and cannot be greater than 12 characters.</p>";
        console.log("username invalid - length")
    } else {
        validUsername = true;
        console.log("Username valid")
    }

    document.getElementById("uname").innerHTML = errorMessages;

    return(validUsername)
}

// Password
function passWord() {
    var validPassword = false;

    var password = document.getElementById("PassWord").value; 
    var errorMessages = "";
    if (password==="null" || password==="" || password.length > 7) {
        errorMessages += "<p>A Password is required and cannot be greater than 7 characters.</p>";
        console.log("username invalid - length") 
    } else {
        validPassword = true;
        console.log("Password valid")
    }

    document.getElementById("passwarning").innerHTML = errorMessages;

    return(validPassword)
}

// Address
function addRess() {
    var validAddress=false;
    var address = document.getElementById("Address").value;
    var errorMessages = "";
    if (address===null || address ==="") {
        errorMessages += "<p> An address is required.</p>"
    } else {
        validAddress=true;
        console.log("Address Valid.")
    }
    
    document.getElementById("addwarning").innerHTML = errorMessages;

    return(validAddress)
}
// City
function citY() {
    var validCity=false;
    var city = document.getElementById("City").value;
    var errorMessages = "";
    if (city===null || city ==="") {
        errorMessages += "<p> A City is required.</p>"
    } else {
        validCity=true;
        console.log("City Valid.")
    }
    
    document.getElementById("citwarning").innerHTML = errorMessages;

    return(validCity)
}
// State
function statE() {
    var validState=false;
    var state = document.getElementById("State").value;
    var errorMessages = "";
    if (state==="000") {
        errorMessages += "<p> A State is required.</p>"
    } else {
        validState=true;
        console.log("State Valid.")
    }
    
    document.getElementById("stawarning").innerHTML = errorMessages;

    return(validState)
}
// Country
function countrY() {
    var validCountry=false;
    var country = document.getElementById("Country").value;
    var errorMessages = "";
    if (country==="000") {
        errorMessages += "<p> A country is required.</p>"
    } else {
        validCountry=true;
        console.log("Country Valid.")
    }
    
    document.getElementById("couwarning").innerHTML = errorMessages;

    return(validCountry)
}

// ZipCode
function zipCode() {
var country = document.getElementById("Country").value;
var zipCode = document.getElementById("ZipCode").value;
    var validZipCode=false;
    var errorMessages = "";

    if(country === "USA") {
       if(zipCode==="" || zipCode.length >= 6) {
        errorMessages += "<p>A zip is required cannot be greater than 5 characters.</p>";
        console.log("Zip code invalid - length")
       } else {
        validZipCode=true;
        console.log("Zip Code valid.")
    }     
    } else {
        validZipCode=true;
        console.log("Zip Code valid.")
    }
    document.getElementById("zwarning").innerHTML = errorMessages;

    return(validZipCode) 
}
