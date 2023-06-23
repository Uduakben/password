const passwordInput = document.getElementById("password");
const length = 14;

capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
smallLetters = "abcdefghijklmnopqrstuvwxyz"
numbers= "0123456789";
symbols = "~!@#$%^&*()_+"

const combine = capLetters + smallLetters + numbers + symbols


function generatePassword(){
    let password = "";

    password += capLetters[Math.floor(Math.random() * capLetters.length)];
    password += smallLetters[Math.floor(Math.random() * smallLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += combine[Math.floor(Math.random() * combine.length)];
    }

    passwordInput.value = password;

}

function copyPassword(){
    passwordInput.select();
    document.execCommand("copy");
}