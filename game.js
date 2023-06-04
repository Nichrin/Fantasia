function logout() {
    room = document.getElementById("")
    window.location ="index.html"
}
function next() {
    game = document.getElementById("enter").value;
    localStorage.setItem("Game_bot",game);
    window.location = "bot.html"
}
function food() {
    game = document.getElementById("place").value;
    localStorage.setItem("Restaurant_bot",game);
    window.location = "food.html"
}
function hacks() {
    game = document.getElementById("take").value;
    localStorage.setItem("Hacking_bot",game);
    window.location = "hack.html"
}
function cures() {
    game = document.getElementById("cures").value;
    localStorage.setItem("Doctor_bot",game);
    window.location = "cure.html"
}
function argues() {
    game = document.getElementById("argues").value;
    localStorage.setItem("Lawyer_bot",game);
    window.location = "argue.html"
}