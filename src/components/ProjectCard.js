import {
  Box,
  Image,
  Stack,
  Button,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export default function ProjectCard({ src, title, description, alt }) {
  const colorScheme = useColorModeValue('blackAlpha', 'blue');
  return (
    <VStack
      maxW='sm'
      spacing='3'
      borderWidth='1px'
      p={3}
      borderRadius='none'
      boxShadow='xl'
      overflow='hidden'
      align='center'
    >
      <Image src={src} w='10rem' h='10rem' alt={alt} />
      <Stack spacing={2} align='center'>
        <Box fontWeight='semibold' fontSize='16px'>
          {title}
        </Box>
        <Box fontSize='12px'>{description}</Box>
        <Box>
          <Button colorScheme={colorScheme} rounded='none' fontWeight='light'>
            {title}
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}
