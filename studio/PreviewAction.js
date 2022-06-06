/* eslint-disable import/prefer-default-export */
// need to set up prview_url based on env veriables...
import { VscPreview } from 'react-icons/vsc';

const gatsbyPreviewUrl = process.env.SANITY_STUDIO_GATSBY_PREVIEW_URL;

export function PreviewAction({ published, draft, type }) {
  // const isDraft = !!props.draft; // eslint-disable-line
  // const isPublished = !!props.published; // eslint-disable-line
  // const { type, draft, published } = props;
  // let slug = '';

  // if (isDraft) {
  //   if (draft.slug) {
  //     slug = draft.slug.current === '/' ? '/' : draft.slug.current;
  //   }
  // } else if (isPublished) {
  //   if (published.slug) {
  //     slug = published.slug.current === '/' ? '/' : published.slug.current;
  //   }
  // }

  if (type === 'page' || type === 'soloGuidePage' || type === 'flexListingPage') {
    const doc = draft || published;

    let slug;

    if (published && published.slug) {
      slug = published.slug.current === '/' ? '/' : `/${published.slug.current}`;
    } else if (draft && draft.slug) {
      slug = draft.slug.current === '/' ? '/' : `/${draft.slug.current}`;
    }

    return {
      label: 'Preview',
      disabled: !slug,
      icon: VscPreview,
      onHandle: () => {
        window.open(`${gatsbyPreviewUrl}${slug}`, '_blank');
      },
    };
  }

  return null;
}
