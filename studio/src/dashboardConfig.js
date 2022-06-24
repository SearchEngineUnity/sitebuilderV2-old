export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Site Builder V2',
            apiId: '4ce45844-a1b7-45f9-bb49-0026d5420e5c',
            buildHookId: '62b5c106997625009c13884f',
            name: 'sitebuilderv2',
          },
        ],
      },
    },
    {
      name: 'gatsby',
      options: {
        title: 'Gatsby Preview Site',
        sites: [{ siteUrl: 'https://preview-sitebuilderv2.gtsb.io/' }],
      },
    },
  ],
};
