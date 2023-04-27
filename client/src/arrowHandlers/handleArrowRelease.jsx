const handleArrowRelease = (key) => {
  const index = heldKeys.indexOf(key);
  if (index > -1) {
    heldKeys.splice(index, 1);
    console.log(heldKeys)
  }
  setTimeout(function() {
    if (heldKeys.length == 0){
      playerRef.update({
        walking: "no"
      });
    }
  }, 200);
}

export default handleArrowRelease