const walk = (xChange, yChange, key) => {
  if (heldKeys.indexOf(key) === 0) {
    let playerInNextSpace = false;
    const newX = players[playerId].x + xChange;
    const newY = players[playerId].y + yChange;
    if (xChange === 1 && (inRound || inLobby)) {
      players[playerId].direction = "right";
      //if (inRound) {
      //  if (players[playerId].flashlight && players[playerId].alive) {
      //    document.querySelector(".shadowBig").style.background = "url(images/maps/shadowRight.png)";
      //  }
      //  else if (players[playerId].alive) {
      //    document.querySelector(".shadow").style.background = "url(images/maps/shadowRight.png)";
      //  }
      //}
    }
    if (xChange === -1 && (inRound || inLobby)) {
      players[playerId].direction = "left";
      //if (inRound) {
      //  if (players[playerId].flashlight && players[playerId].alive) {
      //    document.querySelector(".shadowBig").style.background = "url(images/maps/shadowLeft.png)";
      //  }
      //  else if (players[playerId].alive) {
      //    document.querySelector(".shadow").style.background = "url(images/maps/shadowLeft.png)";
      //  }
      //}
    }
    if (yChange === -1 && (inRound || inLobby)) {
      players[playerId].direction = "up";
      //if (inRound) {
      //  if (players[playerId].flashlight && players[playerId].alive) {
      //    document.querySelector(".shadowBig").style.background = "url(images/maps/shadowUp.png)";
      //  }
      //  else if (players[playerId].alive) {
      //    document.querySelector(".shadow").style.background = "url(images/maps/shadowUp.png)";
      //  }
      //}
    }
    if (yChange === 1 && (inRound || inLobby)) {
      players[playerId].direction = "down";
      //if (inRound) {
      //  if (players[playerId].flashlight && players[playerId].alive) {
      //    document.querySelector(".shadowBig").style.background = "url(images/maps/shadowDown.png)";
      //  }
      //  else if (players[playerId].alive) {
      //    document.querySelector(".shadow").style.background = "url(images/maps/shadowDown.png)";
      //  }
      //}
    }
    //for (const player in players) {
    //  if (players[player].x === newX && players[player].y === newY && players[player].alive && players[playerId].alive) {
    //    playerInNextSpace = true;
    //  }
    //}
    //if (((!isSolid(newX, newY) && !playerInNextSpace) || (newX == 133 && newY == 11)) && (inRound || inLobby)) {
    //  //move to the next space
    //  players[playerId].x = newX;
    //  players[playerId].y = newY;
    //}
    playerRef.set(players[playerId]);
  }
  setTimeout(function() {
    const i = waitingKeys.indexOf(key);
    if (i > -1) {
      waitingKeys.splice(i, 1);
    }
    if (heldKeys.indexOf(key) !== -1){
      waitingKeys.unshift(key);
      walk(xChange, yChange, key);
    }
  }, 200);
}

export default walk