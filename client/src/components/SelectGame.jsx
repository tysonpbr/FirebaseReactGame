import React, { useState } from 'react'
import { CreateGame, JoinGame, Button } from '.'

const SelectGame = ({ setAlertGameName, setConfirmGameName, setConfirmGame, setMenuState, name, char }) => {
  const [gameType, setGameType] = useState("")

  return (
    <div className="pt-[180px]">
      {(() => {
        switch (gameType) {
          case "join":
            return <JoinGame setGameType={setGameType} setConfirmGame={setConfirmGame} name={name} char={char} />
          case "create":
            return <CreateGame setGameType={setGameType} setAlertGameName={setAlertGameName} setConfirmGameName={setConfirmGameName} name={name} char={char} />
          default:
            return (
              <div className="flex justify-center gap-24 ">
                <Button text="GO BACK" setState={setMenuState} set={"selectCharAndName"} />
                <Button text="Join Game" setState={setGameType} set={"join"} />
                <Button text="Create Game" setState={setGameType} set={"create"} />
              </div>
            )
        }
      })()}
    </div>
  )
}

export default SelectGame