import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
// 프로젝트 소개 페이지
function Projects() {
  const projectsData = [
    {
      image: '/1.png',
      projectName: 'WebDemo',
      projectDescription:
        '웹 개발자를 위한 온라인 메뉴얼 페이지입니다. 웹프로그래밍의 3가지 요소를 배울 수 있고 간단한 배경색 바꾸기 실습을 해볼 수 있습니다.',
      projectTech: ['HTML', 'CSS', 'JavaScript'],
      projectExternalLinks: {
        github: 'https://github.com/leeazyone/webdemo_site',
        externalLink: 'https://webdemo-site.vercel.app/',
      },
    },
    {
      image: '/2.png',
      projectName: 'Clerk',
      projectDescription:
        'Clerk 기반 로그인 페이지 입니다. 간편하고 빠르게 로그인 할 수 있고 로그인 후에는 개인페이지 열람이 가능합니다.',
      projectTech: ['React', 'Next.js', 'Tailwind CSS', 'Clerk'],
      projectExternalLinks: {
        github: 'https://github.com/leeazyone/clerk2',
        externalLink: 'https://clerk2-nu.vercel.app/',
      },
    },
    {
      image: '/3.png',
      projectName: 'DAPARA Shopping',
      projectDescription:
        '쇼핑몰 페이지입니다. 옷을 구경하며 장바구니에 담아 결제를 하여 옷을 구매할 수 있습니다. 각각의 옷에는 별점이 부여됩니다.',
      projectTech: [
        'React',
        'Node.js',
        'Next.js',
        'ESLint',
        'tailwind CSS',
        'Redux Toolkit',
      ],
      projectExternalLinks: {
        github: 'https://github.com/leeazyone/dapara',
        externalLink: 'https://dapara-five.vercel.app/',
      },
    },
    {
      image: '/4.png',
      projectName: 'Z.P.G',
      projectDescription:
        'Z.P.G 쇼핑몰 페이지 입니다. 로그인 후에 장바구니 이용이 가능하고 여러 이벤트에 참여하여 혜택을 받을 수 있습니다.',
      projectTech: ['Next.js', 'Node.js', 'MongoDB', 'Clerk'],
      projectExternalLinks: {
        github: 'https://github.com/leeazyone/clerk2',
        externalLink: 'https://clerk2-nu.vercel.app/',
      },
    },
  ]
  return (
    <div className='projects' id='work'>
      <motion.div
        className='title'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Project</h2>
      </motion.div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className='project'
                key={projectName}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className='project-info'>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map((tech) => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.github}
                        className='project-info-links-item-link'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className='project-info-links-item-link'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
