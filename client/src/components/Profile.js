import { Text, Stack, SimpleGrid } from '@chakra-ui/react';
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
    },
    {
      id: 3,
      src: spotytime,
      title: 'Spotytime',
      description: `${t('profile.spotytime')}`,
      url: 'https://spotytune.web.app/',
    },
    {
      id: 4,
      src: snake,
      title: 'Snake Game',
      description: `${t('profile.snake-game')}`,
      url: 'https://snake-arg.web.app/',
    },
    {
      id: 5,
      src: pikachu,
      title: 'PokeApp',
      description: `${t('profile.pokeapp')}`,
      url: 'https://pokeapptest.web.app/',
    },
    {
      id: 6,
      src: notes,
      title: 'NotesApp',
      description: `${t('profile.notes')}`,
      url: 'https://notes-lautaronasello.web.app/',
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      description: `${t('profile.github')}`,
      url: 'https://github.com/lautaronasello/',
    },
  ];

  return (
    <Stack
      zIndex='10001'
      h={[null, '20rem']}
      mt={['3rem', null, 0]}
      spacing={10}
    >
      <Text fontSize='48px' id='profile' fontWeight='bold'>
        {t('profile.title')}
      </Text>
      <SimpleGrid columns={[1, null, 2, null, 3]} gap={[8, null, 6, null, 3]}>
        {projects.map((data) => (
          <ProjectCard
            key={data.id}
            src={data.src}
            title={data.title}
            description={data.description}
            alt={data.title}
            url={data.url}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
