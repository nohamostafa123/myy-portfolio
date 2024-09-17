const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/nohamostafa123/myy-portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Noha Mostafa',
  role: 'MERN Stack Developer',
  description:
    'I am MERN stack developer with experience in building dynamic and responsive web applications. I specialize in creating full-stack solutions using MongoDB, Express.js, React, and Node.js, with a focus on delivering efficient and user-friendly experiences. My goal is to continuously improve my skills and contribute to impactful projects.',
  resume: 'https://drive.google.com/file/d/12xSoRK1LBwt6JW9LWcFdLzSo--0kYXjD/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/noha-mostafa-851043291',
    github: 'https://github.com/nohamostafa123/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Private Teacher Website',
    description:
      'The Private Teacher Project is a web application designed to connect students with private teachers in various subjects,and this tools and this is its source code and live demo ',
    stack: ['MongoDB','Express.js','Node.js', 'React', 'JS', 'React Bootstrap','CSS' ],
    sourceCode: 'https://github.com/nohamostafa123/private-teacher-project.git',
    livePreview: 'https://private-teacher-project.netlify.app',
  },
  {
    name: 'Resturant Website',
    description:
      'Resturant react project is a responsive and dynamic website that use this tools and this is its source code and live demo ',
    stack: ['React', 'JS', ' Bootstrap','CSS'],
    sourceCode: 'https://github.com/nohamostafa123/restaurant-app.git',
    livePreview: 'https://resturant-with-react-vite.netlify.app/',
  },
  {
    name: 'Vintage accessories',
    description:
      'Vintage accessories is a responsive and dynamic website that use this tools and this is its source code and live demo',
    stack: ['html5','css3','js','firebase'],
    sourceCode: 'https://github.com/WessamMohamed22/Vintage',
    livePreview: 'https://wessammohamed22.github.io/Vintage/',
  },
  {
    name: 'Online Clothing Shopping',
    description:
      'Online Clothing Shopping is a responsive and dynamic website that use this tools and this is its source code and live demo',
    stack: ['html5', 'css3', 'js'],
    sourceCode: 'https://github.com/nohamostafa123/clothes-shop.git',
    livePreview: 'https://nohamostafa123.github.io/clothes-shop/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Github',
  'Firebase',
  'MySql',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Nm2892003@gmail.com',
}

export { header, about, projects, skills, contact }
