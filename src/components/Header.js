import {
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const colorScheme = useColorModeValue('blackAlpha', 'blue');
  const [t] = useTranslation('global');
  return (
    <Stack spacing={5} align='center'>
      <Text fontSize='20px' fontWeight='semibold'>
        {t('header.name')}
      </Text>
      <Heading
        fontSize={['3rem', '4rem']}
        fontFamily='montserrat'
        fontWeight='bold'
      >
        {t('header.title')}
      </Heading>
      <Text fontSize='16px'>{t('header.description')}</Text>
      <Button
        colorScheme={colorScheme}
        mt={5}
        as='a'
        target='_blank'
        href='https://www.linkedin.com/in/lautaronasello/'
        leftIcon={<FaLinkedin />}
        width='213px'
        borderRadius='0'
        fontWeight='light'
        shadow='lg'
      >
        {t('header.btn')}
      </Button>
    </Stack>
  );
}
