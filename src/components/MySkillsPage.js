import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import Socialicons from '../subComponents/Socialicons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent.js'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;
font-family: 'ubuntu Mono',monospace;
display:flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}
&>*:first-child{
  margin-right: 1rem;

}
`

const Description = styled.div`
color:${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{

    color: ${props => props.theme.body};

}
strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
}
` 

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
 <Box>
  <LogoComponent theme='light'/>
  <Socialicons theme='light'/>
  <PowerButton />
  <ParticleComponent theme='light'/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Data Scientist
          </Title>
          <Description>
          Unlocking the power of data to uncover actionable insights and build predictive solutions. From managing vast datasets to deploying machine learning models.🚀📊
          </Description>
          <Description>
            <strong>I love to work with:</strong><br/>
            <p>Python, R, SQL, Pandas, NumPy, Scikit-learn, TensorFlow, Tableau</p>
          </Description>
          <Description>
            <strong>Tools</strong><br/>
            <p>Jupyter Notebook, PyCharm, Docker, Kubernetes, AWS, GCP</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Software Developer
          </Title>
          <Description>
          Building scalable and efficient software solutions that solve real-world problems. With expertise in full-stack development and system optimization. 💻🔧
          </Description>
          <Description>
            <strong>I love to code in</strong><br/>
            <p>C++, Java, Python, C#, MongoDB, Express.js, Node.js, React</p>
          </Description>
          <Description>
            <strong>Tolols</strong><br/>
            <p>Visual Studio, Eclipse, GitHub, Docker, Kubernetes, Azure </p>
              
          </Description>
          
        </Main>

        <BigTitle text="SKILLS" top="79%" left="30%"/>
    </Box>
    </ThemeProvider>
   
  )
}

export default MySkillsPage