function showErrorIcon(id, icon) {
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).setAttribute("src","images/error-icon.svg");
    document.getElementById(icon).style.opacity = "1";
}

function showCheckIcon(id, icon, msgId) {
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.borderWidth = "2px";
    document.getElementById(icon).setAttribute("src","images/success-icon.svg");
    document.getElementById(icon).style.opacity = "1";
    document.getElementById(msgId).style.opacity = "0";
}

function showErrorMessage(id, msg){
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.opacity = "0.8";
}

function passLenValidation(password){
    var pass_length = password.length;
    if (pass_length < 8){
        return true;
    }
    return false;
}

function validateForm() {
    var a = document.forms["myForm"]["name"].value;
    var b = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["password"].value;
    var d = document.forms["myForm"]["pass_confirmation"].value;
    var isValid;
    const regexName = new RegExp(/\d/gm)
    // name validation
    if (a == null || a == "") {
        showErrorIcon("name", "iconName");
        showErrorMessage("nameMsg", "Rellene este campo")
        isValid = false;
    }else if(regexName.test(a)){
        showErrorIcon("name", "iconName");
        showErrorMessage("nameMsg", "Nombre no válido")
        isValid = false;
    }else{
        showCheckIcon("name", "iconName","nameMsg")
    }   

    // email validation
    if(b == null || b == ""){
        showErrorIcon("email", "iconEmail");
        showErrorMessage("emailMsg", "Rellene este campo")
        isValid = false;
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b)){
        showErrorIcon("email", "iconEmail");
        isValid = false;
    }else{
        showCheckIcon("email", "iconEmail","emailMsg")

    }
    // pass validation
    if(c == null || c == ""){  
        showErrorIcon("password", "iconPass")
        showErrorMessage("passMsg", "Rellene este campo")
        isValid = false;
    }else if(passLenValidation(c)){
        showErrorIcon("password", "iconPass")
        showErrorMessage("passMsg", "Debe tener al menos 8 caracteres")
        isValid = false;
    } else {
        showCheckIcon("password", "iconPass","passMsg")
    }
    // pass confirmation validation
    if(d == null || d == ""){
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Rellene este campo")
        isValid = false;
    }else if(passLenValidation(d)){
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Debe tener al menos 8 caracteres")
        isValid = false;
    } else if(c !== d) {
        showErrorIcon("pass_confirmation", "iconPassConf")
        showErrorMessage("passConfMsg", "Las contraseñas no coinciden")
        isValid = false;
    } else {
        showCheckIcon("pass_confirmation", "iconPassConf","passConfMsg")
    }

    if(isValid == false){
        return false;
    }
}