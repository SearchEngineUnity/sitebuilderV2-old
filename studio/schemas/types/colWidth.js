import { AiOutlineColumnWidth } from 'react-icons/ai';

export default {
  name: 'colWidth',
  type: 'object',
  title: 'Table Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    {
      name: 'width',
      type: 'string',
      title:
        'Please enter value in px or % (including the unit) or use 0 without any units for auto sizing. Do not mix the usage of units for the same table.',
    },
  ],
  preview: {
    select: {
      title: 'width',
    },
  },
};
