import {
  Text,
  Stack,
  SimpleGrid,
  Box,
  Center,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import menoscaos from '../img/menoscaos.png';
import pokemon from '../img/pokemon-logo.svg';
import snake from '../img/snake-game.svg';
import notes from '../img/wallet.svg';
import spotytime from '../img/spoty.png';
import bookgrand from '../img/libro.svg';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import useElementOnScreen from '../hooks/useElementOnScreen';
import BoxSkills from './BoxSkills';
export default function Profile() {
  const [t] = useTranslation('global');
  const { colorMode } = useColorMode();

  const [currentRef] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    'profile 0.5s forwards ease-out'
  );
  let projects = [
    {
      id: 1,
      src: menoscaos,
      title: 'Menos Caos',
      description: `${t('profile.menos-caos')}`,
      url: 'https://menoscaostest.web.app/',
      zIndex: '10002',
    },
    {
      id: 2,
      src: spotytime,
      title: 'Spotytime',
      description: `${t('profile.spotytime')}`,
      url: 'https://spotytune.web.app/',
      zIndex: '10002',
    },
    {
      id: 3,
      src: bookgrand,
      title: 'Bookgrand',
      description: `${t('profile.bookgrand')}`,
      url: 'https://bookgrand.web.app/',
      zIndex: '10002',
    },
    {
      id: 4,
      src: snake,
      title: 'Snake Game',
      description: `${t('profile.snake-game')}`,
      url: 'https://snake-arg.web.app/',
      zIndex: '10001',
    },
    {
      id: 5,
      src: notes,
      title: 'NotesApp',
      description: `${t('profile.notes')}`,
      url: 'https://notes-lautaronasello.web.app/',
      zIndex: '10001',
    },
    {
      id: 6,
      src: pokemon,
      title: 'PokeApp',
      description: `${t('profile.pokeapp')}`,
      url: 'https://pokeapptest.web.app/',
      zIndex: '10001',
    },
  ];

  return (
    <Stack zIndex='10001' mt={['3rem', '3rem', '3rem']} spacing={'5rem'}>
      <Text fontSize='48px' id='profile' fontWeight='bold'>
        {t('profile.title')}
      </Text>
      <SimpleGrid
        columns={[1, 2, 2, null, 3]}
        gap={[8, '1rem', '1rem', '3rem', '3rem']}
        ref={currentRef}
        opacity='0'
      >
        {projects.map((data) => (
          <Box h={[null, '15rem', '14rem']} key={data.id} zIndex={data.zIndex}>
            <BoxSkills
              key={data.id}
              imageProfile={data.src}
              title={data.title}
              text={data.description}
              alt={data.title}
              url={data.url}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Center>
        <Button
          bg={colorMode === 'light' ? '#1b212d' : '#2d3748'}
          color='whitesmoke'
          size='lg'
          shadow='md'
          leftIcon={<FaGithub />}
          as='a'
          h='4rem'
          rounded='sm'
          href='https://github.com/lautaronasello/'
          target='_blank'
          _hover={{ shadow: '0 10px 10px 0 rgba(0,0,0,0.5)' }}
        >
          GITHUB
        </Button>
      </Center>
    </Stack>
  );
}
