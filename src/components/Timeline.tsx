import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
        
          {/* LTIMindtree Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2023 - May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">LTIMindtree | Remote</h4>
            <p>
              - Integrated backend Java applications, improving system performance and reducing response time by 20%. <br />
              - Debugged and resolved 5+ critical issues for live environments. <br />
              - Streamlined CI/CD pipelines for seamless project deployment.
            </p>
          </VerticalTimelineElement>

          {/* Texity Technology Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Texity Technology | Pune, India</h4>
            <p>
              - Developed a centralized platform for local businesses using Java Spring Boot & MongoDB.<br />
              - Designed Android interfaces for seamless customer interaction, increasing daily user retention.<br />
              - Led debugging and testing efforts, ensuring a smooth product launch with 5K+ downloads.
            </p>
          </VerticalTimelineElement>

          {/* SkillVertex Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 - Jan 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SkillVertex | Remote</h4>
            <p>
              - Built responsive web projects using HTML, CSS, and JavaScript. <br />
              - Improved performance and accessibility by ensuring WCAG compliance. <br />
              - Conducted thorough testing across devices for a seamless user experience.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
