import { SimpleGrid, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import foto from '../img/about.jpeg';

export default function About() {
  const [t] = useTranslation('global');

  return (
    <SimpleGrid
      align='center'
      columns={[1, null, 2]}
      id='about'
      // position={[null, 'relative']}
      // top={[null, '15rem']}
    >
      <Box mt={[null, '25%']} mb={['5rem', null]}>
        <Text fontSize='48px' fontWeight='bold'>
          {t('about.title')}
        </Text>
        <Text lineHeight='1.5rem' fontSize='24px' fontWeight='light'>
          {t('about.description')}
        </Text>
      </Box>
      <Box>
        <Image
          mb='10px'
          objectFit='cover'
          maxH='30rem'
          src={foto}
          boxShadow='2xl'
          alt='Lautaro Nasello'
        />
      </Box>
    </SimpleGrid>
  );
}
