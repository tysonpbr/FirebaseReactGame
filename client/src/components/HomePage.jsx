import React, { useState } from 'react'
import { Button, Confirmation, Alert, SelectGame, SelectCharAndName } from '../components'

const HomePage = ({ setPlaying }) => {
  const [confirm, setConfirm] = useState(false);
  const [alertName, setAlertName] = useState(false)
  const [alertGameName, setAlertGameName] = useState(false)
  const [menuState, setMenuState] = useState("")
  const [confirmGameName, setConfirmGameName] = useState(false)
  const [confirmGame, setConfirmGame] = useState(false)
  const [name, setName] = useState("")
  const [player, setPlayer] = useState(0)

  return (
    <>
      <div className="w-[1200px] h-[624px] bg-[url('./assets/startScreen/startScreenStill.png')] bg-cover pt-[20px] absolute">
        <div className="w-[1200px] h-[300px] flex flex-col gap-4">
          {(() => {
            switch (menuState) {
              case "selectCharAndName":
                return <SelectCharAndName name={name} setName={setName} player={player} setPlayer={setPlayer} setConfirm={setConfirm} setAlertName={setAlertName}/>
              case "SelectGame":
                return <SelectGame name={name} char={player} setAlertGameName={setAlertGameName} setConfirmGameName={setConfirmGameName} setConfirmGame={setConfirmGame} setMenuState={setMenuState} />
              default:
                return (
                  <div className="w-[1200px] h-[300px] bg-[url('./assets/startScreen/gameTitle.png')] bg-cover flex justify-center pt-[150px]">
                    <Button setState={setMenuState} set={"selectCharAndName"} text="START" />
                  </div>
                )
            }
          })()}
        </div>
        <div className="w-[1200px] h-[120px] pt-[155px] self-end absolute">
          <div className="w-[1200px] h-[120px] bg-[url('./assets/startScreen/startScreenScroll.png')] bg-cover animate-startScreenScroll" />
        </div>
      </div>
      {confirm
        ? <Confirmation 
            text="ARE YOU SURE YOU WANT TO SELECT THIS NAME AND SKIN?"
            setYes={setMenuState}
            setNo={setConfirm}
            setYesVal={"SelectGame"}
          />
        : <></>
      }
      {confirmGame
        ? <Confirmation 
            text="ARE YOU SURE YOU WANT TO SELECT THIS GAME?"
            setYes={setPlaying}
            setNo={setConfirmGame}
          />
        : <></>
      }
      {confirmGameName
        ? <Confirmation 
            text="ARE YOU SURE YOU WANT TO SELECT THIS GAME NAME?"
            setYes={setPlaying}
            setNo={setConfirmGameName}
          />
        : <></>
      }
      {alertName
        ? <Alert
            text="MAKE SURE YOU ENTER A NAME"
            close={setAlertName}
          />
        : <></>
      }
      {alertGameName
        ? <Alert
            text="MAKE SURE YOU ENTER A GAME NAME"
            close={setAlertGameName}
          />
        : <></>
      }
    </>
  )
}

export default HomePage