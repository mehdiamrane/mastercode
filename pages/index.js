import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { frontMatter as articles } from './blog/**/*.mdx';
import formatPath from 'utils/formatPath';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/core';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import BlogCard from 'components/BlogCard';
import NothingFound from 'components/NothingFound';

const Home = () => {
  const [displayedArticles, setDisplayedArticles] = useState(articles);

  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    // If pressed key is our target key then set focus
    function searchFocus(e) {
      if (e.key === '/') {
        e.preventDefault();
        searchRef.current.focus();
      }
    }
    window.addEventListener('keydown', searchFocus);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', searchFocus);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    if (searchValue.length > 0) {
      setDisplayedArticles(
        articles.filter(
          (article) =>
            article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setDisplayedArticles(articles);
    }
  }, [searchValue]);

  return (
    <>
      <Head>
        <title>mastercode_</title>
        <link rel='icon' href='/assets/favicon.ico' />
      </Head>
      <NavBar />
      <Box
        px={{ base: '4', sm: '6', lg: '8' }}
        py='16'
        maxW='maxSiteWidth'
        mx='auto'
        px={{ base: '4', sm: '6', lg: '8' }}
      >
        <Box>
          <Heading as='h1' size='xl' textAlign='center' fontWeight='light'>
            Guides pour développeurs,
            <br />
            in French please.
          </Heading>
        </Box>

        <InputGroup my='12' mx='auto'>
          <InputLeftElement children={<Icon name='search' color='gray.300' />} />
          <Input
            ref={searchRef}
            type='text'
            placeholder='Rechercher un article (Presser "/" pour focus)'
            rounded='lg'
            shadow='xs'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputGroup>

        <Heading
          as='h2'
          fontSize='sm'
          fontWeight='semibold'
          letterSpacing='wide'
          color='gray.500'
          textTransform='uppercase'
          mb='6'
        >
          {searchValue ? `${displayedArticles.length} articles trouvés` : 'Derniers articles'}
        </Heading>

        <Stack spacing='4' shouldWrapChildren>
          {displayedArticles.map((article, i) => {
            {
              console.log('hey');
            }
            return (
              <BlogCard
                key={article.__resourcePath}
                href={formatPath(article.__resourcePath)}
                article={article}
              />
            );
          })}
          {displayedArticles.length === 0 && <NothingFound thing='article' />}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
