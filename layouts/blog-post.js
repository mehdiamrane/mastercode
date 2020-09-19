import { Heading, Box } from '@chakra-ui/core';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

const BlogPostLayout = ({ children: content, frontMatter }) => {
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
        <Heading as='h1'>{frontMatter.title}</Heading>
        {content}
      </Box>
      <Footer />
    </>
  );
};

export default BlogPostLayout;
