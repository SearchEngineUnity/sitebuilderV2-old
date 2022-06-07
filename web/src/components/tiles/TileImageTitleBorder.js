import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
    borderRadius: '0.25rem',
    height: '100%',
  },
});

function TileImageRecSqr({ image, alt, link, title }) {
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
    <Card elevation={link ? 8 : 0} classes={{ root: classes.card }}>
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
        <Box pt={2}>
          <GatsbyImage
            image={imageData}
            alt={alt}
            style={{
              width: '50%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Box py={2} px={1}>
          <Box fontSize="20px" fontWeight="700" textAlign="center">
            <div>{title}</div>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
