import { Flex, Text, PseudoBox, Badge, Heading, useColorMode } from '@chakra-ui/core';
import NextLink from 'next/link';
import formatDate from 'utils/formatDate';

const BlogCard = ({ article, href }) => {
  const { title, summary, tag, publishedAt } = article;

  const { colorMode } = useColorMode();

  const cardBgColor = { light: 'white', dark: 'gray.800' };
  const cardBorderColor = { light: 'gray.100', dark: 'gray.700' };
  const cardBorderHoverColor = { light: 'gray.300', dark: 'gray.500' };
  const cardTitleColor = { light: 'gray.800', dark: 'gray.50' };
  const cardSummaryColor = { light: 'gray.500', dark: 'gray.400' };
  const cardDateColor = { light: 'gray.400', dark: 'gray.500' };

  return (
    <NextLink href={href} passHref>
      <PseudoBox
        as='a'
        display='block'
        border='2px'
        borderColor={cardBorderColor[colorMode]}
        rounded='lg'
        p='6'
        pb='5'
        bg={cardBgColor[colorMode]}
        _hover={{ borderColor: cardBorderHoverColor[colorMode] }}
        transition='all 200ms ease-in-out'
      >
        <Heading as='h4' size='md' fontWeight='semibold' color={cardTitleColor[colorMode]}>
          {title}
        </Heading>
        <Text color={cardSummaryColor[colorMode]} mt='2' mb='4' fontSize='md'>
          {summary}
        </Text>

        <Flex align='center'>
          <Text fontSize='xs' color={cardDateColor[colorMode]} fontWeight='semibold' mr='2'>
            {formatDate(publishedAt)}
          </Text>

          <Badge variantColor='brand' fontSize='10px'>
            {tag}
          </Badge>
        </Flex>
      </PseudoBox>
    </NextLink>
  );
};

export default BlogCard;
