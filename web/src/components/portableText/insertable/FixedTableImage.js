import React from 'react';
import Box from '@mui/material/Box';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../sanityConfig';
import CaptionContent from '../serializer/CaptionSerializer';

function FixedTableImage({ illustration }) {
  const imageFluid = illustration?.asset;
  const fixedProps = getGatsbyImageData(imageFluid, { layout: 'fixed' }, sanityConfig);

  return (
    <Box component="figure" justifyContent={illustration.align} sx={{ m: 0 }} display="block">
      <GatsbyImage
        image={fixedProps}
        // eslint-disable-next-line no-unneeded-ternary
        alt={illustration.alt ? illustration.alt : ''}
        style={{
          display: 'block',
        }}
      />
      {illustration.caption && <CaptionContent blocks={illustration.caption} />}
    </Box>
  );
}

export default FixedTableImage;
