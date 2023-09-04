import React from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import Socialicons from '../subComponents/Socialicons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './AllSvgs';
import { useState } from 'react';
import Intro from './Intro';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Certifications = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 55%;
  right: 0rem;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Resume = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  left: calc(10rem + 4vw);
  text-decoration: none;
  z-index: 1;
`;

const Projects = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 30%;
  left: 2rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  margin-bottom: 1rem;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  margin-bottom: 1rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <Socialicons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill="currentColor" />
          <span>Click here</span>
        </Center>

        <Contact
          click={+click}
          target="_blank"
          onClick={() => window.open('mailto:nischal200216@gmail.com', '_blank')}
          to={{ pathname: 'mailto:nischal200216@gmail.com' }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Connect with me..
          </motion.h2>
        </Contact>
        <Certifications to="/certifications">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Certifications
          </motion.h2>
        </Certifications>
        <Resume
          href="https://drive.google.com/file/d/1xc-uHMWsG9f_V23UCyad-58-Bdis050u/view?usp=sharing"
          target="_blank"
          click={click}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.h2>
        </Resume>
        <Projects to="/projects" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </Projects>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skills to="/Skills" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
