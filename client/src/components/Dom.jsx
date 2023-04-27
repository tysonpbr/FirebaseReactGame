import React, { useState } from 'react'
import { handleArrowPress, handleArrowRelease } from '../arrowHandlers'
import { KeyPressListener, KeyReleaseListener } from '../keyListeners'

const Dom = () => {
  new KeyPressListener("ArrowUp", () => handleArrowPress("ArrowUp"))
  new KeyPressListener("ArrowDown", () => handleArrowPress("ArrowDown"))
  new KeyPressListener("ArrowLeft", () => handleArrowPress("ArrowLeft"))
  new KeyPressListener("ArrowRight", () => handleArrowPress("ArrowRight"))
  new KeyPressListener("KeyW", () => handleArrowPress("KeyW"))
  new KeyPressListener("KeyS", () => handleArrowPress("KeyS"))
  new KeyPressListener("KeyA", () => handleArrowPress("KeyA"))
  new KeyPressListener("KeyD", () => handleArrowPress("KeyD"))

  new KeyReleaseListener("ArrowUp", () => handleArrowRelease("ArrowUp"))
  new KeyReleaseListener("ArrowDown", () => handleArrowRelease("ArrowDown"))
  new KeyReleaseListener("ArrowLeft", () => handleArrowRelease("ArrowLeft"))
  new KeyReleaseListener("ArrowRight", () => handleArrowRelease("ArrowRight"))
  new KeyReleaseListener("KeyW", () => handleArrowRelease("KeyW"))
  new KeyReleaseListener("KeyS", () => handleArrowRelease("KeyS"))
  new KeyReleaseListener("KeyA", () => handleArrowRelease("KeyA"))
  new KeyReleaseListener("KeyD", () => handleArrowRelease("KeyD"))


  return (
    <>
      <div></div>
    </>
  )
}

export default Dom