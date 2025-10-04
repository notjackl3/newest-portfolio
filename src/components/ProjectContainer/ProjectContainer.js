import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  // Check if this is a hackathon project and parse the title
  const isHackathonProject = project.name.includes('|') || project.name.includes('~')
  let appName
  let hackathonName
  
  if (isHackathonProject) {
    const separator = project.name.includes('|') ? '|' : '~'
    const parts = project.name.split(separator)
    appName = parts[0].trim()
    hackathonName = parts[1].trim()
  }

  return (
    <div className='project'>

      {project.image && (<img
      src={
        project.image.startsWith("http")
          ? project.image
          : `${process.env.PUBLIC_URL}/images/${project.image}`
      }
      alt={`${project.name} screenshot`}
      style={{ width: '100%', objectFit: 'cover' }}
      />
      )}

      {isHackathonProject ? (
        <div className="project__title-container">
          <h3 className="project__app-name">{appName}</h3>
          <div className="project__hackathon-name">{hackathonName}</div>
        </div>
      ) : (
        <h3>{project.name}</h3>
      )}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
  )
}

export default ProjectContainer
