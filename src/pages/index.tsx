import Head from 'next/head'
import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Projects from '@/sections/Projects'

function Index() {
  return (
    // 페이지 기본 구조
    <div className='app'>
      <Head>
        <title>Jiwon Portfolio</title>
        <link rel='shortcut icon' href='/bory.jpg' />
      </Head>
      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </>
    </div>
  )
}

export default Index
