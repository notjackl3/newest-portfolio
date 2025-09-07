const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}



const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jack Le',
  role: 'Software Developer',
  picture: 'portrait.jpg',

  description:
    "❝ I am passionately proactive. You will find me doing things above expectation and asking a lot of why's and how's. I am also lazy so I will always be curious of how to make things faster and more efficient. ❞",
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/huu-an-duc-le/',
    github: 'https://github.com/notjackl3',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Resume For Me',
    description:
      'A feature-based resume builder, helps students craft their resume easily following jake\'s template.',
    stack: ['Python/Django', 'Javascript/React', 'Tailwind', 'AWS'],
    sourceCode: 'https://github.com/notjackl3/jake-resume-for-me',
    image: 'resume-for-me.png',
  },
  {
    name: 'UTM Live', 
    description:
      'An interactive, 3D map, allows students to find the perfect study spots around the campus!',
    stack: ['Python/Django', 'Mapbox', 'Posgresql'],
    sourceCode: 'https://github.com/notjackl3/utm-live',
    livePreview: 'utm-live.onrender.com/',
    image: 'utm-live.png',
  },
  {
    name: 'Image Gallery',
    description:
      'An image gallery using many cloud technologies, users can upload/download images publicly',
    stack: ['Python/FastAPI', 'AWS'],
    sourceCode: 'https://github.com/notjackl3/image-gallery',
    image: 'image-gallery.png',
  },
  {
    name: 'Organese',
    description:
      'A scheduling app, to create personalized timetables, share bookings, and manage tasks.',
    stack: ['Python/Django', 'Javascript', 'Bootstrap', 'Postgres'],
    sourceCode: 'https://github.com/notjackl3/organese',
    image: 'organese.png',
  },
  {
    name: 'Job Hunter',
    description:
      'A dynamic job searcher, hunts for latest posts, analyse market demand, and write cover letters.',
    stack: ['Python/Django', 'Beautiful Soup', 'OpenAI', 'Postgres', 'Matplotlib', 'AWS'],
    sourceCode: 'https://github.com/notjackl3/job-hunter',
    image: 'job-hunter.png',
  },
  {
    name: 'Word Diff',
    description:
      'A version control app, users can track real-time changes between two offline Word documents.',
    stack: ['Python/Flask', 'Python-docx'],
    sourceCode: 'https://github.com/notjackl3/word-diff',
    image: 'word-diff.png',
  },
  {
    name: 'Youtube as a Service',
    description:
      'An unlimited storage app, losslessly compresses/retrieves any files into/from Youtube videos.',
    stack: ['Python', 'Javascript', 'OpenCV', 'Numpy', 'Google Cloud Platform', 'AWS'],
    sourceCode: 'https://github.com/notjackl3/youtube-as-a-service',
    image: 'yaas.png',
  },
  {
    name: 'Resume Builder',
    description:
      'A basic resume builder, tailors resumes and produce keyword-optimized PDFs for ATS scoring',
    stack: ['Python', 'OpenAI', 'Tkinter', 'PyQt5'],
    sourceCode: 'https://github.com/notjackl3/resume-builder',
    image: 'resume-builder.png',
  },
]

const experiences = [
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Django',
  'FastAPI',
  'Flask',
  'JavaScript',
  'React',
  'Java',
  'PostgreSQL',
  'AWS',
  'Google Cloud Platform',
  'HTML',
  'CSS',
  'Tailwind',
  'Postman',
  'Git',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'huuanducle@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
