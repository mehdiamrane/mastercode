import React from 'react';
import { Heading, useColorMode, Icon, Flex } from '@chakra-ui/core';

const NothingFound = ({ thing }) => {
  const { colorMode } = useColorMode();

  const boxBgColor = { light: 'white', dark: 'gray.800' };
  const navbarBorderColor = { light: 'gray.100', dark: 'gray.700' };

  const iconColor = { light: 'gray.300', dark: 'gray.600' };
  const textColor = { light: 'gray.400', dark: 'gray.500' };

  return (
    <Flex
      align='center'
      flexDir='column'
      justify='center'
      py='24'
      bg={boxBgColor[colorMode]}
      border='2px'
      borderColor={navbarBorderColor[colorMode]}
      rounded='lg'
      w='full'
    >
      <Icon name='info-outline' size='32px' color={iconColor[colorMode]} mb='6' />
      <Heading as='p' size='md' fontWeight='normal' color={textColor[colorMode]}>
        Aucun {thing} trouvé !
      </Heading>
    </Flex>
  );
};

export default NothingFound;
