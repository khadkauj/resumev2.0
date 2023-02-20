import '@fortawesome/fontawesome-free/css/all.min.css';

import {
    AcademicCapIcon,
    CalendarIcon,
    DownloadIcon,
    FlagIcon,
    MapIcon,
    OfficeBuildingIcon,
    
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import pythonPic from '../images/favtech/python.webp';
import reactPic from '../images/favtech/react-js.webp';
import githubPic from '../images/favtech/github.webp';
import awsPic from '../images/favtech/aws.webp';
import ubuntuPic from '../images/favtech/ubuntu.webp';
import sshPic from '../images/favtech/ssh.webp';
import javascriptPic from '../images/favtech/js.webp';
import dockerPic from '../images/favtech/docker.webp';
import netlifyPic from '../images/favtech/netlify.webp';
import mysqlPic from '../images/favtech/mysql.webp';
import profilePic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import Angular from '../images/favtech/Angular.webp';
import Flask from '../images/favtech/Flask.webp';
import Solidity from '../images/favtech/Solidity.webp';
import Next from '../images/favtech/Next.webp';
import Kali from '../images/favtech/Kali.webp';
import Burpsuite from '../images/favtech/Burpsuite.webp';
import Microsoft from '../images/favtech/Microsoft.webp';
import VSCODE from '../images/favtech/VSCODE.webp';
import WordPress from '../images/favtech/WordPress.webp';
import Firebase from '../images/favtech/firebase.webp';
import GChain from '../images/favtech/GChain.webp';
import Jacsy from '../images/favtech/Jacsy.webp';
import Chatbox from '../images/favtech/Chatbox.webp';



import {
    About,
    ContactSection,
    ContactType,
    FavoriteTechItem,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Ujjwal Khadka',
    description: "My Personal React Based Resume and Portfolio Website.",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
    FavoriteTech: "favoritetech"

} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Ujjwal Khadka.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a Germany based <strong className="text-stone-100">Software Engineer</strong>, currently studying
                at <strong className="text-stone-100">Constructor Univerity, Germany.</strong> I'm passionate about <strong>Cloud, Cyber security, and Blockchain</strong>.
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                If you're interested in discussing potential collaboration or job opportunities, feel free to connect with me.
                Thank you for visiting my profile and a fun fact, I love dogs🐕!
                {/* In my free time time, you can catch me watch historical and pl <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>. */}
            </p>
        </>
    ),
    actions: [
        {
            href: 'https://docs.google.com/document/d/1SYmcXzm4rGVXJlWEdszAGzs0I0MLtCl89Vtu6yKcGc8/export?format=pdf',
            text: 'Resume',
            primary: true,
            Icon: DownloadIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: 'Contact',
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilePic,
    description: "I enjoy working on challenging projects that require me to continuously learn and improve my skills. My main interest lies in ReactJS, Firebase, AWS, web penetration testing and I love working with other technologies like Python, Docker. &nbsp; In addition, I find great satisfaction in breaking and debugging Linux systems, including Ubuntu and Kali.    As a person, I am detail-oriented, reliable, and driven. I am always willing to take on new challenges and am comfortable working in fast-paced environments. In my free time, I enjoy keeping up with the latest technological trends and watching docu series.",
    aboutItems: [
        { label: 'Location', text: 'Bremen, Germany', Icon: MapIcon },
        { label: 'Age', text: '22', Icon: CalendarIcon },
        { label: 'Nationality', text: 'Nepalese', Icon: FlagIcon },
        // {label: 'Interests', text: ', Muay Thai, Banjos', Icon: SparklesIcon},
        { label: 'Study', text: 'Jacobs University Bremen', Icon: AcademicCapIcon },
        { label: 'Employment', text: 'Looking for werkstudent positions.', Icon: OfficeBuildingIcon },
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'English',
                level: 10,
            },
            {
                name: 'German',
                level: 6,
            },
            {
                name: 'Nepali/Hindi',
                level: 10,
            },
        ],
    },
    // {
    //   name: 'Web development',
    //   skills: [
    //     {
    //       name: 'Frontend',
    //       level: 8,
    //     },
    //     {
    //       name: 'Backend',
    //       level: 7,
    //     },
    //     {
    //       name: 'Desing',
    //       level: 7,
    //     },
    //     {
    //       name: 'Testing',
    //       level: 7,
    //     },
    //   ],
    // },
    // {
    //   name: 'Backend development',
    //   skills: [
    //     {
    //       name: 'Node.js',
    //       level: 8,
    //     },
    //     {
    //       name: 'Rust',
    //       level: 5,
    //     },
    //     {
    //       name: 'Golang',
    //       level: 4,
    //     },
    //   ],
    // },
    // {
    //   name: 'Mobile development',
    //   skills: [
    //     {
    //       name: 'React Native',
    //       level: 9,
    //     },
    //     {
    //       name: 'Flutter',
    //       level: 4,
    //     },
    //     {
    //       name: 'Swift',
    //       level: 3,
    //     },
    //   ],
    // },
    {
        name: 'IT skills',
        skills: [
            {
                name: 'Web development',
                level: 9,
            },
            {
                name: 'Cloud & Devops',
                level: 7,
            },
            {
                name: 'Cyber Security',
                level: 6,
            },
            {
                name: 'BlockChain',
                level: 4,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Jacsy- Ask, Shop, and Stalk',
        description: 'Jacsy is a progressive web app designed for university students, offering a platform for asking questions, an online store, and a "Stalk" page. By reducing spammy emails, the app helps more than 500 unique students find and purchase the items they need and build spam free college email list. The app is built using ReactJS, Firebase, and Express, and you can try it out for yourself with the live demo at Jacsy.',
        url: 'https://festive-noether-e12858.netlify.app/',
        image: Jacsy,
    },
    {
        title: 'Green-Chain',
        description: "Supply chain companies transparently put their transactions in Blockchain. We evaluate their carbon footprint and assign them G-Score. Lower the G-score the more carbon neutral they are. We use G-score to create a store where people get to assess the products based on their carbon neutrality before buying them.",
        url: 'https://www.youtube.com/watch?v=5S7t-Wvnvrs',
        image: GChain,
    },
    {
        title: 'Chatbox',
        description: "Introducing Chatbox, a fully controlled and scalable web application hosted on an Ubuntu AWS EC2 instance. The app features secure chatting among developers and is built using ReactJS and Firebase. The app is hosted on an Nginx server and provides a seamless user experience. Check out the live demo of Chatbox to see how it works.",
        url: ' http://52.210.194.140:3000',
        image: Chatbox,
    },
   


];

/**
 * FavoriteTechItem section
 */
export const FavoriteTechItems: FavoriteTechItem[] = [
    {
        title: 'Python 3+',
        image: pythonPic,
    },

    {
        title: 'GitHub',
        image: githubPic,
    },
    {
        title: 'React',
        image: reactPic,
    },
    {
        title: 'AWS',
        image: awsPic,
    },
    {
        title: 'Ubuntu',
        image: ubuntuPic,
    },
    {
        title: 'Angular',
        image: Angular,
    },
    {
        title: 'Netlify',
        image: netlifyPic,
    },

    {
        title: "Flask",
        image: Flask,
    },
    {
        title: 'Solidity',
        image: Solidity,
    },
    {
        title: 'SSH',
        image: sshPic,
    },
    {
        title: 'Docker',
        image: dockerPic,
    },
    {
        title: 'MySql/SQL',
        image: mysqlPic,
    },
    {
        title: 'Next',
        image: Next,
    },
    {
        title: 'JavaScript',
        image: javascriptPic,
    },
    {
        title: "Kali",
        image: Kali,
    },
    {
        title: 'Firebase',
        image: Firebase,
    },
    {
        title: 'Burpsuite',
        image: Burpsuite,
    },
    {
        title: 'Mircosoft Office',
        image: Microsoft,
    },
    {
        title: 'Vs Code',
        image: VSCODE,
    },
    {
        title: 'Wordpress',
        image: WordPress,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Sep 2020 - Aug 2023',
        location: 'Jacobs University Bremen',
        title: 'Bsc. Computer Science',
        content: <p>Currently pursuing a degree in Computer Science with a minor in Economicss. Expected to graduate by 31/08/2023.</p>,
    },

];

export const experience: TimelineItem[] = [
    {
        date: 'June 2021 - Dec 2022',
        location: 'Hamburg, Germany',
        title: 'Frontend Developer and Ab Tester',
        content: (
            <div className='ml-5'>
                <li>Collaborated with the design team to translate wireframes into visually appealing and user-friendly interfaces using HTML5, CSS3, and ReactJs.</li>
                <li>Implemented and analyzed A/B tests using Ab Tasty, presenting findings to the marketing team </li>
                <li>Conducted penetration testing on the main websites of the company to identify security vulnerabilities.</li>
            </div>
        ),
    },
    {
        date: 'March 2021 - June 2021',
        location: 'Onea Care gmbh',
        title: 'Frontend Developer',
        content: (
            <div className='ml-5'>
                <li>Designed and implemented new features, such as a chat box, for the existing web application using Angular,</li>
                <li>Developed dynamic JSON forms for different customer requirements using NGX Formly</li>
                <li>Built an efficient server-side using NestJs and GraphQL.</li>
            </div>
        ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage,
    testimonials: [
        // {
        //     name: 'Hanan Hananaev',
        //     text: "Without doubt one of the most talented programmers out there.  I always go back to George when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.",
        //     image: '/testimonials/hanan.webp',
        // },
        // {
        //     name: 'Tzuriel Nimni',
        //     text: "I've known George for many years now, he's a very smart and talented guy. He always strives for the best in what he does, and you can be certain that he will not let you down.",
        //     image: '/testimonials/tzuriel.webp',
        // },
        // {
        //     name: 'Marina Rapaport',
        //     text: "Any problem, malfunction or other hardware or software related issue that so called experts can't find or refuse to handle with hundred of excuses such as: not worth it, impossible. George probably will do quickly and hassle free. Very glad that I've met him and always able to direct to him some of my challenges. For sure, one of the most talented guys I've ever met.",
        //     image: '/testimonials/marina.webp',
        // },
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.',
    description: 'You can get in touch with me by email or simply by filling the contact form.',
    items: [
        {
            type: ContactType.Email,
            text: 'khadkauj@gmail.com',
            href: 'mailto:khadkauj@gmail.com',
        },
        {
            type: ContactType.Location,
            text: 'Bremen, Germany',
            href: 'https://www.google.com/maps/place/Bremen',
        },
        {
            type: ContactType.Github,
            text: 'khadkauj',
            href: 'https://github.com/khadkauj',
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    { label: 'Github', Icon: GithubIcon, href: 'https://github.com/khadkauj' },
    { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/khadkauj/' },
];