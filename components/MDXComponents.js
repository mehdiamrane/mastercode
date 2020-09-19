import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  PseudoBox,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import CustomLink from 'components/CustomLink';

const Table = (props) => (
  <Box overflowX='scroll' w='full'>
    <Box as='table' textAlign='left' mt='32px' w='full' {...props} />
  </Box>
);

const THead = (props) => (
  <Box as='th' bg='gray.50' fontWeight='semibold' p={2} fontSize='sm' {...props} />
);

const TData = (props) => (
  <Box
    as='td'
    p={2}
    borderTopWidth='1px'
    borderColor='inherit'
    fontSize='sm'
    whiteSpace='normal'
    {...props}
  />
);

const Quote = (props) => {
  const { colorMode } = useColorMode();

  const calloutBgColor = { light: 'brand.50', dark: 'gray.900' };

  return (
    <Callout
      mt={4}
      w='full'
      bg={calloutBgColor[colorMode]}
      variant='left-accent'
      status='info'
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '0px',
      scrollSnapMargin: '0px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 5rem',
        marginTop: '-5rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb='1em'
    mt='2em'
  >
    <Box pointerEvents='auto'>
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label='anchor'
          as='a'
          color='brand.500'
          fontWeight='normal'
          outline='none'
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity='0'
          ml='0.375rem'
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
);

const Hr = () => <Divider borderColor='gray.200' my={4} w='100%' />;

const MDXComponents = {
  h1: (props) => <Heading as='h1' size='xl' my={4} {...props} />,
  h2: (props) => <DocsHeading as='h2' fontWeight='bold' size='lg' {...props} />,
  h3: (props) => <DocsHeading as='h3' size='md' fontWeight='bold' {...props} />,
  inlineCode: (props) => <Code variantColor='brand' fontSize='0.84em' {...props} />,
  kbd: Kbd,
  br: (props) => <Box height='24px' {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as='p' mt={4} lineHeight='tall' {...props} />,
  ul: (props) => <Box as='ul' pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as='ol' pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as='li' pb={1} {...props} />,
  blockquote: Quote,
};

export default MDXComponents;
