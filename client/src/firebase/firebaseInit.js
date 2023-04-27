firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    playerId = user.uid;
  }
});

firebase.auth().signInAnonymously().catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
});
