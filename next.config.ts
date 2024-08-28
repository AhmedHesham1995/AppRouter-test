import type { NextConfig } from 'next';

const config: NextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar', // Set 'ar' as the default locale
  },
};

export default config;
