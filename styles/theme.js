import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    body:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    //   gray: {
    //     50: '#F9FAFB',
    //     100: '#F4F5F7',
    //     200: '#E6E7EB',
    //     300: '#D2D6DC',
    //     400: '#9FA6B2',
    //     500: '#6B7280',
    //     600: '#4B5563',
    //     700: '#374151',
    //     800: '#252F3F',
    //     900: '#161E2E',
    //   },
  },
  shadows: {
    ...chakraTheme.shadows,
    xs: '0 0 0 1px rgba(0,0,0,.05)',
  },
  sizes: {
    ...chakraTheme.sizes,
    '7xl': '80rem',
    // 3xl = 48rem
    maxSiteWidth: '48rem',
  },
};

export default theme;
