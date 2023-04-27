import React, { useState } from 'react'
import { createGame } from '../firebase'
import { Button } from '../components'

const CreateGame = ({ setGameType, setAlertGameName, setConfirmGameName, name, char }) => {
  const [gameName, setGameName] = useState("")

  const checkGameName = () => {
    if (gameName == "") {
      setAlertGameName(true)
    }
    else {
      createGame(gameName, name, char)
      setConfirmGameName(true)
    }
  }

  return (
    <>
      <div className="flex justify-center gap-24 ">
        <Button text="GO BACK" onClick={() => setGameType("")} />
        <input onChange={(e) => setGameName(e.target.value)} type="text" className='w-[340px] h-[80px] text-center text-[24px] border-8 border-[#242998] self-center' placeholder="GAME NAME" />
        <Button text="CONFIRM" onClick={() => checkGameName()} />
      </div>
    </>
  )
}

export default CreateGame