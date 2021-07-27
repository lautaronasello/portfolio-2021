import { Text, Stack, SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import github from '../img/github.png';
import menoscaos from '../img/menoscaos.png';
import pikachu from '../img/Pikachu.png';
import snake from '../img/snake-game.jpg';
import notes from '../img/wallet.svg';
import spotytime from '../img/spoty.png';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const [t] = useTranslation('global');

  let projects = [
    {
      id: 1,
      src: menoscaos,
      title: 'Menos Caos por Favor',
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
      src: snake,
      title: 'Snake Game',
      description: `${t('profile.snake-game')}`,
      url: 'https://snake-arg.web.app/',
      zIndex: '10002',
    },
    {
      id: 4,
      src: pikachu,
      title: 'PokeApp',
      description: `${t('profile.pokeapp')}`,
      url: 'https://pokeapptest.web.app/',
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
      src: github,
      title: 'GitHub',
      description: `${t('profile.github')}`,
      url: 'https://github.com/lautaronasello/',
      zIndex: '10001',
    },
  ];

  return (
    <Stack zIndex='10001' mt={['3rem', '3rem', '3rem']} spacing={10}>
      <Text fontSize='48px' id='profile' fontWeight='bold'>
        {t('profile.title')}
      </Text>
      <SimpleGrid
        columns={[1, null, 2, null, 3]}
        gap={[8, '5rem', 10, null, 3]}
      >
        {projects.map((data) => (
          <Box h={[null, '18rem']} key={data.id} zIndex={data.zIndex}>
            <ProjectCard
              key={data.id}
              src={data.src}
              title={data.title}
              description={data.description}
              alt={data.title}
              url={data.url}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
