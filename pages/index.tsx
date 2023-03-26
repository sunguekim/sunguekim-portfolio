import { Fragment } from "react";
import type { NextPage } from 'next'
import Head from "next/head";
import Main from '../component/Main'
import Education from '../component/Education'
import Experience from '../component/Experience'
import Intro from '../component/About'
import Project from '../component/Project'
import Contact from '../component/Contact'


const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>김선규 포트폴리오</title>
      </Head>
      <Main />
      <Intro />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </Fragment>
  )
}

export default Home
