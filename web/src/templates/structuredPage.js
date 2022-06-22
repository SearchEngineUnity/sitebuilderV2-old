import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import Seo from '../components/Seo';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLrFlexToProps,
  mapStackFlexToProps,
} from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 10 })
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                heading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              headerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              title
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
            ... on SanityHeroImageBlock {
              _key
              _type
              _rawAsset(resolveReferences: { maxDepth: 10 })
              alt
              maxHeight
              maxWidth
            }
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 10 })
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              title
              titleAlignment
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              title
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
        }
      }
      slug {
        current
      }
      pageTitle
      metaDescription
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      nofollow
      noindex
      canonical
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

const StructuredPage = ({ data, location }) => {
  const type = 'page';

  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.page, type)} />
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackFlexToProps(section)} />;

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
