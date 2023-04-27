import React from 'react'

const Button = ({ setState, text, set, onClick }) => {
  return (
    <button 
      className="w-[180px] h-[60px] bg-[url('./assets/startScreen/button_up.png')] bg-cover flex self-center justify-center hover:scale-125"
      onClick={() => {
        if (setState != null) {
          setState(set)
        }
        if (onClick != null) {
          onClick()
        }
      }}
    >
      <div 
        className="text-white text-[16px] self-center"
      >
        {text}
      </div>
    </button>
  )
}

export default Button