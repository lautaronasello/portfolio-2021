import React, { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/layout';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Navigate from './components/Navigate';
import { Center, Container } from '@chakra-ui/react';
import About from './components/About';
import Skills from './components/Skills';
import useWindowDimensions from './components/useWindowDimensions';

function App() {
  const { width } = useWindowDimensions();
  const [newHeight, setNewHeight] = useState('70vh');

  useEffect(() => {
    width <= 320 ? setNewHeight('80vh') : setNewHeight('70vh');
  }, [width]);

  return (
    <>
      <VStack p={5} fontFamily='montserrat'>
        <Navigate />
        <Container maxW='container.xl' align='center'>
          <Center h={newHeight}>
            <Header />
          </Center>
          <VStack spacing={20}>
            <Profile />
            <About />
            <Skills />
            <Social />
          </VStack>
        </Container>
      </VStack>
    </>
  );
}

export default App;
