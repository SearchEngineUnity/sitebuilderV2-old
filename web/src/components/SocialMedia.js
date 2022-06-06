import React from 'react';
import { IconButton } from 'gatsby-theme-material-ui';
import { StaticQuery, graphql } from 'gatsby';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMedia = ({ data }) => {
  const { allSanitySocialInfo: socials } = data;

  return (
    <>
      {socials.edges.map((social) => {
        const iconSelector = (key) => {
          switch (key) {
            case 'facebook':
              return <FacebookIcon />;
            case 'twitter':
              return <TwitterIcon />;
            case 'instagram':
              return <InstagramIcon />;
            case 'pinterest':
              return <PinterestIcon />;
            case 'linkedin':
              return <LinkedInIcon />;
            case 'youtube':
              return <YouTubeIcon />;

            default:
              return <div>under construction</div>;
          }
        };
        return (
          <IconButton
            color="inherit"
            to={social.node.link}
            target="_blank"
            key={social.node.social}
            aria-label={`${social.node.social}`}
          >
            {iconSelector(social.node.social)}
          </IconButton>
        );
      })}
    </>
  );
};
export default function SocialMediaContact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanitySocialInfo {
            edges {
              node {
                _id
                social
                link
              }
            }
          }
        }
      `}
      render={(data) => <SocialMedia data={data} {...props} />}
    />
  );
}
