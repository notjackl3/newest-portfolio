const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jack-le.com/',
  title: ':-)',
}



const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jack Le',
  role: 'Cool Software Developer',
  picture: 'portrait.jpg',

  description:
    "❝ I am passionately proactive. You will find me doing things above expectation and asking a lot of why's and how's. I am also lazy so I will always be curious of how to make things faster and more efficient. ❞",
  // resume1: `${process.env.PUBLIC_URL}/jack-le-webdev-resume.pdf`,
  resume2: `${process.env.PUBLIC_URL}/jack-le-swe-resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/huu-an-duc-le/',
    github: 'https://github.com/notjackl3',
  },
}

const personalProjects = [
  // personal projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Resume For Me',
    description:
      'A feature-based resume builder, helps students craft their resume easily following jake\'s template.',
    stack: ['Python/Django', 'Javascript/React.js', 'Tailwind', 'AWS'],
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

const hackathonProjects = [
  // hackathon projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LeReplacer | GoOnHacks',
    description:
      'A google extension that uses face-detection algorithm to replace all the faces on your screen with Lebron James.',
    stack: ['Javascript/Node.js', 'MediaPipe', 'Twitter API', 'Gemini API'],
    sourceCode: 'https://devpost.com/software/lereplacer',
    image: 'lereplacer.png',
  },
  {
    name: 'OperAid | TechTO Hackathon',
    description:
      'A voice-controled solution for doctor to look up and record patient information.',
    stack: ['Python/FastAPI', 'Javascript/React.js', 'Tailwind', 'PostgreSQL/Supabase', 'ElevenLabs', 'OpenAI'],
    sourceCode: 'https://generous-cogwheel-353742.framer.app/',
    image: 'operaid.png',
  },
  {
    name: 'GooseGoGeese | Hack The North',
    description:
      'A minigame that detects humans and objects, then, a series of tasks chosen by your friends must be completed!',
    stack: ['Python/FastAPI', 'Javascript/React.js', 'Tailwind', 'YOLO', 'OpenCV', 'MediaPipe'],
    sourceCode: 'https://github.com/notjackl3/HTN2025',
    image: 'goosegogeese.png',
  },
  {
    name: 'Street Roamer S3000 | WallHacks (Winner)',
    description:
      'A robot that can detects faulty street lights and bumpy obstacles by just "sensing" the road.',
    sourceCode: 'https://devpost.com/software/street-roamer-s3000',
    stack: ['C++', 'Arduino'],
    image: 'street-roamer-s3000.png',
  },
]

const experiences = [
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'C',
  'SQL',
  'HTML',
  'CSS',
  'Django',
  'Next.js',
  'React.js',
  'FastAPI',
  'Flask',
  'Tailwind',
  'Bootstrap',
  'Git',
  'Github',
  'PostgreSQL',
  'AWS',
  'Google Cloud Platform',
  'Docker',
  'Supabase',
  'Vercel',
  'Render',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'huuanducle@gmail.com',
}

export { header, about, personalProjects, hackathonProjects, experiences, skills, contact }
