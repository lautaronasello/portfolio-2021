import { VStack, Text, Icon, useColorMode, Image } from '@chakra-ui/react';
import React from 'react';
import useWindowDimensions from './useWindowDimensions';

export default function BoxSkills({
  title,
  icon,
  text,
  image,
  imageProfile,
  url,
  alt,
}) {
  const { colorMode } = useColorMode();
  const { width } = useWindowDimensions();
  var colorFirebase = () => {
    if (colorMode === 'dark') {
      return '#ecedee';
    } else {
      return '#1b212d';
    }
  };

  var trueFunction = () => {
    if (imageProfile && colorMode === 'dark' && width > 750) {
      return '#c5c5c5';
    }

    if (imageProfile && width <= '750') {
      return '#fafafa';
    }
  };

  return (
    <VStack
      as={'a'}
      href={imageProfile && url}
      target='_black'
      bg={trueFunction()}
      color={trueFunction() && '#1a202c'}
      className='boxSkills'
      cursor={imageProfile && 'pointer'}
      p={imageProfile && '1rem'}
      minH={imageProfile && '15.9rem'}
      _hover={
        imageProfile && {
          shadow: 'lg',
          bg: '#fafafa',
          color: '#1a202c',
        }
      }
      align='center'
    >
      {icon && <Icon as={icon} w='54px' h='54px' />}
      {imageProfile && <Image src={imageProfile} w='5rem' h='5rem' alt={alt} />}
      {image && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='54'
          viewBox='0 0 32 32'
          width='54'
        >
          <path
            className='firebase'
            d='M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z'
            fill={colorFirebase()}
          />
          <path
            className='firebase'
            d='M13.445 8.543l2.972 5.995-11.97 11.135z'
            fill={colorFirebase()}
          />
          <path
            className='firebase'
            d='M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z'
            fill={colorFirebase()}
          />
          <path
            className='firebase'
            d='M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z'
            fill={colorFirebase()}
          />
        </svg>
      )}
      <Text fontSize='28px'>{title}</Text>
      <Text fontSize='14px'>{text}</Text>
    </VStack>
  );
}
