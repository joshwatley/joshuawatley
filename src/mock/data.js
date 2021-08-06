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
  resume: 'https://drive.google.com/file/d/17-9kZJiLcAGOSpvUST0OIajP4-rjrIGc/view?usp=sharing', // if no resume, the button will not show up
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
    img: 'fypimage.png',
    title: 'Portfolio v2',
    info: 'This is the current iteration of my personal portfolio. I started learning React to expand my skills and deploy something I would instantly use. This site was developed using Gatsby and then hosted through Netlify.',
    info2: '',
    skills: 'HTML / CSS  /  JS  /  ReactJS  /  Gatsby',
    url: 'https://joshwatley.netlify.app',
    repo: 'https://github.com/joshwatley/joshuawatley',
  },
  {
    id: nanoid(),
    img: 'mintabpage.npg',
    title: 'Minimalist New Tab',
    info: 'Minimalist start page inspired by r/startpages, built in React, helped develop further React practises and converting ideas to reality using CSS.',
    info2: '',
    skills: 'HTML / CSS  /  JS',
    url: 'https://joshwatley.github.io',
    repo: 'https://github.com/joshwatley/joshwatley.github.io', // if no repo, the button will not show up
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
    img: 'tradingsharks.png',
    title: 'Tradingsharks Business Site Prototype',
    info: 'This was a prototype website for a small business involved in FX Trading. Before going live I offered a free prototype in order to give context to some of the design and components we were discussing. ',
    info2: '',
    skills: 'HTML / CSS  /  JS',
    url: 'https://tradingsharks.netlify.app',
   // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'theBubble.png',
  //   title: '"theBubble" Cryptocurrency Course (Still in development)',
  //   info: 'This was a project I undertook for a small business, creating a semi-working prototype in React, showcasing an idea that I had for their one product store website. Developed in React, I undertook a prototype design stage in AdobeXD before designing the site using React Styled-Componenets. Design process has been documented on GitHub.',
  //   info2: '',
  //   skills: 'HTML / CSS  /  JS  /  ReactJS',
  //   url: 'https://joshwatley.netlify.app/pagedoesnotexist',
  //   repo: 'https://github.com/joshwatley/theBubble_Crypto_Course',
  // },
   
  // {
  //   id: nanoid(),
  //   img: 'landingpage.png',
  //   title: 'Freelance Web Developer Email Landing Page',
  //   info: 'This was a email landing page for a freelance Web Developer developed in React. Currently still in development, this will be used to retrieve potential clients emails in order to create an email list.',
  //   info2: '',
  //   skills: 'HTML / CSS  /  JS  /  ReactJS',
  //   url: 'https://joshwatley.github.io/web_developer_landing_page/index.html',
  //   repo: 'https://github.com/joshwatley/web_developer_landing_page', // if no repo, the button will not show up
  // },


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
