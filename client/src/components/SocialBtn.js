import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SimpleGrid, IconButton, Center, HStack } from '@chakra-ui/react';

export default function SocialBtn() {
  return (
    <Center>
      <HStack spacing={['1rem', '2rem', '2rem']}>
        <IconButton
          as='a'
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
          size='lg'
          fontSize='30px'
          icon={<FaGithub />}
          target='_blank'
          href='https://github.com/lautaronasello'
          shadow='xl'
          _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
        />
      </HStack>
    </Center>
  );
}
