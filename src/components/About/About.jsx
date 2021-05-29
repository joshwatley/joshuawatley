import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import css from './skills/css.png'
import github from './skills/github.png'
import pshop from './skills/photoshop.png'
import html from './skills/html.png'
import java from './skills/java.png'
import python from './skills/python.png'
import js from './skills/js.png'


import photoshop from './skills/photoshop.png'



import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hardworking and determined, I am a young developer who enjoys finding problems and coming up with solutions.'}<br></br><br></br>{'I have enjoyed creating with code for over 7 years and with that has come experience using a range of different technologies, and I am always looking to learn more!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Thank you for checking out my site, download my CV below!'}
                </p>

                {/* this will be the my skills/technology icons */}
                <div className='skill-wrapper'>
                  <p>Technologies I've worked with: </p>
                <div className="row">
                          <div className="skill-icon"><img className="img-responsive" src={html} id="html"></img></div>
                          <div className="skill-icon"><img className="img-responsive" src={css} id="css"></img></div>
                          <div className="skill-icon"><img className="img-responsive" src={js} id="js"></img></div>
                          <div className="skill-icon"><img className="img-responsive" src={java} id="java"></img></div>
                          <div className="skill-icon"><img className="img-responsive" src={pshop} id="photoshop"></img></div>
                          <div className="skill-icon"><img className="img-responsive" src={python} id="python"></img></div>
                </div>  
                </div>  




                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Download CV
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
