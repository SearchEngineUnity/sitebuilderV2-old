import React from 'react';
import Grid from '@mui/material/Grid';
import Tile1 from '../tiles/TileImageRecSqr';
import Tile2 from '../tiles/TileImageCircle';
import Tile3 from '../tiles/TileImageTitleBorder';
import Tile4 from '../tiles/TileImageTitleTextBase';
import { mapFluidImgToProps } from '../../lib/mapToProps';

function GridFlex({ layout, tiles, tileOption }) {
  // number of tiles desktop/table/mobile: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <Grid container spacing={3}>
      {tiles.map((tile) => {
        const tileSelector = (key) => {
          switch (key) {
            case '1':
              return <Tile1 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '2':
              return <Tile2 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '3':
              return (
                <Tile3
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                />
              );
            case '4':
              return (
                <Tile4
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                  text={tile.text}
                />
              );
            default:
              return <div> Tile still under development</div>;
          }
        };

        return (
          <Grid item key={tile._key} {...col}>
            {tileSelector(tileOption)}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridFlex;
