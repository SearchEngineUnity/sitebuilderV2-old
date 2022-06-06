const path = require('path');

// create all structured pages
async function createStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `);

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    if (page?.node?.slug?.current) {
      actions.createPage({
        path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
        ownerNodeId: page.node.id,
        component: path.resolve(`./src/templates/structuredPage.js`),
        context: {
          slug: page.node.slug.current,
        },
      });
    }
  });
}

// create all listing pages
async function createFlexListingPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityFlexListingPage {
        edges {
          node {
            id
            slug {
              current
            }
            sections {
              ... on SanityPaginatedListingSection {
                _key
                _type
                count
                listItemType
              }
            }
          }
        }
      }
      allSanitySoloGuidePage {
        totalCount
      }
    }
  `);

  const pages = data.allSanityFlexListingPage.edges;
  pages.forEach((page) => {
    const { listItemType } = page.node.sections.filter(
      (section) => section._type === 'paginatedListingSection',
    )[0];
    const numPerPage = page.node.sections.filter(
      (section) => section._type === 'paginatedListingSection',
    )[0].count;
    let totalCount;
    switch (listItemType) {
      case 'Solo Guide Page':
        totalCount = data.allSanitySoloGuidePage.totalCount;
        break;

      default:
        break;
    }
    const numPages = Math.ceil(totalCount / numPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      if (page?.node?.slug?.current) {
        actions.createPage({
          path: i === 0 ? `/${page.node.slug.current}` : `${page.node.slug.current}/${i + 1}`,
          component: path.resolve(`./src/templates/flexListingPage.js`),
          context: {
            listItemType,
            limit: numPerPage,
            skip: i * numPerPage,
            numPages,
            currentpage: i + 1,
            slug: page.node.slug.current,
          },
        });
      }
    });
  });
}

// create individual guides
async function createSoloGuidePages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanitySoloGuidePage {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `);

  const guides = data.allSanitySoloGuidePage.edges;
  guides.forEach((guide) => {
    if (guide?.node?.slug?.current) {
      actions.createPage({
        path: `/${guide.node.slug.current}`,
        ownerNodeId: guide.node.id,
        component: path.resolve(`./src/templates/soloGuidePage.js`),
        context: {
          slug: guide.node.slug.current,
        },
      });
    }
  });
}

// create Multi Chapter Guide Cluster
async function createMultiChapterGuideRootPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityMultiChapterGuideRootPage {
        edges {
          node {
            h1
            shortLabel
            slug {
              current
            }
            chapters {
              h1
              shortLabel
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanityMultiChapterGuideRootPage.edges;

  guides.forEach((guide) => {
    const chaptersArray = [
      {
        title: guide.node.shortLabel,
        slug: guide.node.slug.current,
      },
    ];
    guide.node.chapters.forEach((chapter) => {
      chaptersArray.push({
        title: chapter.shortLabel,
        slug: chapter.slug.current,
      });
    });

    // creates the root pages
    actions.createPage({
      path: `/${guide.node.slug.current}`,
      component: path.resolve(`./src/templates/multiChapterGuideRootPage.js`),
      context: {
        slug: guide.node.slug.current,
        chaptersArray,
      },
    });

    // creates the chapters
    guide.node.chapters.forEach((chapter) => {
      actions.createPage({
        path: `/${chapter.slug.current}`,
        component: path.resolve(`./src/templates/chapterGuidePage.js`),
        context: {
          slug: chapter.slug.current,
          chaptersArray,
          mpTitle: guide.node.shortLabel,
        },
      });
    });
  });
}

// // create individual chapter root
// async function createMultiChapterGuideRootPages(actions, graphql) {
//   const { data } = await graphql(`
//     {
//       allSanityMultiChapterGuideRootPage {
//         edges {
//           node {
//             slug {
//               current
//             }
//             id
//           }
//         }
//       }
//     }
//   `);

//   const guides = data.allSanityMultiChapterGuideRootPage.edges;
//   guides.forEach((guide) => {
//     if (guide?.node?.slug?.current) {
//       actions.createPage({
//         path: `/${guide.node.slug.current}`,
//         ownerNodeId: guide.node.id,
//         component: path.resolve(`./src/templates/multiChapterGuideRootPage.js`),
//         context: {
//           slug: guide.node.slug.current,
//         },
//       });
//     }
//   });
// }

// // create individual chapter guides
// // for bread crumbs
// //    need the root page url
// //    need to know what chapter # we are on
// //    need to know total # of chapters

// // for prev / next button
// //    need to know the H1 or the short label of the prev / next page
// //    need to know the URL for them as well
// async function createChapterGuidePages(actions, graphql) {
//   const { data } = await graphql(`
//     {
//       allSanityChapterGuidePage {
//         edges {
//           node {
//             slug {
//               current
//             }
//             id
//           }
//         }
//       }
//     }
//   `);

//   const guides = data.allSanityChapterGuidePage.edges;
//   guides.forEach((guide) => {
//     if (guide?.node?.slug?.current) {
//       actions.createPage({
//         path: `/${guide.node.slug.current}`,
//         ownerNodeId: guide.node.id,
//         component: path.resolve(`./src/templates/chapterGuidePage.js`),
//         context: {
//           slug: guide.node.slug.current,
//         },
//       });
//     }
//   });
// }

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createStructuredPages(actions, graphql);
  await createFlexListingPages(actions, graphql);
  await createSoloGuidePages(actions, graphql);
  await createMultiChapterGuideRootPages(actions, graphql);
  // await createChapterGuidePages(actions, graphql);
  await createPageRedirects(actions, graphql);
};
