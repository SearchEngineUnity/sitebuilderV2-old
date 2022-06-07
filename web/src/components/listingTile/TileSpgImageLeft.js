import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardActionArea } from 'gatsby-theme-material-ui';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
});

function TileImageRecSqr({ image, alt, url, title, text, date }) {
  const classes = useStyles();
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card elevation={8} classes={{ root: classes.card }} square>
      {/* the link probably cannot be spread in the same way as from regular tiles */}
      <CardActionArea to={`/${url}`}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={3} xs={12}>
            <GatsbyImage
              image={imageData}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
              }}
              imgStyle={{
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item md={8} sm={9} xs={12}>
            <CardContent>
              <Typography gutterBottom variant="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {lastUpdatedDate.toLocaleDateString('en-US', options)}
              </Typography>
              <Typography variant="body2" component="p">
                {text}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
