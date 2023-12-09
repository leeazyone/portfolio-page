import Link from 'next/link'
import React from 'react'
import { FiGithub, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi'
import { RiNotionFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
//react-icons을 이용하여 아이콘 불러옴
function SocialIcons() {
  // 소셜 미디어 아이콘 및 링크 정보
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/leeazyone',
    },
    {
      name: 'Youtube',
      icon: <FiYoutube />,
      link: 'https://www.youtube.com/channel/UCWgQOvNHORSdya_hxEU2JIA',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      link: 'https://instagram.com/jiwon_lee_29',
    },
    {
      name: 'Twitter',
      icon: <RiNotionFill />,
      link: 'https://www.notion.so/Dreamhack-99eeacd0ec1745f1985c9b9ac7ecc6e7?pvs=4',
    },
  ]
  return (
    //애니메이션 효과
    <motion.div
      className='social-icons'
      initial={{ opacity: 0 }} // 초기 상태에서 투명도 0으로 설정
      animate={{ opacity: 1 }} // 애니메이션 동안 투명도 1로 변경
      transition={{
        duration: 0.3, // 애니메이션 지속 시간 설정
        ease: 'easeInOut',
        delay: 1.95, // 애니메이션 시작 전 딜레이 설정
      }}
    >
      <ul className='social-icons-list'>
        {/* 소셜 미디어 아이콘과 링크 -> 리스트 아이템 생성 */}
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SocialIcons
