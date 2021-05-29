import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joshua Watley | Web Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my web development portfolio', 
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
  resume: 'https://pdfhost.io/v/Kyzj7UHau_Joshua_Watley_CVpdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio_v2.png',
    title: 'Portfolio v2',
    info: 'This is the current iteration of my personal portfolio. I started learning React to expand my skills and deploy something I would instantly use. This site was developed using Gatsby and then hosted through Netlify.',
    info2: '',
    skills: 'HTML / CSS  /  JS  /  ReactJS  /  Gatsby',
    url: 'https://joshwatley.netlify.app',
    repo: 'https://github.com/joshwatley/joshuawatley',
  },
 
  {
    id: nanoid(),
    img: 'portfolio_v1.png',
    title: 'Portfolio v1',
    info: 'This was my first iteration of my portfolio. This was a static webpage using HTML, CSS and JQuery for some very simple animations. Creating myself my first portfolio was in itself a big project, this will be a good basis to build upon in the future.',
    info2: '',
    skills: 'HTML / CSS  /  JS',
    url: 'https://joshwatley.github.io',
    repo: 'https://github.com/joshwatley/joshwatley.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'error.png',
    title: '"theBubble" Cryptocurrency Course (Still in development)',
    info: 'This was a project I undertook for a small business, creating a one product store using react/gatsby allowing them to sell their course, alot of the focus on this project was having a proffessional looking UI. While being coming increasingly confident in React this was a fun project that challenged me.',
    info2: '',
    skills: 'HTML / CSS  /  JS  /  ReactJS',
    url: 'https://joshwatley.netlify.app/pagedoesnotexist',
    repo: 'https://github.com/joshwatley/theBubble_Crypto_Course',
  },
   
  {
    id: nanoid(),
    img: 'error.png',
    title: 'Freelance Web Developer Site (Still in development)',
    info: 'This was a store landing page for a freelance Web Developer developed in WordPress. For me, this was a big opportunity to get hands on experience using a CMS and allowed me to learn through making many mistakes while using WordPress.',
    info2: '',
    skills: 'CSS  /  WordPress',
    url: 'https://joshwatley.netlify.app/pagedoesnotexist',
    repo: '', // if no repo, the button will not show up
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
      name: 'instagram',
      url: 'https://www.instagram.com/jw.codes',
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
