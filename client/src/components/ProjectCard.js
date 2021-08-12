import { Box, Image, Stack, VStack, Center } from '@chakra-ui/react';
import React from 'react';

export default function ProjectCard({ src, title, description, alt, url }) {
  return (
    <VStack
      as='a'
      maxW='sm'
      borderWidth='1px'
      p={3}
      borderRadius='none'
      boxShadow='lg'
      overflow='hidden'
      align='center'
      bg='whitesmoke'
      className='projectCard'
      cursor='pointer'
      h={['20rem', '20rem ', '15.5rem']}
      _hover={{
        h: '20rem',
        shadow: '0 10px 10px 0 rgba(0,0,0,0.5)',
      }}
      href={url}
      target='_blank'
      color='blackAlpha.900'
    >
      <Image src={src} w='10rem' minH='10rem' alt={alt} />
      <Stack spacing={2} align='center'>
        <Box minH={[null, '3.5rem']} fontWeight='semibold' fontSize='20px'>
          <Center minH='3.5rem'>{title}</Center>
        </Box>
        <Box
          as='p'
          lineHeight='16px'
          minH='4rem'
          wordBreak='break-word'
          fontSize='14px'
        >
          {description}
        </Box>
      </Stack>
    </VStack>
  );
}
