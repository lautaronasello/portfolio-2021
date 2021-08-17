import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';
import foto from '../img/about.jpeg';

export default function AboutImg() {
  const [containerRef] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    'aboutimg 0.5s forwards ease-out'
  );
  return (
    <Box ref={containerRef} opacity='0'>
      <Image
        mb='10px'
        objectFit='cover'
        maxH='30rem'
        src={foto}
        boxShadow='xl'
        alt='Lautaro Nasello'
      />
    </Box>
  );
}
