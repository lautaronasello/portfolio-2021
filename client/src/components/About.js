import { SimpleGrid, Box, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useElementOnScreen from '../hooks/useElementOnScreen';
import AboutImg from './AboutImg';

export default function About() {
  const [t] = useTranslation('global');

  const [containerRef] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    'anim1 0.5s forwards ease-out'
  );

  return (
    <Center>
      <SimpleGrid
        align='center'
        columns={{ base: 1, lg: 2 }}
        gap={{ base: '2rem', md: null }}
        id='about'
      >
        <Box
          ref={containerRef}
          className='aboutBox'
          id='aboutBox'
          mt={{ base: null, md: '10%' }}
          mb={[null]}
          opacity='0'
        >
          <Text fontSize='48px' fontWeight='bold'>
            {t('about.title')}
          </Text>
          <Text lineHeight='2rem' fontSize='24px' fontWeight='light'>
            {t('about.description')}
          </Text>
        </Box>
        <AboutImg />
      </SimpleGrid>
    </Center>
  );
}
