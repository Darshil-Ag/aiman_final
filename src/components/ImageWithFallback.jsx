import React, { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon: FallbackIcon = ImageIcon,
  fallbackBg = 'bg-gradient-to-br from-primary-400 to-secondary-500'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  if (imageError || !src) {
    return (
      <div className={`${className} ${fallbackBg} flex items-center justify-center`}>
        <FallbackIcon className="w-20 h-20 text-white opacity-50" />
      </div>
    )
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`${className} ${fallbackBg} flex items-center justify-center animate-pulse`}>
          <FallbackIcon className="w-20 h-20 text-white opacity-50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'hidden' : ''}`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
    </>
  )
}

export default ImageWithFallback

