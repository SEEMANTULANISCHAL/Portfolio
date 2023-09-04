import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';

// Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './subComponents/SoundBar';


function App() {

  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar/>
      <AnimatePresence exit={{ when: false }} initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certifications" element={<BlogPage />} />
          <Route path="/projects" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
        </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
