allPlayersRef.on("value", (snapshot) => {
  //Fires whenever a change occurs
  players = snapshot.val() || {};
  Object.keys(players).forEach((key) => {
    const characterState = players[key];
    let el = playerElements[key];
    // Now update the DOM
    el.setAttribute("data-char", characterState.char);
    el.setAttribute("data-direction", characterState.direction);
    el.setAttribute("data-walking", characterState.walking);
    const left = 16 * (characterState.x - players[playerId].x + 12) + "px";
    const top = 16 * (characterState.y - players[playerId].y + 7) - 1 + "px";

    if (inRound) {
      if (players[playerId].alive && players[key].alive) {
        el.style.transform = `translate3d(${left}, ${top}, 0)`;
      }
      else if (!players[playerId].alive) {
        el.style.transform = `translate3d(${left}, ${top}, 0)`;
      }
    }
    else {
      el.style.transform = `translate3d(${left}, ${top}, 0)`;
    }

    if (players[playerId].alive && players[playerId].alive)

    if (!inRound && !inLobby) {
      const voteCounter = document.querySelector(".user-" + key);
      if (voteCounter) {
        voteCounter.innerHTML = `${players[key].votes}`;
      }
      const skipButtonCounter = document.querySelector(".skipButtonCounter");
      if (skipButtonCounter) {
        let numSkip = 0;
        Object.keys(players).forEach((key) => {
          if (players[key].voteFor === "skip") {
            numSkip++;
          }
        });
        skipButtonCounter.innerHTML = `${numSkip}`;
      }
    }

    if (key == playerId) {

      if (inMafiaVoting) {
        checkMafiaVoting();
      }

      if (inAngelVoting) {
        checkAngelVoting();
      }

      if (inDetectiveVoting) {
        checkDetectiveVoting();
      }

      if (inShooterVoting) {
        checkShooterVoting();
      }

      if (inTownVoting) {
        checkTownVoting();
      }

      if (players[playerId].alive) {
        attemptGrabVotingCard(players[playerId].x, players[playerId].y);
        attemptGrabGun(players[playerId].x, players[playerId].y);
        attemptGrabFlashlight(players[playerId].x, players[playerId].y);
        attemptGrabMagnifyingGlass(players[playerId].x, players[playerId].y);
        attemptGrabHalo(players[playerId].x, players[playerId].y);
      }

      const ML = ((133 - players[playerId].x) * 16) + 'px';
      const MT = ((17 - players[playerId].y) * 16) + 'px';

      document.querySelector(".mapUpper").style.transform = `translate3d(${ML}, ${MT}, 0)`;
      document.querySelector(".mapLower").style.transform = `translate3d(${ML}, ${MT}, 0)`;


      Object.keys(players).forEach((key) => {
        if ((players[key].x !== 133 || players[key].y !== 11) && inLobby && notified && !blockNextNotification) {
          notified = false;
        }
      });

      if (players[playerId].x === 133 && players[playerId].y === 11) {
        let allPlayersHere = true;
        let playerCount = 0;
        Object.keys(players).forEach((key) => {
          if (players[key].x !== 133 || players[key].y !== 11) {
            allPlayersHere = false;
          }
          playerCount++;
        });
        if (allPlayersHere && inLobby) {
          if (false) {//playerCount < 4) {
            if (!notified) {
              notified = true;
              blockNextNotification = true;
              const notEnoughPlayers = document.createElement("div");
              notEnoughPlayers.classList.add("notification");
              notEnoughPlayers.innerHTML = `THERE CAN BE NO FEWER THAN 4 PLAYERS TO START A GAME`;
              document.querySelector(".gameInterface").appendChild(notEnoughPlayers);
              
              setTimeout(function () {
                notEnoughPlayers.classList.add("notificationClose");
                notEnoughPlayers.classList.remove("notification");
              }, 4000);

              setTimeout(function () {
                notEnoughPlayers.remove();
                blockNextNotification = false;
              }, 5000);
            }
          }
          else if (playerCount > 12) {
            if (!notified) {
              notified = true;
              blockNextNotification = true;
              const tooManyPlayers = document.createElement("div");
              tooManyPlayers.classList.add("notification");
              tooManyPlayers.innerHTML = `THERE CAN BE NO MORE THAN 12 PLAYERS TO START A GAME`;
              document.querySelector(".gameInterface").appendChild(tooManyPlayers);
      
              setTimeout(function () {
                tooManyPlayers.classList.add("notificationClose");
                tooManyPlayers.classList.remove("notification");
              }, 4000);

              setTimeout(function () {
                tooManyPlayers.remove();
                blockNextNotification = false;
              }, 5000);
            }
          }
          else {
            inLobby = false;
            teleportTo(85,60);
            firstRound();
            setTimeout(function() {
              if (!inRound) {
                startRound();
              }
            }, 800);
          }
        }
      }
    }
  });
  Object.keys(votingCards).forEach((key) => {
    let el = votingCardElements[key]
    const left = 16 * (votingCards[key].x - players[playerId].x + 12) + "px";
    const top = 16 * (votingCards[key].y - players[playerId].y + 7) + "px";
    el.style.transform = `translate3d(${left}, ${top}, 0)`;
  });
  Object.keys(guns).forEach((key) => {
    let el = gunElements[key]
    const left = 16 * (guns[key].x - players[playerId].x + 12) + "px";
    const top = 16 * (guns[key].y - players[playerId].y + 7) + "px";
    el.style.transform = `translate3d(${left}, ${top}, 0)`;
  });
  Object.keys(flashlights).forEach((key) => {
    let el = flashlightElements[key]
    const left = 16 * (flashlights[key].x - players[playerId].x + 12) + "px";
    const top = 16 * (flashlights[key].y - players[playerId].y + 7) + "px";
    el.style.transform = `translate3d(${left}, ${top}, 0)`;
  });
  Object.keys(magnifyingGlasses).forEach((key) => {
    let el = magnifyingGlassElements[key]
    const left = 16 * (magnifyingGlasses[key].x - players[playerId].x + 12) + "px";
    const top = 16 * (magnifyingGlasses[key].y - players[playerId].y + 7) + "px";
    el.style.transform = `translate3d(${left}, ${top}, 0)`;
  });
  Object.keys(halos).forEach((key) => {
    let el = haloElements[key]
    const left = 16 * (halos[key].x - players[playerId].x + 12) + "px";
    const top = 16 * (halos[key].y - players[playerId].y + 7) + "px";
    el.style.transform = `translate3d(${left}, ${top}, 0)`;
  });
});

allPlayersRef.on("child_added", (snapshot) => {
  //Fires whenever a new node is added the tree
  const addedPlayer = snapshot.val();
  const characterElement = document.createElement("div");
  characterElement.classList.add("Character", "grid-cell");
  if (addedPlayer.id === playerId) {
    characterElement.classList.add("you");
  }
  characterElement.innerHTML = (`
    <div class="Character_shadow grid-cell"></div>
    <div class="Character_sprite grid-cell"></div>
    <div class="Character_you-arrow"></div>
  `);
  playerElements[addedPlayer.id] = characterElement;

  //Fill in some initial state
  characterElement.setAttribute("data-char", addedPlayer.char);
  characterElement.setAttribute("data-direction", addedPlayer.direction);
  characterElement.setAttribute("data-walking", addedPlayer.walking);
  const left = 16 * 12 + "px";
  const top = 16 * 7 - 1 + "px";
  characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;
  gameContainer.appendChild(characterElement);
});

//Remove character DOM element after they leave
allPlayersRef.on("child_removed", (snapshot) => {
  const removedKey = snapshot.val().id;
  gameContainer.removeChild(playerElements[removedKey]);
  delete playerElements[removedKey];
});