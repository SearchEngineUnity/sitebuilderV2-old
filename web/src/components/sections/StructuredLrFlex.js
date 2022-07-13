import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import SectionBlock from '../blocks/SectionBlock';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
} from '../../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import { determineColor } from '../../lib/helperFunctions';

function StructuredLrFlex({
  idTag,
  heading,
  subtitle,
  blocks,
  footer,
  layout,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  reverseOrder,
  colorSettings,
}) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const colCalculator = (value) => {
    switch (value) {
      case 10:
        return {
          xs: 12,
          md: 10,
        };
      case 9:
        return {
          xs: 12,
          md: 9,
        };
      case 8:
        return {
          xs: 12,
          md: 8,
        };
      case 7:
        return {
          xs: 12,
          md: 7,
        };
      case 6:
        return {
          xs: 12,
          md: 6,
        };
      case 5:
        return {
          xs: 12,
          md: 5,
        };
      case 4:
        return {
          xs: 12,
          md: 4,
        };
      case 3:
        return {
          xs: 12,
          md: 3,
        };
      case 2:
        return {
          xs: 12,
          md: 2,
        };
      default:
        console.log('calculator missing');
        return null;
    }
  };

  const backgroundColor = determineColor(colorSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(colorSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(colorSettings?.link?.color) || 'initial';
  const headingColor = determineColor(colorSettings?.heading?.color) || 'inherit';
  const subtitleColor = determineColor(colorSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(colorSettings?.footer?.color) || 'inherit';

  return (
    <Box
      id={idTag}
      component="section"
      sx={{
        bgcolor: backgroundColor,
        color: foregroundColor,
        padding: {
          xs: '1rem',
          sm: '4rem',
        },
        '& .pt-link': {
          color: linkColor,
          textDecorationColor: linkColor,
        },
      }}
    >
      <Container maxWidth="lg">
        <StructuredSectionHeader
          heading={heading}
          subtitle={subtitle}
          headingColor={headingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid
          container
          justifyContent="center"
          alignItems={blockAlignment}
          spacing={{ xs: 1, sm: 4 }}
          direction={reverseOrder ? { xs: 'column-reverse', md: 'row' } : 'row'}
        >
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (true) {
                case key === 'videoBlock':
                  return <VideoBlock key={_key} url={block.url} ratio={block.ratio} />;
                case key === 'imageBlock':
                  return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;
                case key === 'sectionBlock':
                  return (
                    <SectionBlock
                      hasSectionHeading={!!heading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapSectionBlockToProps(block)}
                    />
                  );
                case key === 'gridFlex':
                  return <GridFlex key={block._key} {...mapGridFlexToProps(block)} />;
                case key === 'blockFormNetlify':
                  return (
                    <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />
                  );
                case key === 'btnBlockMui' && block.link[0]._type === 'jumpLink':
                  return <ButtonJumpLink key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'externalLink':
                  return <ButtonExternal key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'internalGlobal':
                  return <ButtonInternalGlobal key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'internalLocal':
                  return <ButtonInternalLocal key={_key} {...mapMuiBtnToProps(block)} />;
                default:
                  return <div key="default-inner-block"> Block still under development</div>;
              }
            };
            return (
              <Grid item {...col} key={block._key}>
                {blockSelector(_type)}
              </Grid>
            );
          })}
        </Grid>
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </Box>
  );
}

export default StructuredLrFlex;
