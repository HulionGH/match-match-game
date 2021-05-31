document.body.onload = addElement;
var headerDiv = null;
var user_name = null;
function addElement() {
    var headerDiv = document.createElement("header");
    headerDiv.innerHTML = "<h1>Welcome to Match-Match-Game</h1>";
    var newDiv = document.createElement("div");
    newDiv.className = "about_game";
    newDiv.innerHTML =
        "<strong>Hello, dear friend! ABOUT GAME: </strong> <hr> 1. Register as a new player in game.<br> 2. Configure your game settings. <br> 3. Start you new game! Remember card positions and match it before times up.<hr>  <strong>LET'S START</strong>";
    var registerUserBtn = document.createElement("button");
    registerUserBtn.className = "register_user";
    registerUserBtn.innerHTML =
        "<strong>Register as new Player</strong>";
    document.body.prepend(headerDiv);
    document.body.append(newDiv);
    document.body.append(registerUserBtn);
}
