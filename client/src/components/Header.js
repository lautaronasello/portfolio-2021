import {
  Box,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  Textarea,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMailBulk } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from './useWindowDimensions';

export default function Header() {
  const [t] = useTranslation('global');
  const { width } = useWindowDimensions();
  const [newFs, setNewFs] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const { colorMode } = useColorMode();
  useEffect(() => {
    if (width <= 320) {
      setNewFs('2rem');
    } else if (width >= 850) {
      setNewFs('4rem');
    } else {
      setNewFs('3rem');
    }
  }, [width]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_krbimfv',
        'template_1iedo0x',
        e.target,
        'user_LRKFoGzMqnItGp0AsSjvP'
      )
      .then(
        (res) => {
          setSuccessMessage(true);
          setTimeout(function () {
            setSuccessMessage(false);
          }, 6000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const [bgColorBtn, setBgColorBtn] = useState(null);

  useEffect(() => {
    var btnDark = {
      bg: '#2d3748',
      hover: '#1a202c',
    };

    var btnLight = {
      bg: '#1b212d80',
      hover: '#1b212d',
    };

    colorMode === 'dark' && setBgColorBtn(btnDark);
    colorMode === 'light' && setBgColorBtn(btnLight);
  }, [colorMode]);

  // console.log(bgColorBtn.hover);

  return (
    <Box align='center' id='inicio'>
      <Text fontSize='2rem' fontWeight='semibold'>
        {t('header.name')}
      </Text>
      <Heading
        py={['0.5rem', '2rem']}
        lineHeight='3rem'
        fontSize={newFs}
        fontFamily='montserrat'
        fontWeight='bold'
      >
        {t('header.title')}
      </Heading>
      <Text lineHeight='2rem' fontSize='1.5rem'>
        {t('header.description')}
      </Text>
      <Button
        bg={bgColorBtn && bgColorBtn.bg}
        h='4rem'
        w='10rem'
        color='whitesmoke'
        mt={5}
        target='_blank'
        leftIcon={<FaMailBulk />}
        borderRadius='0'
        shadow='md'
        rounded='sm'
        onClick={onOpen}
        _hover={{
          shadow: '0 10px 10px 0 rgba(0,0,0,0.5)',
          bg: bgColorBtn && bgColorBtn.hover,
        }}
      >
        {t('header.btn')}
      </Button>
      <Modal
        cancelable={false}
        onClose={onClose}
        size='sm'
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderRadius='none'>
          <form onSubmit={sendEmail}>
            <ModalHeader>{t('header.contact_mail')}</ModalHeader>
            <ModalCloseButton borderRadius='none' />
            <ModalBody>
              <VStack spacing={2}>
                <FormControl id='name' isRequired>
                  <FormLabel>{t('header.first_name')}</FormLabel>
                  <Input
                    name='name'
                    borderRadius='none'
                    border='none'
                    required
                    borderBottom='1px'
                    borderColor='rgba(0,0,0,0.85)'
                    placeholder={t('header.first_name')}
                    w='15rem'
                  />
                </FormControl>
                <FormControl isRequired id='email'>
                  <FormLabel>{t('header.email_address')}</FormLabel>
                  <Input
                    name='email'
                    borderRadius='none'
                    required
                    border='none'
                    w='20rem'
                    borderBottom='1px'
                    borderColor='rgba(0,0,0,0.85)'
                    placeholder={t('header.email_here')}
                    type='email'
                  />
                  <FormHelperText>{t('header.share_email')}</FormHelperText>
                </FormControl>{' '}
                <FormControl isRequired>
                  <FormLabel>{t('header.message')}</FormLabel>
                  <Textarea
                    name='message'
                    required
                    placeholder={t('header.work_together')}
                  />
                </FormControl>
              </VStack>
              {successMessage && (
                <Text as='p' color='green'>
                  {t('header.alert')}
                </Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Input
                borderRadius='none'
                fontWeight='bold'
                type='submit'
                value={t('header.send')}
                cursor='pointer'
              />
              <Button
                fontWeight='light'
                borderRadius='none'
                onClick={onClose}
                colorScheme='gray'
              >
                {t('header.close')}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
