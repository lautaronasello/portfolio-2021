import { Text, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import github from '../img/github.png';
import menoscaos from '../img/menoscaos.png';
import pikachu from '../img/Pikachu.png';
import snake from '../img/snake-game.jpg';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const [t] = useTranslation('global');

  let projects = [
    {
      id: 1,
      src: menoscaos,
      title: 'Menos Caos por Favor',
      description: `${t('profile.menos-caos')}`,
    },
    {
      id: 2,
      src: snake,
      title: 'Snake Game',
      description: `${t('profile.snake-game')}`,
    },
    {
      id: 3,
      src: pikachu,
      title: 'PokeApp',
      description: `${t('profile.pokeapp')}`,
    },
    {
      id: 4,
      src: github,
      title: 'GitHub',
      description: `${t('profile.github')}`,
    },
  ];

  return (
    <Stack spacing={10}>
      <Text fontSize='48px' fontWeight='bold'>
        {t('profile.title')}
      </Text>
      <SimpleGrid columns={[1, null, 4]} gap={2}>
        {projects.map((data) => (
          <ProjectCard
            key={data.id}
            src={data.src}
            title={data.title}
            description={data.description}
            alt={data.title}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}