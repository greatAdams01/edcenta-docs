module.exports = {
  title: 'EdCenta Platform',
  description: 'Comprehensive educational platform documentation',
  base: '/edcenta/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Reference', link: '/api-reference' },
      { text: 'GitHub', link: 'https://github.com/your-org/edcenta' }
    ],
    
    sidebar: [
      {
        title: 'Overview',
        children: [
          '/',
          '/getting-started',
          '/system-architecture'
        ]
      },
      {
        title: 'Development',
        children: [
          '/development-setup',
          '/api-reference',
          '/database-schema',
          '/contributing'
        ]
      },
      {
        title: 'Project Management',
        children: [
          '/project-roadmap',
          '/quick-checklist',
          '/release-notes'
        ]
      },
      {
        title: 'User Guides',
        children: [
          '/user-guides/student',
          '/user-guides/parent',
          '/user-guides/tutor',
          '/user-guides/school',
          '/user-guides/admin'
        ]
      }
    ],
    
    lastUpdated: 'Last Updated',
    repo: 'your-org/edcenta',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ]
}
