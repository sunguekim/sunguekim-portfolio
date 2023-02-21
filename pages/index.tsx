import { Fragment } from "react";
import type { NextPage } from 'next'
import Head from "next/head";
import Education from '../component/Education'
import Experience from '../component/Experience'
import Intro from '../component/Home'
import Project from '../component/Project'
import Contact from '../component/Contact'


const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>김선규 포트폴리오</title>
        <meta
          property="og:description"
          content="프론트엔드 개발자 김선규 포트폴리오 입니다."
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </Fragment>
  )
}

export default Home
