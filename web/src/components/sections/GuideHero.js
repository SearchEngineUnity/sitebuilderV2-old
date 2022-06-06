import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import ImgBlock from '../blocks/FluidImgBlock';
import Subtitle from '../portableText/serializer/HeroSubtitleSerializer';
import ProgressBar from '../ScrollProgressBar';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useSpGuideHero } from '../../hooks/useSpGuideHero';

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
    '& .pt-link': {
      color: theme.palette.secondary.main,
    },
  },
}));

function GuideHero({ h1, subtitle, date, image }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const heroAlignment = useSpGuideHero();
  const classes = useStyles();

  return (
    <>
      <Box
        bgcolor="primary.main"
        color="primary.contrastText"
        id="hero"
        component="section"
        className={classes.section}
        py={8}
      >
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems={heroAlignment.heroLrAlignment}
            spacing={8}
          >
            <Grid item md={6} xs={12}>
              <Typography variant="h1" gutterBottom>
                {h1}
              </Typography>
              <Subtitle blocks={subtitle} />
              <br />
              {lastUpdatedDate && (
                <Box fontSize="0.775rem" fontWeight={600} component="p">
                  Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
                </Box>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              <div justify={heroAlignment.heroImgAlignment}>
                <ImgBlock {...mapFluidImgBlockToProps(image)} loading="eager" height={400} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ProgressBar />
    </>
  );
}

export default GuideHero;
