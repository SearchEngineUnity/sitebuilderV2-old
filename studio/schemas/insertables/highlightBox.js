import { MdSimCardAlert } from 'react-icons/md';

export default {
  name: 'highlightBox',
  title: 'Highlight Box',
  type: 'object',
  icon: MdSimCardAlert,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Pro Tip', value: 'proTip' },
          { title: 'Important', value: 'important' },
          { title: 'Warning', value: 'warning' },
          { title: 'Did You Know', value: 'dyk' },
          { title: 'Definition', value: 'definition' },
          { title: 'Disclaimer', value: 'disclaimer' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Text',
      type: 'highlightBoxPT',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      switch (type) {
        case 'proTip':
          return { title: 'Pro Tip', subtitle: 'Highlight Box' };
        case 'important':
          return { title: 'Important', subtitle: 'Highlight Box' };
        case 'warning':
          return { title: 'Warning', subtitle: 'Highlight Box' };
        case 'dyk':
          return { title: 'Did You Know', subtitle: 'Highlight Box' };
        case 'definition':
          return { title: 'Definition', subtitle: 'Highlight Box' };
        case 'disclaimer':
          return { title: 'Disclaimer', subtitle: 'Highlight Box' };
        default:
          return { title: 'Error' };
      }
    },
  },
};
