import { walk } from '../movement'

const handleArrowPress = (key) => {
  //if ((!inRound && !inLobby) || inTitleScreen) {
  //  return;
  //}
  playerRef.update({
    walking: "yes"
  });
  const index = heldKeys.indexOf(key);
  if (waitingKeys.indexOf(key) === -1) {
    waitingKeys.unshift(key);
    if (index === -1) {
      heldKeys.unshift(key);
      console.log(heldKeys) 
      console.log(waitingKeys)
    }
    if (key === "ArrowUp" || key === "KeyW"){
      walk(0, -1, key);
    }
    if (key === "ArrowDown" || key === "KeyS"){
      walk(0, 1, key);
    }
    if (key === "ArrowLeft" || key === "KeyA"){
      walk(-1, 0, key);
    }
    if (key === "ArrowRight" || key === "KeyD"){
      walk(1, 0, key);
    }
  }
}

export default handleArrowPress