import {EmailIcon, GithubIcon, LinkedinIcon} from "@/components/Icons";
import {SocialLink, WorkPosition, SOCIAL_LINK_TYPE} from '@/types'


export const socialLinks: SocialLink[] = [
    {
        name: 'Linkedin',
        type: SOCIAL_LINK_TYPE.LINK,
        url: 'https://www.linkedin.com/in/monique-shaqiri-126ba7212/',
        Icon: LinkedinIcon
    },
    {
        name: 'GitHub1',
        type: SOCIAL_LINK_TYPE.LINK,
        url: 'https://github.com/Monique-Shaqiri',
        Icon: GithubIcon
    },
    {
        name: 'GitHub2',
        type: SOCIAL_LINK_TYPE.LINK,
        url: 'https://github.com/Monique-Shaqiri77',
        Icon: GithubIcon
    },
    {
        name: 'Get in touch',
        type: SOCIAL_LINK_TYPE.EMAIL,
        url: 'lasceltagiusta@mail2artist.com',
        Icon: EmailIcon
    }
];

export const stack: string[] = [
    'React',
    'JavaScript',
    'ExpressJS',
    'NextJS',
    'ThreeJS',
    'React-native',
    'MySQL',
    'Mongo DB',
    'Swift/Swiftui',
    'React Three Fiber'
]

export const background: WorkPosition[] = [
    {
        company: 'Udemy',
        position: 'Self Study Web Development',
        year: ['02/2019', '07/2023']
    },
    {
        company: 'Udemy',
        position: 'Self Study Java',
        year: ['02/2019', '07/2023']
    },
    {
        company: 'Free Code Camp',
        position: 'Software Engineer',
        year: ['02/2019', '07/2023']
    },
    {
        company: 'Zero to Mastery',
        position: 'Frontend Developer',
        year: ['03/2020', '05/2023']
    },
    {
        company: 'Freelancer',
        position: 'Frontend Developer',
        year: ['02/2019', '11/2023']
    },
]