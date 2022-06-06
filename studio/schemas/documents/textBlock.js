// new document to test paste handling in isolation

import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'textBlock',
  type: 'document',
  title: 'Rich Text Block',
  fields: [
    {
      name: 'text',
      type: 'testPT',
      title: 'Text',
    },
  ],
};
