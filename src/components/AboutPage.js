import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { DarkTheme } from './Themes'
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
        Driven Machine Learning Engineer with 2+ years of experience in building software applications, training models to empower businesses. At SUNY, I streamlined the maintenance of a 10,000+ alumni database, improving process efficiency by 22%. 
<br/><br/>
At LTIMindtree, I optimized Large Language Model buffer time, reducing it from 25 to 11 seconds, which increased customer usage by 10% and downloads by 5%. At Larsen & Toubro, I developed a system management application that cut downtime by 20% and reduced security breaches by 50%. 
<br/><br/>
I’m passionate about solving complex problems through Machine Learning and software development. 


        </Main> 

        <BigTitle text="ABOUT" top="10%" left="5%"/>

    </Box>
    </ThemeProvider>
   
  )
}

export default AboutPage