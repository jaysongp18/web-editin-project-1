function validateData(event){
    // username
    var username = document.getElementById("username");
    var errorMsg = document.getElementById("error-msg");

    // email
    var email = document.getElementById("email");

    // password
    var password = document.getElementById("password");

    // confirm Password
    var confPw = document.getElementById("confirm");

    // Gender
    var male = document.getElementById("maleBtn");
    var female = document.getElementById("femaleBtn");

    // Agreement
    var cb = document.getElementById("checkBox");
    
    // validation username
    if(username.value.length < 3) {
        errorMsg.innerHTML = "Username must more than 3 characters";
        errorMsg.style.color = "red";
        event.preventDefault()
    }

    // validation email
    else if (!email.value.endsWith("@gmail.com")) {
        errorMsg.innerHTML = "Email must ends with @gmail.com";
        errorMsg.style.color = "red";
        event.preventDefault()
    }
    // Validation number
    

    // validation password
    else if (!isAlphaNum(password.value)) {
        errorMsg.innerHTML = "Password must be alpha numeric"
        errorMsg.style.color = "red";
        event.preventDefault()
    }

    // Confirm Password
    else if (password.value != confPw.value) {
        errorMsg.innerHTML = "Password and Confirm Password must be same"
        errorMsg.style.color = "red";
        event.preventDefault()
    }

    // Validation Gender
    else if (!male.checked && !female.checked) {
        errorMsg.innerHTML = "Gender must be checked!"
        errorMsg.style.color = "red";
        event.preventDefault()
    }

     // Validation Checkbox
     else if (!cb.checked) {
        errorMsg.innerHTML = "You must agree our Terms and Conditions"
        errorMsg.style.color = "red";
        event.preventDefault()
    }

    else {
        errorMsg.innerHTML = "";
        alert("Data successfully uploaded!")
        event.preventDefault()
    }
    
    return false
}

function isAlphaNum(password) {
    var isAlpha = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++){
        // 1. Alpha
        if (isNaN (password[i])) {
            isAlpha = true;
        }
        // 2. Number
        else {
            isNum = true;
        }
        // 3. Break
        if (isAlpha && isNum) {
            return true;
        }
    }
    return false;
}