import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { determineColor } from '../../lib/helperFunctions';

const useStyles = makeStyles()((theme, { padding }) => ({
  size: {
    padding,
  },
}));

function ButtonExternal({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determineColor(main?.color);
  const darkColor = determineColor(dark?.color);
  const contrastTextColor = determineColor(contrastText?.color);

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
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

  const { classes } = useStyles({ padding });
  const { href, newTab, noreferrer } = link[0];

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign={alignment} p={3}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          className={classes.size}
          target={newTab ? '_blank' : undefined}
          rel={
            newTab || noreferrer
              ? `${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`
              : undefined
          }
          href={href}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default ButtonExternal;
