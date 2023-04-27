export const checkForGames = () => {
  firebase.database().ref('games').get().then((snapshot) => {
    console.log(snapshot.val())
  }).catch((error) => {
    console.error(error);
  });
}

export const createGame = (gameName, name, char) => {
  playerRef = firebase.database().ref(`games/${gameName}/players/${playerId}`);

    playerRef.set({
      name: name,
      id: playerId,
      direction: "down",
      char: char,
      x:startingX,
      y:startingY,
      walking: "no",
      alive: true,
      votingCard: false,
      gun: false,
      flashlight: false,
      magnifyingGlass: false,
      halo: false,
      votes: 0,
      voteFor: "none",
      mafia: false,
    });

    allPlayersRef = firebase.database().ref(`games/${gameName}/players`);
    allVotingCardRef = firebase.database().ref(`games/${gameName}/votingCard`);
    allGunRef = firebase.database().ref(`games/${gameName}/gun`);
    allFlashlightRef = firebase.database().ref(`games/${gameName}/flashlight`);
    allMagnifyingGlassRef = firebase.database().ref(`games/${gameName}/magnifyingGlass`);
    allHaloRef = firebase.database().ref(`games/${gameName}/halo`);
    allVotesRef = firebase.database().ref(`games/${gameName}/votes`);

    //Remove me from Firebase when I diconnect
    playerRef.onDisconnect().remove();
}