import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import CardActionAreaExternal from '../cardActionArea/CardActionAreaExternal';
import CardActionAreaInternalGlobal from '../cardActionArea/CardActionAreaInternalGlobal';
import CardActionAreaInternalLocal from '../cardActionArea/CardActionAreaInternalLocal';
import CardActionAreaJumpLink from '../cardActionArea/CardActionAreaJumpLink';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    border: '1px solid #acb4b8',
    height: '100%',
  },
});

function TileImageRecSqr({ image, alt, link, title, text }) {
  const classes = useStyles();

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card elevation={link ? 8 : 0} classes={{ root: classes.card }} square>
      <ConditionalCardActionArea
        condition={linkType}
        jumpLink={(children) => (
          <CardActionAreaJumpLink {...link}>{children}</CardActionAreaJumpLink>
        )}
        external={(children) => (
          <CardActionAreaExternal {...link}>{children}</CardActionAreaExternal>
        )}
        internalGlobal={(children) => (
          <CardActionAreaInternalGlobal {...link}>{children}</CardActionAreaInternalGlobal>
        )}
        internalLocal={(children) => (
          <CardActionAreaInternalLocal {...link}>{children}</CardActionAreaInternalLocal>
        )}
      >
        <GatsbyImage image={imageData} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
