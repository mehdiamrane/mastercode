import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, IconButton, Link, Stack, useColorMode } from '@chakra-ui/core';
import NextLink from 'next/link';

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBgColor = { light: 'white', dark: 'gray.800' };
  const navbarBorderColor = { light: 'gray.200', dark: 'gray.700' };
  const logoColor = { light: 'gray.900', dark: 'gray.100' };
  const linkColor = { light: 'gray.700', dark: 'gray.300' };
  const colorSwitchIcon = { light: 'moon', dark: 'sun' };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        w='full'
        bg={scrollY < 20 ? 'transparent' : navbarBgColor[colorMode]}
        borderBottom={scrollY < 20 ? '0' : '1px'}
        borderColor={navbarBorderColor[colorMode]}
        py='2'
        position='sticky'
        top='0'
        left='0'
        transition='all 150ms ease-in-out'
        zIndex='sticky'
      >
        <Flex
          maxW='maxSiteWidth'
          align='center'
          justify='space-between'
          mx='auto'
          px={{ base: '4', sm: '6', lg: '8' }}
        >
          <Box>
            <NextLink href='/' passHref>
              <Link
                fontWeight='semibold'
                color={logoColor[colorMode]}
                fontSize='md'
                _hover={{ color: 'brand.500' }}
              >
                mastercode_
              </Link>
            </NextLink>
          </Box>
          <Stack isInline>
            <NextLink href='/' passHref>
              {/* <Link
                px='4'
                py='2'
                bg='transparent'
                rounded='md'
                fontSize='xs'
                fontWeight='semibold'
                letterSpacing='wide'
                color='gray.500'
                _hover={{ color: 'brand.500', bg: linkHoverBgColor[colorMode] }}
                transition='all 150ms ease-in-out'
                textTransform='uppercase'
              >
                Articles
              </Link> */}
              <Button
                as='a'
                size='sm'
                rounded='md'
                fontSize='xs'
                fontWeight='semibold'
                letterSpacing='wide'
                variant='ghost'
                color={linkColor[colorMode]}
                textTransform='uppercase'
              >
                Articles
              </Button>
            </NextLink>
            {/* <NextLink href='/newsletter' passHref>
              <Link
                px='4'
                py='2'
                bg='transparent'
                rounded='md'
                fontSize='xs'
                fontWeight='semibold'
                letterSpacing='wide'
                color='gray.500'
                _hover={{ color: 'brand.500', bg: 'gray.100' }}
                transition='all 150ms ease-in-out'
                textTransform='uppercase'
              >
                Newsletter
              </Link>
            </NextLink> */}
            <IconButton
              aria-label='Activer light/dark mode'
              icon={colorSwitchIcon[colorMode]}
              onClick={toggleColorMode}
              size='sm'
              variant='ghost'
              color='brand.300'
            />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
