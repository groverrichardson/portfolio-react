import React from 'react';
import GOATLogo from './assets/goat-logo-white.svg';
import ProfilePic from './assets/Mask Group 1.png';
import LinkedInLogo from './assets/linked-logo-white.svg';
import InstagramLogo from './assets/instagram-logo-white.svg';
import GithubLogo from './assets/github-mark.svg';
import ReactLogo from './assets/react-logo.svg';
import JavascriptLogo from './assets/javascript-logo.png';
import NodeJsLogo from './assets/node-js-logo.png';
import VscodeLogo from './assets/vscode-logo.png';
import AdobeXDLogo from './assets/adobe-xd-logo.png';
import InvisionLogo from './assets/invision-logo.svg';
import IllustratorLogo from './assets/illustrator-logo.png';
import PhotoshopLogo from './assets/photoshop-logo.png';
import ScrumLogo from './assets/scrum-logo.png';
import JiraLogo from './assets/jira-software-logo.png';
import TrelloLogo from './assets/trello-logo.jpeg';
import AsanaLogo from './assets/asana-logo.png';
import OutOfContext from './assets/out-of-context-screenshot.png';
import DadJokez from './assets/dad-jokez-screenshot/Screen Shot 2020-07-30 at 7.33.40 PM.png';
import Calculator from './assets/calculator.png';

function Home() {
    return (
        <div className="Home">
            <div class="header-section">
                <div class="main-menu">
                    <img
                        src={GOATLogo}
                        alt="Grove of all Trades logo"
                        class="goat-logo"
                    />
                    <a
                        href="mailto:groverrichardson1987@gmail.com?subject=Job Opportunity"
                        class="main-cta">
                        Let's Work Together
                    </a>
                </div>
                <div class="hero-section">
                    <div class="hero-copy-container">
                        <h1 class="header">
                            <span class="first-parenthesis">[</span>
                            Developer<span class="comma">,</span> Designer
                            <span class="comma">,</span>
                            <br />
                            <span class="line-two">
                                Manager<span class="comma">,</span> Marketer
                            </span>
                            <span class="second-parenthesis">]</span>
                        </h1>
                        <p class="hero-copy">
                            My name is Grover Richardson (Grove of all Trades),
                            and I love solving problems and building beautiful
                            websites that work.
                        </p>
                        <a
                            href="mailto:groverrichardson1987@gmail.com?subject=Job Opportunity"
                            class="main-cta">
                            Let's Work Together
                        </a>
                        <div class="social-icons">
                            <a
                                href="https://www.instagram.com/only_grov/"
                                target="_blank">
                                <img
                                    src={InstagramLogo}
                                    alt="Link to Instagram profile"
                                    class="instagram social"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/grover-richardson-b640b896/"
                                target="_blank">
                                <img
                                    src={LinkedInLogo}
                                    alt="Link to LinkedIn Profile"
                                    class="social linkedin"
                                />
                            </a>
                            <a
                                href="https://github.com/groverrichardson"
                                target="_blank">
                                <img
                                    src={GithubLogo}
                                    alt="Github Logo"
                                    class="social"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="profile-img-container">
                        <img
                            src={ProfilePic}
                            alt="Profile image of Grover Richardson"
                            class="profile profile-img"
                        />
                        <img
                            src={ProfilePic}
                            alt="Profile image of Grover Richardson"
                            class="profile second-img"
                        />
                        <img
                            src={ProfilePic}
                            alt="Profile image of Grover Richardson"
                            class="profile third-img"
                        />
                    </div>
                </div>
                <div class="bkg-circle circle-one"></div>
                <div class="bkg-circle circle-two"></div>
            </div>
            <div class="bio-section-container">
                <h2 class="bio-header">
                    Product manager
                    <span class="by-experience">
                        by experience,
                        <div class="bio-circle bio-cir-one"></div>
                        <div class="bio-circle bio-cir-two"></div>
                    </span>
                    <span class="developer">developer</span>
                    <span class="at-heart">at heart.</span>
                </h2>
                <p class="bio-description">
                    I've managed multiple rebrands, site rebuilds, and have
                    grown departments all before learning to code. Now I'm
                    looking to apply my experience to help your team and company
                    build awesome stuff.
                </p>
            </div>
            <div class="experience-container">
                <div class="wrapper">
                    <div class="exp-cir-one"></div>
                    <div class="exp-cir-two"></div>
                </div>
                <h2 class="experience-header">
                    Work History and Experience
                    <span class="slash-one slash">/</span>
                    <span class="slash-two slash">/</span>
                </h2>
                <div class="job-container">
                    <div class="job info-box-one info-box">
                        <p class="company-name">American Solar Advantage</p>
                        <h3 class="title title-one">CRM & IT Administrator</h3>
                        <p class="year">2019 - Present</p>
                        <h4 class="accomplishments">Accomplishments</h4>
                        <ul>
                            <li class="list-item">
                                Migrated the company from Zoho CRM to Podio
                            </li>
                            <li class="list-item">Maintained CRM</li>
                            <li class="list-item">
                                Manage relations with MSPs
                            </li>
                        </ul>
                    </div>
                    <div class="job info-box-two info-box">
                        <p class="company-name">Freedom Forever</p>
                        <h3 class="title title-two">Senior Program Manager</h3>
                        <p class="year">2016 - 2019</p>
                        <h4 class="accomplishments">Accomplishments</h4>
                        <ul>
                            <li class="list-item">
                                Project managed two website redesigns
                            </li>
                            <li class="list-item">
                                Launched the marketing department
                            </li>
                            <li class="list-item">
                                Grew the marketing department to 6 employees
                            </li>
                        </ul>
                    </div>
                    <div class="job info-box-three info-box">
                        <p class="company-name">ALFC</p>
                        <h3 class="title title-three">
                            Web & Social Media Director
                        </h3>
                        <p class="year">2015 - 2016</p>
                        <h4 class="accomplishments">Accomplishments</h4>
                        <ul>
                            <li class="list-item">
                                Increased social media engagement
                            </li>
                            <li class="list-item">
                                Helped launch new marketing team
                            </li>
                            <li class="list-item">
                                Led the redesign of org. website
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="circle history-circle"></div>
                <div class="circle history-circle"></div>
            </div>
            <div class="skills-container">
                <div class="skill-cir-one"></div>
                <div class="skill-cir-two"></div>
                <h2 class="skills-header">
                    Skills<span class="slash-one slash">/</span>
                    <span class="slash-two slash">/</span>
                </h2>
                <div class="skill-container">
                    <div class="skill info-box-one info-box">
                        <h3 class="skill-title skill-title-one">Development</h3>
                        <p class="skill-description">
                            Front-end, back-end and all the in-between. I love
                            to do it all. Problem solving is my first language
                            so it was only natural I gravitated towards
                            development.
                        </p>
                        <div class="skill-logo-container">
                            <img
                                src={ReactLogo}
                                alt="React logo"
                                class="skill-logo"
                            />
                            <img
                                src={JavascriptLogo}
                                alt="Javascript Logo"
                                class="skill-logo"
                            />
                            <img
                                src={NodeJsLogo}
                                alt="Node JS Logo"
                                class="skill-logo"
                            />
                            <img
                                src={VscodeLogo}
                                alt="Vscode Logo"
                                class="skill-logo"
                            />
                        </div>
                    </div>
                    <div class="skill info-box-two info-box">
                        <h3 class="skill-title skill-title-two">UI/UX</h3>
                        <p class="skill-description">
                            Design is my first love. Throughout the years I've
                            used multiple programs to design digital and print
                            assets.
                        </p>
                        <div class="skill-logo-container">
                            <img
                                src={AdobeXDLogo}
                                alt="Adobe XD Logo"
                                class="skill-logo"
                            />
                            <img
                                src={InvisionLogo}
                                alt="Invision Logo"
                                class="skill-logo"
                            />
                            <img
                                src={IllustratorLogo}
                                alt="Illustrator Logo"
                                class="skill-logo"
                            />
                            <img
                                src={PhotoshopLogo}
                                alt="Photoshop Logo"
                                class="skill-logo"
                            />
                        </div>
                    </div>
                    <div class="skill info-box-three info-box">
                        <h3 class="skill-title skill-title-three">
                            Product Management
                        </h3>
                        <p class="skill-description">
                            I've been fortunate enough to have worked on many
                            successful project launches that have exposed me to
                            many different styles of management.
                        </p>
                        <div class="skill-logo-container">
                            <img
                                src={ScrumLogo}
                                alt="Scrum logo"
                                class="skill-logo"
                            />
                            <img
                                src={JiraLogo}
                                alt="Jira Software Logo"
                                class="skill-logo"
                            />
                            <img
                                src={TrelloLogo}
                                alt="Trello Logo"
                                class="skill-logo"
                            />
                            <img
                                src={AsanaLogo}
                                alt="Asana Logo"
                                class="skill-logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-container">
                <h2 class="work-header">
                    Work<span class="slash-one slash">/</span>
                    <span class="slash-two slash">/</span>
                </h2>
                <div class="projects-container">
                    <div class="project-container project-one">
                        <img
                            src={Calculator}
                            alt="ToDo list project screenshot"
                            class="project-image to-do calculator-img"
                        />
                        <div class="overlay"></div>
                        <h5 class="project-title">Calculator</h5>
                        <p class="project-description">
                            A simple calculator for all of the calculations you
                            could easily just do on your phone. Or any other
                            calculator app. Actually, you may not even need
                            this. But check it out anyway.
                        </p>
                        <h5 class="technologies-header">Technologies</h5>
                        <ul class="technologies">
                            <li class="technologies-copy">React</li>
                            <li class="technologies-copy">SASS</li>
                            <li class="technologies-copy">Tailwind</li>
                        </ul>
                        <div class="work-button-container">
                            <a
                                href="https://github.com/groverrichardson/calculator"
                                class="github-button button"
                                target="_blank">
                                App Repo
                            </a>
                            <a
                                href="https://calculator-six-tau.vercel.app/"
                                class="live-button button"
                                target="_blank">
                                Live Site
                            </a>
                        </div>
                    </div>
                    <div class="project-container project-two">
                        <img
                            src={DadJokez}
                            alt="DadJokez project screenshot"
                            class="project-image"
                        />
                        <div class="overlay"></div>
                        <h5 class="project-title">DadJokez</h5>
                        <p class="project-description">
                            When I had a son I felt compelled to create this app
                            because I needed a way to help people easily
                            identify me as a dad. If you're looking for a few
                            laughs and don't mind a few corny jokes, this is the
                            app for you.
                        </p>
                        <h5 class="technologies-header">Technologies</h5>
                        <ul class="technologies">
                            <li class="technologies-copy">jQuery</li>
                        </ul>
                        <div class="work-button-container">
                            <a
                                href="https://github.com/groverrichardson/dad-jokez"
                                class="github-button button"
                                target="_blank">
                                App Repo
                            </a>
                            <a
                                href="https://dad-jokez.vercel.app/"
                                class="live-button button"
                                target="_blank">
                                Live Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-container">
                <h2 class="contact-header">Let's Connect</h2>
                <p class="contact-copy">
                    I'm always looking for new opportunities to provide value
                    and grow. If you have a project or job opportunity, feel
                    free to reach out so we can connect and build together!
                </p>
                <a
                    href="mailto:groverrichardson1987@gmail.com?subject=Job Opportunity"
                    class="main-cta last-button">
                    Let's Work Together
                </a>
            </div>
            <footer>Designed and Built by Grover Richardson</footer>
        </div>
    );
}

export default Home;
