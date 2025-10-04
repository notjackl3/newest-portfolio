import { useState } from 'react'
import uniqid from 'uniqid'
import { personalProjects, hackathonProjects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal')
  
  const allProjects = [...personalProjects, ...hackathonProjects]
  if (!allProjects.length) return null

  const currentProjects = activeTab === 'personal' ? personalProjects : hackathonProjects

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      
      <div className='projects__toggle'>
        <button 
          type="button"
          className={`projects__toggle-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          personal
        </button>
        <button 
          type="button"
          className={`projects__toggle-btn ${activeTab === 'hackathon' ? 'active' : ''}`}
          onClick={() => setActiveTab('hackathon')}
        >
          hackathon
        </button>
      </div>

      <div className='projects__grid'>
        {currentProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
