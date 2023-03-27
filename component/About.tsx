import Image from "next/image";
import Link from "next/link"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import GithubIcon from '@mui/icons-material/GitHub';
import AssessmentIcon from '@mui/icons-material/Assessment';
import styles from '../styles/Home.module.css'
import profileimg from '../public/images/profile.jpg'
import Subtitle from "./UI/Subtitle";


const Home = () => {
    return (
        <div id="about" style={{ paddingTop: "100px" }}>
                <Subtitle subtitle="About Me" />
                <Grid
                    justifyContent="space-between"
                    container spacing={2}
                    className={`${styles.hero__container}`}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [`@media (max-width:768px)`]: {
                            flexDirection: "column-reverse",
                        },
                    }}
                >
                    <Grid
                        item xs={8}
                        sx={{ marginTop: { md: -15 } }}
                    >
                        <h2>안녕하세요! 프론트엔드 개발자 김선규입니다.</h2>
                        <p>
                            부트캠프와 42서울에서 학습을 통해 기초부터 프론트엔드 개발에 관한 깊은 지식을 습득했습니다.
                            <br />
                            주요 기술 스택으로는 React, NextJs, TypeScript, ReactNative을 사용하여 개발할 수 있습니다. 기술을 통해 사용자 경험을 개선하고, 빠르고 안정적인 웹 애플리케이션을 개발하는 것을 중요시합니다.
                            <br />
                            또한, 동료와의 소통과 협업의 가치를 알고있습니다. 그리고 저는 새로운 경험과 도전을 통해 성장할 수 있는 기회를 기다리고 있습니다.
                            <br />
                        </p>
                        {/* <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-start', marginTop: 4 }}>
                            <Button variant="contained" startIcon={<GithubIcon />}>
                                Github
                            </Button>
                            <Button variant="outlined" endIcon={<AssessmentIcon />}>
                                <Link href="/resume.pdf" download={true}>
                                    이력서
                                </Link>
                            </Button>
                        </Stack> */}
                    </Grid>
                    <Grid
                        item xs={4}
                        justifyContent="center"
                        textAlign='center'
                        alignItems="center"
                    >
                        <Image
                            src={profileimg}
                            width="300" height="450"
                            style={{ borderRadius: '20px' }}
                            alt="프로필 이미지"
                        />
                    </Grid>
                </Grid>
        </div>
    )
}

export default Home;