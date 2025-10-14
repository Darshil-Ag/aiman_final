import React from 'react'
import logo from '../photo/logo.png'

const FixedLogoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large centered logo that stays visible while scrolling */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={logo} 
          alt="AIMAN Hospital" 
          className="w-[600px] h-auto opacity-[0.03] select-none"
          style={{ 
            filter: 'grayscale(20%)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
      
      {/* Additional subtle logos in corners for depth */}
      <div className="absolute top-10 right-10">
        <img 
          src={logo} 
          alt="" 
          className="w-40 h-auto opacity-[0.02] select-none rotate-12"
        />
      </div>
      
      <div className="absolute bottom-10 left-10">
        <img 
          src={logo} 
          alt="" 
          className="w-40 h-auto opacity-[0.02] select-none -rotate-12"
        />
      </div>
    </div>
  )
}

export default FixedLogoBackground

