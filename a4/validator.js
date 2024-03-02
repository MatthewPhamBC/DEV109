function isValid() {
    if (firstName() && lastName() && eMail() && pHone() && userName() && passWord() && zipCode()
    
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
LastName.addEventListener('blur', lastName, false);
PHOne.addEventListener('blur', pHone, false);
EMAil.addEventListener('blur', eMail, false);
UserName.addEventListener('blur', userName, false);
PassWord.addEventListener('blur', passWord, false);
zipCode.addEventListener('blur', zipCode, false);
// First Name Field
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
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
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>userEmail.length) {
        errorMessages += "<p>Invalid Email.</p>"
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
    var phone = document.getElementById("phone").value;
    var errorMessages = "";
    if (isNaN(phone) || phone.length >15 || phone===null || phone ==="") {
        errorMessages += "<p> Invalid phone number.</p>"
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
        errorMessages += "<p>The username is required and cannot be greater than 12 characters.</p>";
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
        errorMessages += "<p>The username is required and cannot be greater than 7 characters.</p>";
        console.log("username invalid - length") 
    } else {
        validPassword = true;
        console.log("Password valid")
    }

    document.getElementById("passwarning").innerHTML = errorMessages;

    return(validPassword)
}

// ZipCode
function zipCode() {
var country = document.getElementById("Country").value;
var zipCode = document.getElementById("ZipCode").value;
    var validZipCode=false;
    var errorMessages = "";

    if(country === "USA") {
       if(zipCode === "null" || zipCode==="" || zipCode.length >= 6 || zipCode.length <= 4) {
        errorNessage += "<p>A zip is required and has to be 5 characters.</p>";
        console.log("Zip code invalid - length")
       } else {
        validZipCode=true;
        console.log("Zip Code valid.")
    }    
    } 
    document.getElementById("zwarning").innerHTML = errorMessages;

    return(validZipCode) 
}
