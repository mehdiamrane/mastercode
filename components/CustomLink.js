import NextLink from 'next/link';
import { Link } from '@chakra-ui/core';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  // const external = href.indexOf('//') !== -1;

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color='brand.500' {...props} />
      </NextLink>
    );
  } else {
    return <Link color='brand.500' isExternal {...props} />;
  }
};

export default CustomLink;

// todo : link and update git and github...
