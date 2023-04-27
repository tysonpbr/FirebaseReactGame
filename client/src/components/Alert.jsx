import React from 'react'
import { Button } from '../components'

const Alert = ({ text, close }) => {
  return (
    <div className="absolute">
      <div className="w-[1200px] h-[355px] bg-none " onClick={() => close(false)}/>
      <div className="w-[1200px] h-[270px] bg-gray-500 absolute border-t-8 flex flex-col justify-center gap-8">
        <div className="flex justify-center">
          <p className="text-white text-center max-w-[700px] text-[24px]">{text}</p>
        </div>
        <div className="flex justify-center gap-24">
          <Button text="OKAY" setState={close} set={false} />
        </div>
      </div>
    </div>
  )
}

export default Alert