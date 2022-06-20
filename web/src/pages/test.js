import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const useStyles = makeStyles()({
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
});

const Page = () => {
  const { classes } = useStyles();
  const defaultTheme = createTheme();
  const customTheme = createTheme({
    typography: {
      h1: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
      },
      h2: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
      },
      h4: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
      },
      h5: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
      },
      h6: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
      },
      subtitle1: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
      },
      subtitle2: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
      body1: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
      caption: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },
      overline: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
      },
    },
  });

  const responsiveDefaultTheme = responsiveFontSizes(defaultTheme);
  const responsiveCustomTheme = responsiveFontSizes(customTheme);

  return (
    <Container maxWidth="lg">
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item lg={6}>
          <ThemeProvider theme={defaultTheme}>
            <Paper className={classes.paper} elevation={5}>
              <Box p={4}>
                <h1>This is the default MUI Typography</h1>
                <br />
                <Typography variant="h1">variant h1</Typography>
                <Typography variant="h2">variant h2</Typography>
                <Typography variant="h3">variant h3</Typography>
                <Typography variant="h4">variant h4</Typography>
                <Typography variant="h5">variant h5</Typography>
                <Typography variant="h6">variant h6</Typography>
                <Typography variant="body1">variant body1</Typography>
                <Typography variant="body2">variant body2</Typography>
                <Typography variant="subtitle1">variant subtitle1</Typography>
                <Typography variant="subtitle2">variant subtitle2</Typography>
                <br />
                <Typography variant="caption">variant caption</Typography>
                <br />
                <Typography variant="overline">variant overline</Typography>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
        <Grid item lg={6}>
          <ThemeProvider theme={customTheme}>
            <Paper className={classes.paper} elevation={5}>
              <Box p={4}>
                <h1>This is the custom Typography</h1>
                <br />
                <Typography variant="h1">variant h1</Typography>
                <Typography variant="h2">variant h2</Typography>
                <Typography variant="h3">variant h3</Typography>
                <Typography variant="h4">variant h4</Typography>
                <Typography variant="h5">variant h5</Typography>
                <Typography variant="h6">variant h6</Typography>
                <Typography variant="body1">variant body1</Typography>
                <Typography variant="body2">variant body2</Typography>
                <Typography variant="subtitle1">variant subtitle1</Typography>
                <Typography variant="subtitle2">variant subtitle2</Typography>
                <br />
                <Typography variant="caption">variant caption</Typography>
                <br />
                <Typography variant="overline">variant overline</Typography>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item lg={6}>
          <ThemeProvider theme={responsiveDefaultTheme}>
            <Paper className={classes.paper} elevation={5}>
              <Box p={4}>
                <h1>This is the responsive default MUI Typography</h1>
                <br />
                <Typography variant="h1">variant h1</Typography>
                <Typography variant="h2">variant h2</Typography>
                <Typography variant="h3">variant h3</Typography>
                <Typography variant="h4">variant h4</Typography>
                <Typography variant="h5">variant h5</Typography>
                <Typography variant="h6">variant h6</Typography>
                <Typography variant="body1">variant body1</Typography>
                <Typography variant="body2">variant body2</Typography>
                <Typography variant="subtitle1">variant subtitle1</Typography>
                <Typography variant="subtitle2">variant subtitle2</Typography>
                <br />
                <Typography variant="caption">variant caption</Typography>
                <br />
                <Typography variant="overline">variant overline</Typography>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
        <Grid item lg={6}>
          <ThemeProvider theme={responsiveCustomTheme}>
            <Paper className={classes.paper} elevation={5}>
              <Box p={4}>
                <h1>This is the responsive custom Typography</h1>
                <br />
                <Typography variant="h1">variant h1</Typography>
                <Typography variant="h2">variant h2</Typography>
                <Typography variant="h3">variant h3</Typography>
                <Typography variant="h4">variant h4</Typography>
                <Typography variant="h5">variant h5</Typography>
                <Typography variant="h6">variant h6</Typography>
                <Typography variant="body1">variant body1</Typography>
                <Typography variant="body2">variant body2</Typography>
                <Typography variant="subtitle1">variant subtitle1</Typography>
                <Typography variant="subtitle2">variant subtitle2</Typography>
                <br />
                <Typography variant="caption">variant caption</Typography>
                <br />
                <Typography variant="overline">variant overline</Typography>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Page;
