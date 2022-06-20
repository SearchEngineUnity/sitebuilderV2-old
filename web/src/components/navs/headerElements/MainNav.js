import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { makeStyles } from 'tss-react/mui';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import NavBrand from './NavBrand';
import NavPhone from './NavPhone';
import MainNavHamburger from './MainNavHamburger';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles()((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

const MainNav = ({ data, location }) => {
  const { classes } = useStyles();

  return (
    <>
      {data.sanityNavMenu && (
        <AppBar position="static" classes={{ colorDefault: classes.appBar }} color="default">
          <Container maxWidth="lg" component="nav" aria-label="main navigation header">
            {data.sanityNavMenu.menuArray.map((menuRow, menuIndex) => {
              // menu group is not a navgroup. it is the top level menu item.
              const { menuGroup, _key } = menuRow;

              return (
                <Box
                  display={{
                    xs: menuIndex === 0 ? 'block' : 'none',
                    sm: menuIndex === 0 ? 'block' : 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                  }}
                  key={_key}
                  role="none"
                >
                  <Toolbar
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    disableGutters
                    role="menubar"
                  >
                    {menuGroup.map((group, index) => {
                      const { _type, _key: groupKey } = group;
                      const arrayLength = menuGroup.length;
                      let position = 'bottom-start';

                      if (index + 1 === arrayLength) {
                        position = 'bottom-end';
                      }

                      if (index > 0 && index + 1 < arrayLength) {
                        position = 'bottom';
                      }

                      switch (_type) {
                        case 'navBrand':
                          return (
                            <NavBrand
                              {...mapNavBrandToProps(group)}
                              url={data.sanityContactInfo.homePage}
                              key={groupKey}
                            />
                          );
                        case 'navPhone':
                          return (
                            <NavPhone text={group.text} key={groupKey} number={group.phoneNumber} />
                          );
                        case 'navItem':
                          return (
                            <Box
                              display={{
                                xs: 'none',
                                sm: 'block',
                                md: 'block',
                                lg: 'block',
                                xl: 'block',
                              }}
                              key={groupKey}
                              role="none"
                            >
                              <NavItem {...mapNavItemToProps(group)} location={location} />
                            </Box>
                          );
                        case 'navGroup':
                          return (
                            <Box
                              display={{
                                xs: 'none',
                                sm: 'block',
                                md: 'block',
                                lg: 'block',
                                xl: 'block',
                              }}
                              key={groupKey}
                              role="none"
                            >
                              <NavGroup
                                {...mapNavGroupToProps(group)}
                                location={location}
                                position={position}
                              />
                            </Box>
                          );

                        default:
                          return <div>under construction</div>;
                      }
                    })}
                    {menuIndex === 0 && (
                      <MainNavHamburger
                        bottomMenu={data.sanityNavMenu.menuArray[1].menuGroup}
                        topMenu={data.sanityNavMenu.menuArray[0].menuGroup}
                        brandUrl={data.sanityContactInfo.homePage}
                        location={location}
                      />
                    )}
                  </Toolbar>
                </Box>
              );
            })}
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default function MainNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityNavMenu(type: { eq: "mainNav" }) {
            type
            menuArray {
              _key
              menuGroup {
                ... on SanityNavBrand {
                  _key
                  _type
                  alt
                  brandGroup {
                    _key
                    height
                    type
                    brand {
                      _id
                      logo {
                        asset {
                          url
                        }
                      }
                    }
                  }
                }
                ... on SanityNavGroup {
                  _key
                  _type
                  title
                  group {
                    title
                    isButton
                    icon
                    nav {
                      ... on SanityPage {
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        slug {
                          current
                        }
                      }
                      ... on SanityFlexListingPage {
                        slug {
                          current
                        }
                      }
                      ... on SanityChapterGuidePage {
                        slug {
                          current
                        }
                      }
                      ... on SanityMultiChapterGuideRootPage {
                        slug {
                          current
                        }
                      }
                    }
                    _key
                  }
                }
                ... on SanityNavItem {
                  _key
                  _type
                  isButton
                  title
                  nav {
                    ... on SanityPage {
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      slug {
                        current
                      }
                    }
                    ... on SanityFlexListingPage {
                      slug {
                        current
                      }
                    }
                    ... on SanityChapterGuidePage {
                      slug {
                        current
                      }
                    }
                    ... on SanityMultiChapterGuideRootPage {
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityNavPhone {
                  _key
                  _type
                  text
                  phoneNumber
                }
              }
            }
          }
          sanityContactInfo {
            homePage
          }
        }
      `}
      render={(data) => <MainNav data={data} {...props} />}
    />
  );
}
