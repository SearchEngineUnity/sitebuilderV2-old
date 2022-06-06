import { RiGatsbyLine } from 'react-icons/ri';

const contentSyncUrl = process.env.SANITY_STUDIO_CONTENT_SYNC_URL;

const GatsbyPreviewAction = ({ published, draft, type }) => {
  const doc = draft || published;

  let id;
  if (published) {
    id = published._id;
  } else if (draft) {
    // eslint-disable-next-line prefer-destructuring
    id = draft._id.split('drafts.')[1];
  }
  const updatedAt = doc ? `${doc._updatedAt.split('.')[0].split('Z')[0]}.000Z` : null;

  if (type === 'page' || type === 'soloGuidePage' || type === 'flexListingPage') {
    return {
      disabled: !id,
      icon: RiGatsbyLine,
      label: 'Open Preview',
      onHandle: () => {
        window.open(
          `${contentSyncUrl}/gatsby-source-sanity/${id}-${updatedAt}`,
          `gatsby-source-sanity-${id}`,
        );
      },
    };
  }

  return null;
};

export default GatsbyPreviewAction;
