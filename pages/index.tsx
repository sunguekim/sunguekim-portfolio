import type { NextPage } from 'next'
import Head from 'next/head'
import Education from '../component/Education'
import Experience from '../component/Experience'
import Intro from '../component/Home'
import Project from '../component/Project'
import Contact from '../component/Contact'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div>
      {/* <Head>
        <title>김선규 포트폴리오</title>
        <meta name="description" content="김선규 포트폴리오 페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Intro />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
