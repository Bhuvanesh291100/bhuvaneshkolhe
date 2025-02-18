import React from "react";
import taco from '../assets/images/tacodb.png';
import nft from '../assets/images/nft.jpg';
import codec from '../assets/images/code-completion.jpg';
import udgir from '../assets/images/udgir.jpg';
import textchat from '../assets/images/text-chat.jpg';
import pintos from '../assets/images/os.jpg';
import covid19 from '../assets/images/covid19.jpeg';
import agnelhub from '../assets/images/agnelhub.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={taco} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Taco-DB</h2></a>
                <p>Designed and implemented a lightweight relational database management system using C++. 
                    Features include POSIX-compliant file storage, a buffer pool manager, and page-based data layout.
                    Implemented B-Tree indexing for fast lookups, reducing query execution time by 20%.
                    Developed a query optimizer prototype capable of handling 10+ multi-table queries simultaneously.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={nft} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>E-Commerce Warranty System Using NFTs</h2></a>
                <p>Built a decentralized warranty verification system using Ganache blockchain and Solidity smart contracts.
                    The system ensures tamper-proof ownership transfer and secure product warranty validation.
                    Developed a user-friendly React.js frontend with an intuitive interface for warranty registration and NFT minting.
                    Utilized IPFS for decentralized storage to enhance security and transparency..</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={codec} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>AI Code Completion Tool</h2></a>
                <p>Developed an AI-powered code completion system using Hugging Face models, Streamlit, and Flask.
                    Implemented intelligent syntax correction and auto-completion, improving developer productivity.
                    Integrated pre-trained models for multi-language support, achieving high suggestion accuracy.
                    Built a web-based interactive UI, allowing developers to test and use AI-assisted code suggestions seamlessly.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={udgir} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>UDGIR ONLINE</h2></a>
                <p> Developed this for Texity Technology as a part of my Internship. 
                    Designed and developed an Android application with a responsive GUI to enhance user experience.
                    Expanded functionality by adding new features and ensuring smooth interactions.
                    Managed the backend and database, developing APIs using Spring Boot.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={textchat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Text Chat Application</h2></a>
                <p>Built a multi-client text-based chat application in C++ using TCP for network communication.
                    Implemented multithreading techniques to ensure high concurrency and low latency.
                    Designed error-handling protocols to enhance message reliability and minimize failures.
                    Achieved 99.9% uptime, ensuring real-time, reliable text communication.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={pintos} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>PintOS: OS Kernel Development</h2></a>
                <p>Developed key operating system components, including thread scheduling, synchronization primitives, and priority scheduling.
                    Implemented a virtual memory manager with paging and swapping mechanisms, supporting 100+ concurrent processes.
                    Architected and refined file system operations, enabling multi-level directories and ensuring data consistency.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={covid19} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>COVID-PRED</h2></a>
                <p>Developed a machine learning-powered COVID-19 prediction system.
                    Implemented Logistic Regression, Random Forest, and ARIMA models, achieving accuracy rates of 90.16%, 93.01%, and 99.72%, respectively.
                    Designed an interactive web dashboard to visualize real-time COVID predictions.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={agnelhub} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>AgnelHub - College Marketplace App</h2></a>
                <p>Built a web-based course scheduling platform for colleges, streamlining professor-course allocations.
                    Implemented ReactJS frontend and Node.js/Express.js backend, integrated with MySQL for data storage.
                    Developed dashboard features, including course scheduling, request management, and report generation.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;