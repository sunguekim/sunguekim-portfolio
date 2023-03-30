import { Fragment, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from 'next'
import Head from "next/head";
import Main from '../component/Main'
import Education from '../component/Education'
import Experience from '../component/Experience'
import Intro from '../component/About'
import Project from '../component/Project'
import Contact from '../component/Contact'
import Layout from "../component/Layout";
import Footer from "../component/Footer";


const Home: NextPage = () => {
  const [mainVisible, setMainVisible] = useState<boolean>(true);

  const handleMainHide = () => {
    setMainVisible(false);
  }

  return (
    <Fragment>
      <Head>
        <title>김선규 포트폴리오</title>
      </Head>
      <AnimatePresence>
        {mainVisible && <Main onHide={handleMainHide} />}
      </AnimatePresence>
      <Layout>
        <Intro />
        <Education />
        <Experience />
        <Project />
      </Layout>
    </Fragment>
  )
}

export default Home
