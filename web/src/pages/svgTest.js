/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ImageTest = ({ data }) => {
  const { url } = data.allSanityImageAsset.edges[0].node;
  return (
    <>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
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
                url
              }
            }
          }
        }
      `}
      render={(data) => <ImageTest data={data} {...props} />}
    />
  );
}
