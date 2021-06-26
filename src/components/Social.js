import { Container, Box, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SocialBtn from './SocialBtn';
import { useTranslation } from 'react-i18next';
export default function Social() {
  const [t] = useTranslation('global');
  return (
    <Container maxW='container.sm'>
      <VStack spacing={10}>
        <Text fontSize='48px' fontWeight='bold'>
          {t('social.title')}
        </Text>
        <Box>
          <Text fontSize='24px' fontWeight='semibold'>
            {t('social.description')}
          </Text>
          <Link
            as='a'
            href='mailto:lautaronasello@gmail.com?Subject=Contacto%20desde%20tu%20portfolio'
          >
            lautaronasello@gmail.com
          </Link>
        </Box>
        <SocialBtn />
        <br />
      </VStack>
    </Container>
  );
}
