import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className='hero'>
      <motion.h1
        className='hero-title'
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className='hero-title-large'
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        Jiwon Lee.
      </motion.h2>
      <motion.h3
        className='hero-title-large hero-title-sub'
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        Welcom my page.
      </motion.h3>
      <motion.p
        className='hero-text'
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      ></motion.p>
      {/*  애니메이션 효과 부여 */}
      <motion.div
        className='hero-button'
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.65,
        }}
      >
        {/* 유튜브 링크로 연결 */}
        <Button
          text='Check out my site'
          link='https://www.youtube.com/channel/UCWgQOvNHORSdya_hxEU2JIA'
        />
      </motion.div>
    </div>
  )
}

export default Hero
