import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../portfolio'
import './Experiences.css'

const Experiences = () => {
  if (experiences.length) return null
  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experiences</h2>

      <VerticalTimeline
        layout='1-column-left'
        lineColor='transparent'
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="GenAI Genesis • October, 2025 - Present"
        >
          <h3 className="vertical-timeline-element-title experience current">Director of Operations</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="University of Toronto • September, 2025 - Present"
        >
          <h3 className="vertical-timeline-element-title experience current">Research Assistant</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="UofT Blueprint • August, 2025 - Present"
        >
          <h3 className="vertical-timeline-element-title experience current">Software Project Lead</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="UTM Career Center  • August, 2025 - Present"
        >
          <h3 className="vertical-timeline-element-title experience current">Tech Support Assistant</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="UTM Student Society for Algorithmic Modeling • May, 2025 - Present"
        >
          <h3 className="vertical-timeline-element-title experience current">Vice President of Tech</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="TRG International • May, 2025 - August, 2025"
        >
          <h3 className="vertical-timeline-element-title experience">Standard Operation Procedure Intern</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="Univeristy of Toronto • Dec, 2024 - May, 2025"
        >
          <h3 className="vertical-timeline-element-title experience">Computer Science & Math Mentor</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{ display: 'none' }} 
          style= {{ margin: '0', padding: '0' }}
          date="British International School • September, 2018 - June, 2024"
        >
          <h3 className="vertical-timeline-element-title experience">Highschool Experiences</h3>
          <p style={{marginBottom: 0}}>
            • Design Technology Ambassador <br/>
            • Content Creator & Video Editor <br/>
            • Academic Mentor <br/>
            • President of Design Now <br/>
            • Co-President of Create and Care <br/>
            • Prefect Student <br/>
            • Wellbeing Committee Member <br/>
          </p>
        </VerticalTimelineElement> 
      </VerticalTimeline>
      <div className='experiences__grid'>
        {/* {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))} */}
      </div>
    </section>
  )
}

export default Experiences
