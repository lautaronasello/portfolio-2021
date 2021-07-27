import React, { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import useWindowDimensions from './useWindowDimensions.js';
import {
  IconButton,
  Spacer,
  Menu,
  useColorMode,
  useColorModeValue,
  MenuButton,
  Button,
  MenuList,
  HStack,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function Navigate({ idioma }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  const bg = useColorModeValue('#fafafa', 'gray.700');
  const [t, i18n] = useTranslation('global');
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (idioma === 'es') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  }, [idioma, i18n]);

  return (
    <>
      <Flex
        p={2}
        bg={bg}
        pe={5}
        w='100%'
        pos='fixed'
        top='0rem'
        right='0'
        zIndex='10002'
        align='center'
        shadow='lg'
      >
        <Link
          activeClass='active'
          to='inicio'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Heading
            ml='8'
            size='md'
            cursor='pointer'
            fontFamily='montserrat'
            fontSize='20'
            fontWeight='Bold'
          >
            {width > 750 ? 'Lautaro Nasello' : 'Lautaro N.'}
          </Heading>
        </Link>
        <Spacer />
        {width > 750 && (
          <>
            <HStack spacing={3}>
              <Link
                activeClass='active'
                to='profile'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                  {t('navigate.proyects')}{' '}
                </Text>
              </Link>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                  {t('navigate.about')}{' '}
                </Text>
              </Link>
              <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                  {t('navigate.skills')}{' '}
                </Text>
              </Link>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                  {t('navigate.contact')}{' '}
                </Text>
              </Link>
            </HStack>
            <Menu>
              <MenuButton
                maxW='70px'
                p={1}
                ml={3}
                bg='transparent'
                rounded={false}
                as={Button}
                rightIcon={<FaChevronDown />}
              >
                {t('navigate.language')}
              </MenuButton>
              <MenuList minW='100px'>
                {t('navigate.language') === 'ES' ? (
                  <MenuItem onClick={() => i18n.changeLanguage('en')}>
                    EN
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => i18n.changeLanguage('es')}>
                    ES
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </>
        )}
        {width <= 750 && (
          <Menu>
            <MenuButton
              bg='transparent'
              rounded={false}
              as={Button}
              rightIcon={<FaChevronDown />}
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  activeClass='active'
                  to='profile'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Text cursor='pointer'>{t('navigate.proyects')} </Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Text cursor='pointer'>{t('navigate.about')} </Text>
                </Link>
              </MenuItem>
              <MenuItem>
                {' '}
                <Link
                  activeClass='active'
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Text cursor='pointer'>{t('navigate.skills')} </Text>
                </Link>
              </MenuItem>
              <MenuItem>
                {' '}
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Text cursor='pointer'>{t('navigate.contact')} </Text>
                </Link>
              </MenuItem>
              {t('navigate.language') === 'ES' ? (
                <MenuItem onClick={() => i18n.changeLanguage('en')}>
                  Cambiar a Inglés
                </MenuItem>
              ) : (
                <MenuItem onClick={() => i18n.changeLanguage('es')}>
                  Switch to Spanish
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        )}

        <IconButton
          ml={3}
          isRound={true}
          bg={bg}
          icon={isLight ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </>
  );
}
