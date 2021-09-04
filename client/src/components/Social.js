import { Container, Link, Text, VStack, Center } from '@chakra-ui/react';
import React from 'react';
import SocialBtn from './SocialBtn';
import { useTranslation } from 'react-i18next';
export default function Social() {
  const [t] = useTranslation('global');

  return (
    <Container maxW='container.md' id='contact'>
      <VStack spacing={8}>
        <Text fontSize='3rem' fontWeight='bold'>
          {t('social.title')}
        </Text>
        <Text fontSize='1.5rem' fontWeight='semibold'>
          {t('social.description')}
        </Text>
        <Link
          as='a'
          href='mailto:lautaronasello@gmail.com?Subject=Contacto%20desde%20tu%20portfolio'
        >
          lautaronasello@gmail.com
        </Link>
        <SocialBtn />

        <Text fontSize='12px'>{t('social.spec')} </Text>
      </VStack>
    </Container>
  );
}
