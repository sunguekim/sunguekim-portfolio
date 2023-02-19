import rngallery from '../../public/assets/Projects/Project1.png'
import socialblog from '../../public/assets/Projects/Project2.png'
import reactfirebase from '../../public/assets/Projects/Project3.png'
import commercialweb from '../../public/assets/Projects/Project4.jpg'
import { IProject } from '../props'

export const projects = [
    {
        id: 1,
        title: "ReactNative 갤러리앱",
        image: rngallery,
        url: "reactnative-gallery",
        skill: ['ReactNative', 'Redux-ToolKit', 'TypeScript', 'Firebase'],
        desc: "ReactNative와 Typescript를 사용한 프로젝트입니다.백엔드로는 FireBase를 사용하였고 기본적인 어플에서의 회원가입과 파일의 저장,분류,수정,삭제 기능을 만들었습니다.",
        detail: {
            "techStack": {
                "primary": "ReactNative",
                "additional": ["Typescript", "Redux-toolkit", "Redux-saga"]
            },
            "objective": "ReactNative를 이용한 모바일 애플리케이션 개발, 사용자들이 로그인하여 카테고리별로 분류된 데이터베이스에 음식 사진을 업로드할 수 있도록 구현.",
            "pages": ["카테고리", "홈", "로그인", "회원가입", "검색", "사진 정보"],
            "keyLearnings": "ReactNative의 컴포넌트와 Hooks를 이용한 화면 구성 이해.",
            "review": "The project was self-directed, so no additional features were implemented due to a lack of ideas."
        }
    },
    {
        id: 2,
        title: "소셜블로그",
        image: socialblog,
        url: "socialblog",
        skill: ['React', 'GraphQL', 'PostgreSQL', 'Typescript'],
        desc: "React, TypeScript, GraphQL을 이용한 SocialWeb 플랫폼입니다. 기술 스택으로는 React, Apollo-Client, TypeScript, GraphQL, Prisma, PostgreSQL이 사용되었습니다.어플리케이션에는 로그인, 회원가입, 글 작성, 수정, 삭제, 모든 회원 글 보기, 북마크한 글 보기 기능이 있습니다.",
        detail: {
            "techStack": {
                "primary": "React",
                "additional": ["Apollo-Client", "TypeScript", "GraphQL", "PostgreSQL"]
            },
            "objective": "React, TypeScript, GraphQL 기술을 이용하여 SocialWeb 프로젝트 개발.",
            "pages": ["로그인", "회원가입", "글 작성,수정,삭제", "모든 회원 글 보기", "북마크한 글 보기"],
            "keyLearnings": "RReact와 TypeScript 프로젝트에서 GraphQL의 활용과 Apollo-Client를 이용한 GraphQL API와의 통신의 이해.",
            "review": "GraphQL을 사용하면서 느낀 점은, 이전에는 RestAPI를 사용할 때마다 새로운 API를 만들어야 했던 것에 비해GraphQL을 사용하면 앱에서 직접 쿼리로 데이터를 조작할 수 있어서, 새로운 기능을 추가할 때마다 API를 만들 필요가 없어져 편리했다는 것입니다. 또한, API의 요청 방식과 응답 값이 RestAPI에 비해 직관적으로 예상 가능해졌고, 이를 통해 개발 속도가 빨라지고 효율적인 앱을 만들 수 있었다는 것입니다."
        }
    },
    // {
    //     id: 3,
    //     title: "React-Firebase 채팅웹",
    //     image: reactfirebase,
    //     url: "react-chat",
    //     skill: ['React', 'FireBase', 'Redux', 'JavaScript'],
    //     desc: "Slack을 모티브로 React와 Firebase를 이용해 제작한 채팅웹입니다.회원가입,채팅,파일 업로드와 수정 삭제기능을 구현했습니다"
    // },
    // {
    //     id: 4,
    //     title: "쇼핑웹 프로젝트",
    //     image: commercialweb,
    //     skill: ['React', 'Redux', 'JavaScript', 'NodeJS'],
    //     url: "commercial-web",
    //     desc: 'React를 이용한 커머셜 플랫폼 프로젝트입니다.협업 프로젝트이고 제작에 참여한 기능은 로그인,회원가입,내정보,ADMIN,회원구매내역,판매자 판매내역,결제 기능입니다'
    // }
]