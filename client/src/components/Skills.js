import { Box, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  FaHtml5,
  FaGithub,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa';
import BoxSkills from './BoxSkills';
import { useTranslation } from 'react-i18next';
import useElementOnScreen from '../hooks/useElementOnScreen';
export default function Skills() {
  const [t] = useTranslation('global');
  const [containerRef] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
    'skills 0.5s forwards ease-out'
  );

  const skills = [
    {
      id: 1,
      icon: FaHtml5,
      title: 'HTML5',
      text: `${t('skills.html5')}`,
    },
    {
      id: 2,
      icon: FaCss3,
      title: 'CSS',
      text: `${t('skills.css')}`,
    },
    {
      id: 3,
      icon: FaJs,
      title: 'JavaScript',
      text: `${t('skills.javascript')}`,
    },
    {
      id: 4,
      icon: FaReact,
      title: 'React Js.',
      text: `${t('skills.react')}`,
    },
    {
      id: 5,
      icon: FaDatabase,
      title: 'Strapi',
      text: `${t('skills.strapi')}`,
    },
    {
      id: 6,
      icon: FaBootstrap,
      title: 'Bootstrap',
      text: `${t('skills.bootstrap')}`,
    },
    {
      id: 7,
      image: true,
      title: 'Firebase',
      text: `${t('skills.firebase')}`,
    },
    {
      id: 8,
      icon: FaGithub,
      title: 'GitHub',
      text: `${t('skills.github')}`,
    },
  ];

  return (
    <VStack spacing={10} id='skills'>
      <Box fontSize='48px' fontWeight='bold'>
        {t('skills.title')}
      </Box>
      <SimpleGrid
        ref={containerRef}
        alignContent='center'
        columns={[1, 2, 4]}
        gap={['15px']}
        opacity='0'
      >
        {skills.map((data) => (
          <BoxSkills
            key={data.id}
            icon={data.icon}
            image={data.image}
            title={data.title}
            text={data.text}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
