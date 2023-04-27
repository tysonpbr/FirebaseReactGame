import React, { useState } from 'react'
import { Button } from '../components'

const SelectCharAndName = ({ name, setName, player, setPlayer, setConfirm, setAlertName }) => {
  const [playerName, setPlayerName] = useState("0.png");

  const legalName = () => {
    if (name == "") {
      setAlertName(true)
    }
    else {
      setConfirm(true)
    }
  }

  const nextSkin = () => {
    const nextPlayer = ((player + 1) % 12)
    setPlayer(nextPlayer)
    setPlayerName(nextPlayer.toString() + ".png")
  }

  return (
    <div className="w-[1200px] h-[300px] flex flex-col gap-4">
      <div className='flex justify-center gap-24'>
        <div className='flex self-end pb-8'>
          <Button text="CHANGE SKIN" onClick={() => nextSkin()} />
        </div>
        <div className={`w-[192px] h-[192px] overflow-hidden`}>
          <img className="min-w-[768px] min-h-[768px]" src={`../src/assets/characters/${playerName}`} alt="heroPreview" />
        </div>
        <div className="flex self-end pb-8">
          <Button text="CONFIRM" onClick={() => legalName()} />
        </div>
      </div>
      <div className="flex justify-center">
        <input onChange={(e) => setName(e.target.value)} type="text" className='w-[340px] h-[80px] text-center text-[24px] border-8 border-[#242998]' placeholder="YOUR NAME" />
      </div>
    </div>
  )
}

export default SelectCharAndName