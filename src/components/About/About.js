import { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import { ThemeContext } from '../../contexts/theme'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about;
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  console.log(`${process.env.PUBLIC_URL}/images/${themeName}-${picture}`);

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${themeName}-${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download='jack-le-resume.pdf'>
            <span type='button' className='btn btn--outline'>
              resume.pdf
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
