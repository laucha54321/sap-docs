// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación SAP',
  tagline: 'Documentación técnica para sistemas SAP',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-mermaid'],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://laucha54321.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sap-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'laucha54321', // Usually your GitHub org/user name.
  projectName: 'sap-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',


  // CONFIGURACIÓN ESPAÑOL - Esta es la parte más importante
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Hace que la documentación sea la página principal
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tu-usuario/tu-repo/tree/main/', // Actualiza con tu repo
        },
        blog: false, // Desactivamos el blog para enfocarnos en documentación
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  plugins:[
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // 🔥 Important settings:
        hashed: true,
        indexDocs: true,
        indexBlog: true, 
        indexPages: false, // Set to true if you want to index regular pages
        docsRouteBasePath: '/', // Match your docs route
        language: ["es"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: false,
        searchResultLimits: 10,
        searchResultContextMaxLength: 50,
      },
    ]
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { 
          light: 'default', 
          dark: 'dark' 
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Documentación SAP',
        logo: {
          alt: 'Logo SAP',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación', // Cambiado de 'Tutorial' a 'Documentación'
          },
          // Eliminado el blog ya que lo desactivamos
          {
            href: 'https://github.com/tu-usuario/tu-repo', // Actualiza con tu repo
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/intro', // O simplemente '/' si usas routeBasePath: '/'
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/sap',
              },
              {
                label: 'Foros SAP',
                href: 'https://community.sap.com/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Portal SAP',
                href: 'https://www.sap.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tu-usuario/tu-repo', // Actualiza con tu repo
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tu Organización. Desarrollado con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Opcional: Metadata para SEO en español
      metadata: [
        {name: 'keywords', content: 'sap, documentación, español, fi, co, mm, sd'},
        {name: 'description', content: 'Documentación técnica completa de SAP en español'}
      ],
    }),
};

export default config;