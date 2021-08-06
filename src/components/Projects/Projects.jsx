import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import ProjectImg2 from '../Image/ProjectImg2';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Featured Projects" />
          {projects.map((project) => {
            const { title, info, info2, skills, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'LOREM KASJDLKASJDLKASJ DLKASJ DLKASJ DKLAJ SDLKAJ SLKDAJSKLDJA '}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>

                      <div className="project-wrapper-skills">
                            <p>{skills ||'Add your skills'}</p>

                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--project"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-projects"
                          href={repo}
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
        

      <Container>
        <div className="project2-wrapper">
          <h1>OTHER PROJECTS</h1>
          <Row key={5}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text2">
                      <h3 className="project-wrapper__text-title">Dissertation Project - Android Kanban Board</h3>
                      <div>
                        <p>
                          
                        </p>
                        <p className="mb-4">This is one of the projects I am currently working on, for my final year project, I look to bring an industry like kanban board system to students/young entrepreneurs. This is a year long project and report developing an Android Application using Firebase.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--project"
                        href="https://github.com/joshwatley/Kanban-Board-Final-Year-Project"
                      >
                        View Code
                      </a>

                        {/* <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-projects"
                          href="testrepo"
                        >
                          Source Code
                        </a> */}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image2">
                      <a
                        href="https://github.com/joshwatley/Kanban-Board-Final-Year-Project"
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <div className = "imageWrapper">
                            <ProjectImg2 alt='' filename="fypimage.jpeg" /></div>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>

              {/*  copy this row and increment in order to add a new mini project - the featured projects are in data. */}
              <Row key={6}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">Hadoop Anagram Solver with Google Cloud</h3>
                      <div>
                        <p>
                          
                        </p>
                        <p className="mb-4">This project was a Hadoop programme in Java using a MapReduce algorithm in order to take an input of 10,000 ebooks and output all the anagrams that appear within these books. It utilised Google Cloud Dataproc Clusters in order to run the program from the cloud. 
                        </p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--project"
                        href="https://github.com/joshwatley/HadoopAnagram"
                      >
                        View Code
                      </a>

                        {/* <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-projects"
                          href="testrepo"
                        >
                          Source Code
                        </a> */}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image2">
                      <a
                        href="https://github.com/joshwatley/HadoopAnagram"
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <div className = "imageWrapper">
                            <ProjectImg2 alt='' filename="anagram.jpg" /></div>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>


              <div className="project_footer"><h3>This was just a few of my other projects, check out my <a target="_blank" href="https://www.github.com/joshwatley">GitHub</a> for more!</h3></div>
        </div>




      </Container>
    </section>
  );
};

export default Projects;
