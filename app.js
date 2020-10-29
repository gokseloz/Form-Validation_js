function firstNameValidation() {
    var fname = document.getElementById("firstName").value
    var regexfname = /[A-Za-z\s\'\-]{2,15}$/
    if (regexfname.test(fname)) {
        document.getElementById("firstNamePrompt").innerHTML = "valid"
        document.getElementById("firstNamePrompt").style.cssText = "color:green; font-weight:bold"


    } else {
        document.getElementById("firstNamePrompt").innerHTML = "enter 2-15 characters"
        document.getElementById("firstNamePrompt").style.cssText = "color:red; font-weight:bold"

    }
}

function lastNameValidation() {
    var lname = document.getElementById("lastName").value
    var regexlname = /[A-Za-z\s\'\-]{2,25}$/
    if (regexlname.test(lname)) {
        document.getElementById("lastNamePrompt").innerHTML = "valid"
        document.getElementById("lastNamePrompt").style.cssText = "color:green; font-weight:bold"

        return true
    } else {
        document.getElementById("lastNamePrompt").innerHTML = "enter 2-25 characters"
        document.getElementById("lastNamePrompt").style.cssText = "color:red; font-weight:bold"
        return false
    }
}

function phoneNumberValidation() {
    var phoneNumber = document.getElementById("phoneNumber").value
    var regexphoneNumber = /\d{3}[\-]\d{4}[\-]\d{5}/
    if (regexphoneNumber.test(phoneNumber)) {
        document.getElementById("phonePrompt").innerHTML = "valid"
        document.getElementById("phonePrompt").style.cssText = "color:green; font-weight:bold"
    } else {
        document.getElementById("phonePrompt").innerHTML = " unvalid pattern"
        document.getElementById("phonePrompt").style.cssText = "color:red; font-weight:bold"
    }
}


function callOrder() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var userName = fname + " " + lname;
    var Phone = document.getElementById("phoneNumber").value;
    var quantity = document.getElementById("orderQuantity").value;
    var price = document.getElementById("itemPrice").value;
    
    document.getElementById("sumHeader").innerHTML = "Order Summary:";
    document.getElementById("sumUserName").innerHTML = userName.toUpperCase();
    document.getElementById("sumPhone").innerHTML = Phone ;
    document.getElementById("sumPrice").innerHTML = "Order Total:" + "$" + price*quantity ;

}

