import Image from "next/image";
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css'
import profileimg from '../public/images/profile.jpg'
import Subtitle from "./UI/Subtitle";


const Home = () => {
    return (
        <div id="about">
            <Grid
                className={`${styles.hero}`}
                justifyContent="space-between"
                container spacing={2}
            >
                <Grid item xs={8} >
                    <Subtitle subtitle="About" />
                    <h2>안녕하세요! 프론트엔드 개발자 김선규입니다.</h2>
                    <p>
                        부트캠프와 42서울에서 학습을 통해 기초부터 프론트엔드 개발에 관한 깊은 지식을 습득했습니다.
                        주요 기술 스택으로는 React, NextJs, TypeScript, ReactNative을 사용하여 개발할 수 있습니다. 기술을 통해 사용자 경험을 개선하고, 빠르고 안정적인 웹 애플리케이션을 개발하는 것을 중요시합니다.
                        또한, 동료와의 소통과 협업이 개발 프로젝트에서의 성공에 큰 영향을 미친다는 것을 알고 있습니다. 개발 팀의 목표를 달성하기 위해 동료들과 상호 존중과 소통의 적극적인 관심을 가지고 있습니다.
                        저는 새로운 경험과 도전을 통해 성장할 수 있는 기회를 기다리고 있습니다.
                    </p>
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
                        alt="프로필 이미지"
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;