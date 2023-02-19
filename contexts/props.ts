export interface ILinks {
    id: number,
    name: string,
    path: string
}

export interface IExprience {
    id: number,
    title: string,
    src: string
}

export interface IExpList {
    exprience: IExprience[]
}

export interface IEducation {
    id: number,
    course: string,
    startYear: number,
    endYear: number | string,
    detail: string
}

export interface EduList {
    education: IEducation[]
}

export interface IProject {
    id: number,
    title: string,
    image: string,
    url: string,
    skill: string[],
    desc: string,
    detail: IProjectDetail,
}

interface IProjectDetail {
    techStack: {
        primary: string;
        additional: string[];
    };
    objective: string;
    pages: string[];
    keyLearnings: string;
    review?: string;
}