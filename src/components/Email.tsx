import React from 'react'
import { motion } from 'framer-motion' // Framer Motion의 motion.div 컴포넌트
function Email() {
  return (
    // 애니메이션
    <motion.div
      className='email'
      initial={{ opacity: 0 }} // 초기 상태에서 투명도 0으로 설정
      animate={{ opacity: 1 }} // 애니메이션 동안 투명도 1로 변경
      transition={{
        duration: 0.3, // 애니메이션 지속 시간 설정
        ease: 'easeInOut',
        delay: 1.95, // 애니메이션 시작 전 딜레이 설정
      }}
    >
      <a href='mailto:leejiwon317@jmail.ac.kr' className='email-link'>
        leejiwon317@jmail.ac.kr
      </a>
    </motion.div>
  )
}

export default Email
