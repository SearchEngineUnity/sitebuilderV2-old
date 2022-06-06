// resolveDocumentActions.js

// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions';

import { gatsbyPreviewAction } from 'sanity-plugin-gatsby-cloud-preview';
import GatsbyPreviewAction from './GatsbyPreviewAction';
import { PreviewAction } from './PreviewAction';

export default function resolveDocumentActions(props) {
  return [PreviewAction, ...defaultResolve(props)];
  // return [...defaultResolve(props), gatsbyPreviewAction];
  // return [GatsbyPreviewAction, ...defaultResolve(props)];
}
