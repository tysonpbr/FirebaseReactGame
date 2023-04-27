import React from 'react'
import { checkForGames } from '../firebase'
import { Button } from '../components'

const JoinGame = ({ setGameType, setConfirmGame, name, char }) => {
  let games = checkForGames()

  return (
    <>
      <div className="flex justify-center gap-24 ">
        <Button text="GO BACK" onClick={() => setGameType("")} />
      </div>
    </>
  )
}

export default JoinGame