module.exports = {
  title: 'EdCenta',
  description: 'EdCenta product and engineering documentation',
  base: '/edcenta/',
  themeConfig: {
    nav: [
      { text: 'Scope', link: '/product-scope' },
      { text: 'Status', link: '/implementation-status' },
      { text: 'Development', link: '/development' },
      { text: 'Operations', link: '/operations' }
    ],
    sidebar: [
      '/',
      '/product-scope',
      '/implementation-status',
      '/architecture',
      '/api-and-workflows',
      '/development',
      '/operations'
    ],
    lastUpdated: 'Last updated'
  }
};
