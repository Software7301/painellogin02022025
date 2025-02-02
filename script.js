// Script para alternar a visibilidade da senha
document.getElementById("toggleVisibility").addEventListener("click", function() {
    var passwordField = document.getElementById("password");
    var passwordType = passwordField.type;

    if (passwordType === "password") {
        passwordField.type = "text"; 
    } else {
        passwordField.type = "password"; 
    }
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Bem-vindo(a), " + email + "!";
    welcomeMessage.classList.add("show");
    setTimeout(function() {
        welcomeMessage.classList.remove("show");
    }, 5000);
});


window.onload = function() {
    var container = document.querySelector(".container");
    container.classList.add("show");
};
