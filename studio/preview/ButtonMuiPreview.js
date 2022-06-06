/* eslint-disable import/no-unresolved */
import React from 'react';
import QueryContainer from 'part:@sanity/base/query-container';
import { Button, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { determineColor } from '../lib/helperFunctions';

const ButtonMuiPreview = ({ document }) => {
  // The JSON preview
  const documentQuery = `*[_type == 'btnDesignMui' && name == '${document.displayed.name}'] | order(_updatedAt desc) {name, settings, 'main': colors.main->color, 'dark': colors.dark->color, 'contrastText': colors.contrastText->color, typography}`;

  return (
    <QueryContainer query={documentQuery}>
      {({ result, loading }) => {
        let main;
        let dark;
        let contrastText;
        let typography;
        let settings;
        let variant;
        let padding;
        let borderRadius;
        let disableElevation;
        let disableFocusRipple;
        let disableRipple;
        let fullWidth;
        let mainColor;
        let darkColor;
        let contrastTextColor;

        if (result) {
          main = result?.documents[0].main;
          dark = result?.documents[0].dark;
          contrastText = result?.documents[0].contrastText;
          typography = result?.documents[0].typography;
          settings = result?.documents[0].settings;

          variant = settings.variant;
          padding = settings.padding;
          borderRadius = settings.borderRadius;
          disableElevation = settings.disableElevation;
          disableFocusRipple = settings.disableFocusRipple;
          disableRipple = settings.disableRipple;
          fullWidth = settings.fullWidth;

          mainColor = main ? determineColor(main) : null;
          darkColor = dark ? determineColor(dark) : null;
          contrastTextColor = contrastText ? determineColor(contrastText) : null;
        }

        const theme = createTheme({
          palette: {
            primary: {
              main: mainColor || '#3f51b5',
              dark: darkColor || '#303f9f',
              contrastText: contrastTextColor || '#fff',
            },
          },
          shape: {
            borderRadius: borderRadius || '4px',
          },
          typography: {
            button: {
              fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: typography?.fontWeight || 500,
              fontSize: typography?.fontSize || '0.875rem',
              lineHeight: typography?.lineHeight || 1.75,
              letterSpacing: typography?.letterSpacing || '0.02857em',
              textTransform: 'none',
            },
          },
        });

        return loading ? (
          <div> data loading </div>
        ) : (
          result && (
            <ThemeProvider theme={theme}>
              <Box p={3}>
                <Button
                  color="primary"
                  variant={variant}
                  disableElevation={disableElevation}
                  disableFocusRipple={disableFocusRipple}
                  disableRipple={disableRipple}
                  fullWidth={fullWidth}
                  style={{ padding }}
                >
                  Button Text
                </Button>
              </Box>
            </ThemeProvider>
          )
        );
      }}
    </QueryContainer>
  );
};

export default ButtonMuiPreview;
