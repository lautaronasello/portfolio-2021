import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SimpleGrid, IconButton } from '@chakra-ui/react';

export default function SocialBtn() {
  return (
    <SimpleGrid columns={4} gap={[1, null, 2]}>
      <IconButton
        as='a'
        mx='5px'
        size='lg'
        fontSize='30px'
        icon={<FaInstagram />}
        target='_blank'
        href='https://www.instagram.com/launasello/'
        shadow='xl'
        _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
      />
      <IconButton
        as='a'
        mx='5px'
        size='lg'
        fontSize='30px'
        icon={<FaLinkedin />}
        target='_blank'
        href='https://www.linkedin.com/in/lautaronasello/'
        shadow='xl'
        _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
      />
      <IconButton
        as='a'
        mx='5px'
        size='lg'
        fontSize='30px'
        icon={<FaTwitter />}
        target='_blank'
        href='https://twitter.com/LauNasello'
        shadow='xl'
        _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
      />
      <IconButton
        as='a'
        mx='5px'
        size='lg'
        fontSize='30px'
        icon={<FaGithub />}
        target='_blank'
        href='https://github.com/lautaronasello'
        shadow='xl'
        _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
      />
    </SimpleGrid>
  );
}
