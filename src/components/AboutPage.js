import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { DarkTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import Socialicons from '../subComponents/Socialicons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent.js'
import astronaut from '../assets/Images/Bitmoji1-removebg-preview (1).png'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100%;
  height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;
line-height:1.5;

display:flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position:absolute;
left: calc(5rem + 5vw);
top:10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
 <Box>
  <LogoComponent theme='dark'/>
  <Socialicons theme='dark'/>
  <PowerButton />
  <ParticleComponent theme='dark'/>  

      <Spaceman>
        <img src ={astronaut} alt="profile"></img>
        
        </Spaceman> 
        <Main>
        Hey! 👋 I'm a Frontend Developer in the final year of my Computer Science degree. I'm passionate about crafting beautiful web experiences, turning ideas into reality on the screen.
<br/><br/>
But here's the twist—I'm also a tech explorer. I find Machine Learning fascinating; it's like teaching computers to do cool tricks. 🤖
<br/><br/>
And guess what's next on my adventure list? Pursuing a master's in Computer Science to dive deeper into tech's secrets.😉



        </Main> 

        <BigTitle text="ABOUT" top="10%" left="5%"/>

    </Box>
    </ThemeProvider>
   
  )
}

export default AboutPage