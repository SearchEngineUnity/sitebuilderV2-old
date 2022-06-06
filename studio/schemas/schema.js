/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import * as portableTexts from './portableTexts';
import * as blocks from './blocks';
import * as documents from './documents';
import * as formParts from './formParts';
import * as insertables from './insertables';
import * as sections from './sections';
import * as types from './types';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...Object.values(portableTexts),
    ...Object.values(blocks),
    ...Object.values(documents),
    ...Object.values(formParts),
    ...Object.values(insertables),
    ...Object.values(sections),
    ...Object.values(types),
  ]),
});
