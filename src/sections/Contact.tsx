import Button from '@/components/Button'
import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <motion.div
      className='contact'
      id='contact'
      initial='hidden'
      whileInView='visible' // 화면에 보일 때의 상태 설정
    >
      <h2 className='contact-title'>Contant me</h2>
      <h2 className='contact-sub-title'>Get In Touch</h2>
      <div className='contact-cta'>
        {/* 외부 이메일 링크를 연결 */}
        <Button link='mailto:leejiwon317@jmail.ac.kr' text='Say Hello' />
      </div>
    </motion.div>
  )
}

export default Contact
