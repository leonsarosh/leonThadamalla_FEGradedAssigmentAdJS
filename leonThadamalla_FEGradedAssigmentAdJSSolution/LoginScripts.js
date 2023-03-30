
localStorage.setItem(`username`, "leonsarosh");
localStorage.setItem(`password`, "12345678");

function valFunct() {

    var inputUsername = document.querySelector("#input_username");
    var inputPassword = document.querySelector("#input_password");
    var errorMsg = document.querySelector(".error_msg");

    if (inputUsername.value !== localStorage.getItem(`username`) || inputPassword.value !== localStorage.getItem(`password`)) {
        errorMsg.style.display = "inline-block";
        return false;
    } else {
        return true;
    }

}