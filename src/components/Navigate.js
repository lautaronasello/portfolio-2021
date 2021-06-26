import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import {
  IconButton,
  Spacer,
  Menu,
  useColorMode,
  useColorModeValue,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Navigate() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const bg = useColorModeValue('#fafafa', 'gray.700');
  const [t, i18n] = useTranslation('global');
  return (
    <Flex
      p={2}
      bg={bg}
      pe={5}
      w='100%'
      pos='fixed'
      top='0rem'
      right='0'
      zIndex='2'
      align='center'
    >
      <Heading
        ml='8'
        size='md'
        fontFamily='montserrat'
        fontSize='20'
        fontWeight='Bold'
      >
        Lautaro Nasello
      </Heading>
      <Spacer />
      <Menu>
        <MenuButton
          bg='transparent'
          rounded={false}
          as={Button}
          rightIcon={<FaChevronDown />}
        >
          {t('navigate.languaje')}
        </MenuButton>
        <MenuList minW='100px'>
          <MenuItem onClick={() => i18n.changeLanguage('es')}>ES</MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage('en')}>EN</MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        ml={3}
        isRound={true}
        bg={bg}
        icon={isLight ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
