import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
function Navbar() {
  // 스크롤 여부와 반응형 네비게이션
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)
  const sectionLinks = [
    // 링크 정보
    { name: 'About', link: '/#about' },
    { name: 'Project', link: '/#work' },
    {
      name: 'Contact',
      link: '/#contact',
    },
  ]

  useEffect(() => {
    // 스크롤에 인한 반응형 네비게이션
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false)
    })
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('.nav-items-list-item-link')
    links.forEach((link) => {
      link.addEventListener('click', () => setResponsiveNavVisible(false))
    })
    const nav = document.querySelector('.nav-items')
    nav?.addEventListener('click', (e) => {
      e.stopPropagation()
    })
    const html = document.querySelector('html')
    html?.addEventListener('click', (e) => {
      setResponsiveNavVisible(false)
    })
  }, [])

  useEffect(() => {
    const main = document.querySelector('main')
    if (responsiveNavVisible) {
      main?.classList.add('blur')
    } else {
      main?.classList.remove('blur')
    }
  }, [responsiveNavVisible])
  // 네비게이션 바 렌더링
  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? 'blur-nav' : ''}`}>
        <motion.div
          className='brand'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Link href='localhost:3000'>
            <Logo />
          </Link>
        </motion.div>
        <div
          className={`${responsiveNavVisible && 'nav-responsive'} nav-items`}
        >
          <ul className='nav-items-list'>
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className='nav-items-list-item'
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className='nav-items-list-item-link'>
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className='nav-items-button'
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          ></motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
