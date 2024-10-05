function showMessage() {
    var message = document.getElementById("special-message");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        message.style.display = "block";
    } else {
        message.classList.add("hidden");
        message.style.display = "none";
    }
}
window.addEventListener("load", function() {
    var audio = document.getElementById("background-music");
    audio.play().catch(function(error) {
        console.log("El navegador impidió la reproducción automática: ", error);
    });
});
