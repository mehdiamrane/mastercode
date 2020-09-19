const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');
const remarkCodeTitles = require('remark-code-titles');
const remarkAutolinkHeadings = require('remark-autolink-headings');
const remarkSlug = require('remark-slug');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [remarkCodeTitles, remarkAutolinkHeadings, remarkSlug],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})(
  /* normal next config */
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },
    async redirects() {
      return [
        {
          // added a redirection because trailingSlash automatic redirection breaks the admin page
          // https://github.com/vercel/next.js/discussions/16416
          source: '/edit',
          destination: 'https://app.forestry.io/sites/3klb9bbff-9e2w/',
          permanent: true,
        },
      ];
    },
  }

  /* normal next config */
);
