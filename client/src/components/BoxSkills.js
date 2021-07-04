import { VStack, Text, Icon } from '@chakra-ui/react';
import React from 'react';

export default function BoxSkills({ title, icon, text }) {
  return (
    <VStack align='center'>
      <Icon as={icon} w='54px' h='54px' />
      <Text fontSize='28px'>{title}</Text>
      <Text fontSize='14px'>{text}</Text>
    </VStack>
  );
}
