import {
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from './useWindowDimensions';

export default function Header() {
  // const colorScheme = useColorModeValue('linkedin', 'blue');
  const [t] = useTranslation('global');
  const { width } = useWindowDimensions();
  const [newFs, setNewFs] = useState('');

  useEffect(() => {
    if (width <= 320) {
      setNewFs('2rem');
    } else if (width >= 850) {
      setNewFs('4rem');
    } else {
      setNewFs('3rem');
    }
  }, [width]);

  return (
    <Stack spacing={5} align='center' id='inicio'>
      <Text fontSize='1.25rem' fontWeight='semibold'>
        {t('header.name')}
      </Text>
      <Heading fontSize={newFs} fontFamily='montserrat' fontWeight='bold'>
        {t('header.title')}
      </Heading>
      <Text fontSize='16px'>{t('header.description')}</Text>
      <Button
        bg='#0a66c2'
        size='lg'
        color='whitesmoke'
        _hover={{ bg: '#004182' }}
        mt={5}
        as='a'
        target='_blank'
        href='https://www.linkedin.com/in/lautaronasello/'
        leftIcon={<FaLinkedin />}
        borderRadius='0'
        fontWeight='light'
        shadow='dark-lg'
      >
        {t('header.btn')}
      </Button>
    </Stack>
  );
}
