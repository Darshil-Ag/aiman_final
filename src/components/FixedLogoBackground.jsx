import React from 'react'
import newLogo from '../photo/new_logo.jpg'

const FixedLogoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large centered logo that stays visible while scrolling */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={newLogo} 
          alt="AIMAN Hospital" 
          className="w-[800px] h-auto opacity-[0.12] select-none"
          style={{ 
            filter: 'grayscale(20%)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
      
      {/* Additional subtle logos in corners for depth */}
      <div className="absolute top-20 right-20">
        <img 
          src={newLogo} 
          alt="" 
          className="w-32 h-auto opacity-[0.06] select-none rotate-12"
        />
      </div>
      
      <div className="absolute bottom-20 left-20">
        <img 
          src={newLogo} 
          alt="" 
          className="w-32 h-auto opacity-[0.06] select-none -rotate-12"
        />
      </div>
      
      <div className="absolute top-1/4 left-10">
        <img 
          src={newLogo} 
          alt="" 
          className="w-24 h-auto opacity-[0.05] select-none rotate-45"
        />
      </div>
      
      <div className="absolute bottom-1/4 right-10">
        <img 
          src={newLogo} 
          alt="" 
          className="w-24 h-auto opacity-[0.05] select-none -rotate-45"
        />
      </div>
    </div>
  )
}

export default FixedLogoBackground

