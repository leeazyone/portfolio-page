import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='about-grid-photo-container'>
      <Image src='/5.png' alt='profile' fill />
    </div>
  )
}

export default Logo
