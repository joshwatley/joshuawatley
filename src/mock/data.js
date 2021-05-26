import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joshua Watley | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my web development portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://pdfhost.io/v/LXLD1btyz_Joshua_Watley_CVpdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'error.png',
    title: '"theBubble" Cryptocurrency Course (Still in development)',
    info: 'This was a project I undertook for a small company, create a one product store using react/gatsby, alot of the focus on this project was having a proffessional looking UI. While not completley confident in react this was a fun project that challenged me alot',
    info2: '',
    url: '',
    repo: '',
  },
   
  {
    id: nanoid(),
    img: 'error.png',
    title: 'Freelance Web Developer Site (Still in development)',
    info: 'This was a store landing page for a freelance Web Developer developed in Wordpress. For me, this was a big opportunity to get hands on experience using a CMS and allowed me to learn through making many mistakes while using wordpress',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio_v2.png',
    title: 'Portfolio v2',
    info: 'This is the current iteration of my personal portfolio. I started learning React to expand my skills and deploy something I would instantly use. This site was developed using Gatsby and then hosted through GitHub.',
    info2: '',
    url: '',
    repo: '',
  },
 
  {
    id: nanoid(),
    img: 'portfolio_v1.png',
    title: 'Portfolio v1',
    info: 'This was my first iteration of my portfolio. This was a static webpage using HTML, CSS and JQuery for some very simple animations. This was the first in depth websites I created, it allowed me to spend more time learning the ins and outs of basic web design.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: 'If you have any questions, feel free to get in contact with me.',
  btn: 'Send Email',
  email: 'watleyjosh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josh-watley-26111517a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/joshwatley',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
