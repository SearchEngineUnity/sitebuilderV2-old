export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Site Builder V1',
            apiId: '4fe5d933-672d-47d0-828b-dd08600061ac',
            buildHookId: '620e8cb23e949e1921ab9548',
            name: 'sitebuilderv1',
          },
        ],
      },
    },
    {
      name: 'gatsby',
      options: {
        title: 'Gatsby Preview Site',
        sites: [{ siteUrl: 'https://preview-sitebuilderv1.gtsb.io/' }],
      },
    },
  ],
};
