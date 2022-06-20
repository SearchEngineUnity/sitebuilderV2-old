import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from 'tss-react/mui';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import CardActionAreaExternal from '../cardActionArea/CardActionAreaExternal';
import CardActionAreaInternalGlobal from '../cardActionArea/CardActionAreaInternalGlobal';
import CardActionAreaInternalLocal from '../cardActionArea/CardActionAreaInternalLocal';
import CardActionAreaJumpLink from '../cardActionArea/CardActionAreaJumpLink';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles()({
  card: {
    borderRadius: '10000px',
  },
});

function TileImageCircle({ image, alt, link }) {
  const { classes } = useStyles();

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card square elevation={link ? 8 : 0} classes={{ root: classes.card }}>
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
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageCircle;
