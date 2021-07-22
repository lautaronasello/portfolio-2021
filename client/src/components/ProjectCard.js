import {
  Box,
  Image,
  Stack,
  Button,
  useColorModeValue,
  VStack,
  Center,
} from '@chakra-ui/react';
import React from 'react';

export default function ProjectCard({ src, title, description, alt, url }) {
  const colorScheme = useColorModeValue('blackAlpha', 'blue');
  return (
    <VStack
      maxW='sm'
      borderWidth='1px'
      p={3}
      borderRadius='none'
      boxShadow='xl'
      overflow='hidden'
      align='center'
    >
      <Image src={src} w='10rem' h='10rem' alt={alt} />
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
        <Box>
          <Button
            as='a'
            target='_blank'
            href={url}
            colorScheme={colorScheme}
            rounded='none'
            fontWeight='light'
          >
            {title}
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}
