import React from 'react';
import { VStack } from '@chakra-ui/layout';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Navigate from './components/Navigate';
import { Center, Container } from '@chakra-ui/react';
import About from './components/About';
import Skills from './components/Skills';

function App({ idioma }) {
  return (
    <>
      <VStack p={5} fontFamily='montserrat'>
        <Navigate idioma={idioma} />
        <Container maxW='container.xl' align='center'>
          <Center h='80vh'>
            <Header />
          </Center>
          <VStack spacing={[20, '60px']}>
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
