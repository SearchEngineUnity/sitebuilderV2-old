/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSpGuideHero = () => {
  const { layout } = useStaticQuery(
    graphql`
      query guideHero {
        layout: sanityLayoutSpg {
          heroImgAlignment
          heroLrAlignment
        }
      }
    `,
  );

  return layout;
};
