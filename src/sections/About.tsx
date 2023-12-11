import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

function About() {
  //useInView Hook을 사용하여 요소가 화면에 보이는지 여부를 감지
  const ref = useRef(null)
  const isInView = useInView(ref)
  // useEffect를 사용하여 요소가 화면에 보이는지 여부를 출력
  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])
  return (
    <motion.div
      className='about'
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }} // 한 번만 활성화되도록 설정
      transition={{ duration: 0.6 }} // 애니메이션 지속 시간 설정
      variants={{
        visible: { opacity: 1, y: -50 }, // 화면에 보일 때의 스타일 설정
        hidden: { opacity: 0, y: 0 }, // 초기 상태의 스타일 설정
      }}
    >
      <div className='title'>
        <h2>About Me</h2>
      </div>
      {/* 자기소개 파트 */}
      <div className='about-grid'>
        <div className='about-grid-info'>
          <p className='about-grid-info-text'>
            Name: Jiwon Lee <br /> belong to: JB University <br /> Address:
            Seoul Eunpyeong-gu <br /> Contact: 010-2390-0000
          </p>
          {/* 기술 스택 목록 */}
          <ul className='about-grid-info-list'>
            <li className='about-grid-info-list-item'>ISTJ</li>

            <li className='about-grid-info-list-item'>MUSIC</li>

            <li className='about-grid-info-list-item'>TRIP</li>

            <li className='about-grid-info-list-item'>FOOD</li>
            <li className='about-grid-info-list-item'>MOVIE</li>
          </ul>
        </div>
        <div className='about-grid-photo'>
          <div className='overlay'></div>
          <div className='overlay-border'></div>
          {/* 프로필 사진 */}
          <div className='about-grid-photo-container'>
            <Image src='/me.png' alt='profile' fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
