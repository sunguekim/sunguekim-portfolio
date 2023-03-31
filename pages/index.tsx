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

  return (
    <Fragment>
      <Head>
        <title>김선규 포트폴리오</title>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Raleway:wght@200;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Main />
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
