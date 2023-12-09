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
      viewport={{ once: true }} // 한 번만 활성화되도록 설정
      transition={{ duration: 0.6 }} // 애니메이션 지속 시간 설정
      variants={{
        visible: { opacity: 1, y: -50 }, // 화면에 보일 때의 스타일 설정
        hidden: { opacity: 0, y: 0 }, // 초기 상태의 스타일 설정
      }}
    >
      <h2 className='contact-title'>What&apos;s Next?</h2>
      <h2 className='contact-sub-title'>Get In Touch</h2>
      <div className='contact-cta'>
        {/* 외부 이메일 링크를 연결 */}
        <Button link='mailto:leejiwon317@jmail.ac.kr' text='Say Hello' />
      </div>
    </motion.div>
  )
}

export default Contact
