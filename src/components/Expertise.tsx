import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faCloud, faBrain, faCode} from '@fortawesome/free-solid-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const backendSkills = [
    "Java",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "Spring Boot",
    "Flask",
    "Microservices",
    "GDB Debugger"
];

const frontendSkills = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Material UI",
    "Tailwind CSS"
];

const devOpsSkills = [
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "CI/CD",
    "GitHub Actions",
    "Linux",
    "Postman"
];

const aiBlockchainSkills = [
    "AI Code Completion",
    "Ethereum",
    "Solidity",
    "NFTs",
    "Hugging Face",
    "LangChain",
    "Streamlit",
    "Qdrant"
];

const softwareTools = [
    "Git",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Snowflake",
    "JetBrains",
    "Jupyter Notebook",
    "VS Code"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Expertise</h1>
            
            {/* Backend Development Section */}
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Backend Development & Databases</h3>
                    <p>Experienced in building and optimizing scalable backend systems using Java, Node.js, and GraphQL. Proficient in designing RESTful APIs and microservices architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backendSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Frontend Development Section */}
                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Frontend & Full Stack Development</h3>
                    <p>Built responsive and interactive web applications using React.js, TypeScript, and Material UI. Passionate about modern UI/UX design and optimizing performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontendSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* DevOps & Cloud Section */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>DevOps & Cloud Engineering</h3>
                    <p>Implemented cloud-based solutions using AWS and Google Cloud. Automated deployments with Docker, Kubernetes, and CI/CD pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devOpsSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* AI & Blockchain Section */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI & Blockchain Innovation</h3>
                    <p>Developed AI-powered applications and blockchain-based decentralized solutions. Integrated pre-trained AI models and built secure smart contracts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {aiBlockchainSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Software Engineering Tools Section */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Software Engineering Tools & Practices</h3>
                    <p>Proficient in industry-standard development tools, database management systems, and version control platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Platforms:</span>
                        {softwareTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
