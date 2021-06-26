import { SimpleGrid, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
export default function About() {
  const [t] = useTranslation('global');

  return (
    <SimpleGrid align='center' columns={[1, null, 2]} spacing={1}>
      <Box mt='25%'>
        <Text fontSize='48px' fontWeight='bold'>
          {t('about.title')}
        </Text>
        <Text fontSize='16px'>{t('about.description')}</Text>
      </Box>
      <Box>
        <Image
          shadow='xl'
          src='https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
          alt='Lautaro Nasello'
        />
      </Box>
    </SimpleGrid>
  );
}
