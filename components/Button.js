import React from 'react'

const Button = ({ textSize, title }) => {
    return (
        <button className={`from-linear hover:opacity-80 transform transition-all duration-300 bg-gradient-to-br font-bold text-sm to-linear2 text-white rounded-full ${textSize} px-6 py-2.5`}>{title}</button>
    )
}

export default Button