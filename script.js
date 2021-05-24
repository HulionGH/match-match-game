document.body.onload = addElement;
  let headerDiv = newDiv = null;
  let user_name = null;

  function addElement() {
    var headerDiv = document.createElement("header");
    headerDiv.innerHTML = "<h1>Welcome to Match-Match-Game</h1>";
    var newDiv = document.createElement("div");
    newDiv.className = "about_game";
    newDiv.innerHTML =
      "<strong>Hello, dear friend! Let me introduce our short rules ; )</strong> 1. Register as a new player in game.<br> 2. Configure your game settings. <br> 3. Start you new game! Remember card positions and match it before times up. ";
  
      document.body.prepend(headerDiv);
      document.body.append(newDiv);
    }