/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { StaticQuery, graphql } from 'gatsby';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import createStore from '../state/createStore';
import { determineColor } from '../../lib/helperFunctions';

const ThemeProvider = ({ children, data }) => {
  const { sanityPalette: palette, sanityTypography: typography } = data;

  let theme = createTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiIcon: {
        // Name of the rule
        root: {
          // Some CSS
          fontFamily: 'Material Icons',
        },
      },
      MuiTableCell: {
        head: {
          fontWeight: 600,
        },
      },
    },
    palette: {
      common: {
        black: determineColor(palette?.black?.color) || '#000',
        white: determineColor(palette?.white?.color) || '#fff',
      },
      primary: {
        light: determineColor(palette?.primary?.light?.color) || '#42a5f5',
        main: determineColor(palette?.primary?.main?.color) || '#1976d2',
        dark: determineColor(palette?.primary?.dark?.color) || '#1565c0',
        contrastText: determineColor(palette?.primary?.contrastText?.color) || '#fff',
      },
      secondary: {
        light: determineColor(palette?.secondary?.light?.color) || '#ba68c8',
        main: determineColor(palette?.secondary?.main?.color) || '#9c27b0',
        dark: determineColor(palette?.secondary?.dark?.color) || '#7b1fa2',
        contrastText: determineColor(palette?.secondary?.contrastText?.color) || '#fff',
      },
      text: {
        primary: determineColor(palette?.primaryText?.color) || 'rgba(0, 0, 0, 0.87)',
        secondary: determineColor(palette?.secondaryText?.color) || 'rgba(0, 0, 0, 0.6)',
        disabled: determineColor(palette?.disabled?.color) || 'rgba(0, 0, 0, 0.38)',
      },
      divider: determineColor(palette?.divider?.color) || 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: determineColor(palette?.paper?.color) || '#fff',
        default: determineColor(palette?.default?.color) || '#fff',
      },
      hlBox: {
        definition: {
          bgColor: determineColor(palette?.definition?.bgColor?.color) || '#e9eced',
          borderColor: determineColor(palette?.definition?.borderColor?.color) || '#c6c8ca',
          iconColor:
            determineColor(palette?.definition?.iconColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          textColor:
            determineColor(palette?.definition?.textColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          linkColor: determineColor(palette?.definition?.linkColor?.color) || '#0000FF',
        },
        dyk: {
          bgColor: determineColor(palette?.dyk?.bgColor?.color) || '#d4edda',
          borderColor: determineColor(palette?.dyk?.borderColor?.color) || '#c3e6cb',
          iconColor:
            determineColor(palette?.dyk?.iconColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          textColor:
            determineColor(palette?.dyk?.textColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          linkColor: determineColor(palette?.definition?.linkColor?.color) || '#007030',
        },
        important: {
          bgColor: determineColor(palette?.important?.bgColor?.color) || '#fff3cd',
          borderColor: determineColor(palette?.important?.borderColor?.color) || '#ffeeba',
          iconColor:
            determineColor(palette?.important?.iconColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          textColor:
            determineColor(palette?.important?.textColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          linkColor: determineColor(palette?.definition?.linkColor?.color) || '#935f00',
        },
        proTip: {
          bgColor: determineColor(palette?.proTip?.bgColor?.color) || '#cce5ff',
          borderColor: determineColor(palette?.proTip?.borderColor?.color) || '#b8baff',
          iconColor:
            determineColor(palette?.proTip?.iconColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          textColor:
            determineColor(palette?.proTip?.textColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          linkColor: determineColor(palette?.definition?.linkColor?.color) || '#0056cb',
        },
        warning: {
          bgColor: determineColor(palette?.warning?.bgColor?.color) || '#f8d7da',
          borderColor: determineColor(palette?.warning?.borderColor?.color) || '#f5c6cb',
          iconColor:
            determineColor(palette?.warning?.iconColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          textColor:
            determineColor(palette?.warning?.textColor?.color) ||
            palette?.primaryText?.hex ||
            'rgba(0, 0, 0, 0.87)',
          linkColor: determineColor(palette?.definition?.linkColor?.color) || '#bd0032',
        },
      },
    },
    typography: {
      htmlFontSize: typography?.htmlFontSize || 16,
      fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: typography?.fontSize || 14,
      fontWeightLight: typography?.fontWeightLight || 300,
      fontWeightRegular: typography?.fontWeightRegular || 400,
      fontWeightMedium: typography?.fontWeightMedium || 500,
      fontWeightBold: typography?.fontWeightBold || 700,
      h1: {
        fontFamily: typography?.h1?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h1?.fontWeight || 300,
        fontSize: typography?.h1?.fontSize || '6rem',
        lineHeight: typography?.h1?.lineHeight || 1.167,
      },
      h2: {
        fontFamily: typography?.h2?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h2?.fontWeight || 300,
        fontSize: typography?.h2?.fontSize || '3.75rem',
        lineHeight: typography?.h2?.lineHeight || 1.2,
      },
      h3: {
        fontFamily: typography?.h3?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h3?.fontWeight || 400,
        fontSize: typography?.h3?.fontSize || '3rem',
        lineHeight: typography?.h3?.lineHeight || 1.167,
      },
      h4: {
        fontFamily: typography?.h4?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h4?.fontWeight || 400,
        fontSize: typography?.h4?.fontSize || '2.125rem',
        lineHeight: typography?.h4?.lineHeight || 1.235,
      },
      h5: {
        fontFamily: typography?.h5?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h5?.fontWeight || 400,
        fontSize: typography?.h5?.fontSize || '1.5rem',
        lineHeight: typography?.h5?.lineHeight || 1.334,
      },
      h6: {
        fontFamily: typography?.h6?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.h6?.fontWeight || 500,
        fontSize: typography?.h6?.fontSize || '1.25rem',
        lineHeight: typography?.h6?.lineHeight || 1.6,
      },
      subtitle1: {
        fontFamily: typography?.subtitle1?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.subtitle1?.fontWeight || 400,
        fontSize: typography?.subtitle1?.fontSize || '1rem',
        lineHeight: typography?.subtitle1?.lineHeight || 1.75,
      },
      subtitle2: {
        fontFamily: typography?.subtitle2?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.subtitle2?.fontWeight || 500,
        fontSize: typography?.subtitle2?.fontSize || '0.875rem',
        lineHeight: typography?.subtitle2?.lineHeight || 1.57,
      },
      body1: {
        fontFamily: typography?.body1?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.body1?.fontWeight || 400,
        fontSize: typography?.body1?.fontSize || '1rem',
        lineHeight: typography?.body1?.lineHeight || 1.5,
      },
      body2: {
        fontFamily: typography?.body2?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.body2?.fontWeight || 400,
        fontSize: typography?.body2?.fontSize || '0.875rem',
        lineHeight: typography?.body2?.lineHeight || 1.43,
      },
      caption: {
        fontFamily: typography?.caption?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.caption?.fontWeight || 400,
        fontSize: typography?.caption?.fontSize || '0.75rem',
        lineHeight: typography?.caption?.lineHeight || 1.66,
      },
      overline: {
        fontFamily: typography?.overline?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.overline?.fontWeight || 400,
        fontSize: typography?.overline?.fontSize || '0.75rem',
        lineHeight: typography?.overline?.lineHeight || 2.66,
        textTransform: 'none',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>;
};

export default function TopLayout({ children }) {
  const store = createStore();

  return (
    <StaticQuery
      query={graphql`
        {
          sanityPalette {
            proTip {
              bgColor {
                color {
                  hex
                  alpha
                }
              }
              borderColor {
                color {
                  hex
                  alpha
                }
              }
              iconColor {
                color {
                  hex
                  alpha
                }
              }
              textColor {
                color {
                  hex
                  alpha
                }
              }
              linkColor {
                color {
                  hex
                  alpha
                }
              }
            }
            definition {
              bgColor {
                color {
                  hex
                  alpha
                }
              }
              borderColor {
                color {
                  hex
                  alpha
                }
              }
              iconColor {
                color {
                  hex
                  alpha
                }
              }
              textColor {
                color {
                  hex
                  alpha
                }
              }
              linkColor {
                color {
                  hex
                  alpha
                }
              }
            }
            important {
              bgColor {
                color {
                  hex
                  alpha
                }
              }
              borderColor {
                color {
                  hex
                  alpha
                }
              }
              iconColor {
                color {
                  hex
                  alpha
                }
              }
              textColor {
                color {
                  hex
                  alpha
                }
              }
              linkColor {
                color {
                  hex
                  alpha
                }
              }
            }
            warning {
              bgColor {
                color {
                  hex
                  alpha
                }
              }
              borderColor {
                color {
                  hex
                  alpha
                }
              }
              iconColor {
                color {
                  hex
                  alpha
                }
              }
              textColor {
                color {
                  hex
                  alpha
                }
              }
              linkColor {
                color {
                  hex
                  alpha
                }
              }
            }
            dyk {
              bgColor {
                color {
                  hex
                  alpha
                }
              }
              borderColor {
                color {
                  hex
                  alpha
                }
              }
              iconColor {
                color {
                  hex
                  alpha
                }
              }
              textColor {
                color {
                  hex
                  alpha
                }
              }
              linkColor {
                color {
                  hex
                  alpha
                }
              }
            }
            black {
              color {
                hex
                alpha
              }
            }
            default {
              color {
                hex
                alpha
              }
            }
            paper {
              color {
                hex
                alpha
              }
            }
            disabledText {
              color {
                hex
                alpha
              }
            }
            divider {
              color {
                hex
                alpha
              }
            }
            primary {
              contrastText {
                color {
                  hex
                  alpha
                }
              }
              dark {
                color {
                  hex
                  alpha
                }
              }
              light {
                color {
                  hex
                  alpha
                }
              }
              main {
                color {
                  hex
                  alpha
                }
              }
            }
            primaryText {
              color {
                hex
                alpha
              }
            }
            secondary {
              contrastText {
                color {
                  hex
                  alpha
                }
              }
              dark {
                color {
                  hex
                  alpha
                }
              }
              light {
                color {
                  hex
                  alpha
                }
              }
              main {
                color {
                  hex
                  alpha
                }
              }
            }
            secondaryText {
              color {
                alpha
                hex
              }
            }
            white {
              color {
                hex
                alpha
              }
            }
          }
          sanityTypography {
            fontFamily
            fontSize
            fontWeightBold
            fontWeightLight
            fontWeightMedium
            fontWeightRegular
            htmlFontSize
            h1 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            h2 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            h3 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            h4 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            h5 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            h6 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            subtitle1 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            subtitle2 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            body1 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            body2 {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            caption {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
            overline {
              fontFamily
              fontSize
              fontWeight
              lineHeight
            }
          }
        }
      `}
      render={(data) => (
        <Provider store={store}>
          <ThemeProvider data={data}>{children}</ThemeProvider>
        </Provider>
      )}
    />
  );
}
