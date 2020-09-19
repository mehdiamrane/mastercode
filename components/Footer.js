import { Box, Flex, Link, PseudoBox, Stack, Text, useColorMode } from '@chakra-ui/core';
import GitHub from 'svg/github.svg';
import LinkedIn from 'svg/linkedin.svg';
import Twitter from 'svg/twitter.svg';
import Instagram from 'svg/instagram.svg';
import YouTube from 'svg/youtube.svg';

const CustomIcon = ({ icon, href }) => {
  const { colorMode } = useColorMode();

  const iconColor = { light: 'gray.400', dark: 'gray.500' };
  const iconHoverColor = { light: 'gray.800', dark: 'gray.50' };

  return (
    <Link href={href} display='block' isExternal>
      <PseudoBox
        as={icon}
        size='16px'
        color={iconColor[colorMode]}
        _hover={{ color: iconHoverColor[colorMode] }}
        transition='all 150ms ease-in-out'
        rounded='md'
      />
    </Link>
  );
};

const Footer = () => {
  const { colorMode } = useColorMode();

  const footerBgColor = { light: 'gray.50', dark: 'gray.800' };
  const footerBorderColor = { light: 'gray.200', dark: 'gray.700' };
  const footerTextColor = { light: 'gray.400', dark: 'gray.500' };
  const footerTextHoverColor = { light: 'gray.800', dark: 'gray.50' };

  return (
    <>
      <Box
        w='full'
        bg={footerBgColor[colorMode]}
        py='4'
        borderTop='1px'
        borderColor={footerBorderColor[colorMode]}
      >
        <Flex
          maxW='maxSiteWidth'
          align='center'
          justify='space-between'
          mx='auto'
          px={{ base: '4', sm: '6', lg: '8' }}
        >
          <Box color={footerTextColor[colorMode]} fontSize='sm'>
            <Text>
              © 2020 mastercode.fr{' • '}
              <Link
                _hover={{ color: footerTextHoverColor[colorMode] }}
                href='https://mehdi.co'
                isExternal
              >
                Mehdi Amrane
              </Link>
            </Text>
          </Box>
          <Stack isInline spacing='4' shouldWrapChildren align='center'>
            <CustomIcon href='#' icon={GitHub} />
            <CustomIcon href='#' icon={Twitter} />
            <CustomIcon href='#' icon={YouTube} />
            <CustomIcon href='#' icon={LinkedIn} />
            <CustomIcon href='#' icon={Instagram} />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
