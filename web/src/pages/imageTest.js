/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageTest = ({ data }) => {
  const { gatsbyImageData } = data.allSanityImageAsset.edges[0].node;
  return (
    <>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      </div>
    </>
  );
};

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanityImageAsset {
            edges {
              node {
                gatsbyImageData
              }
            }
          }
        }
      `}
      render={(data) => <ImageTest data={data} {...props} />}
    />
  );
}
