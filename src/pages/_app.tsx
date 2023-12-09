// 전역 스타일 및 글꼴 설정
import '@/scss/globals.css'
import '@/scss/index.scss'
import type { AppProps } from 'next/app'
import { Raleway, Fira_Code } from 'next/font/google' //구글 폰트에서 폰트 불러옴

const raleway = Raleway({ subsets: ['latin'] })
const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily};
        }
      `}</style>
      {/* 페이지의 컴포넌트 및 속성 전달 */}
      <Component {...pageProps} />;
    </>
  )
}
