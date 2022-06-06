import { FaTable } from 'react-icons/fa';

export default {
  name: 'basicTable',
  title: 'Table',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table Name',
    },
    {
      name: 'colHeading',
      type: 'boolean',
      title: 'This table has a column heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'rowHeading',
      type: 'boolean',
      title: 'This table has a row heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'minWidth',
      type: 'string',
      title: 'Minimum Table Width',
      description: 'Please make sure to indluce px with the minimum width number. example 100px',
    },
    {
      name: 'colgroup',
      type: 'array',
      title:
        'This sets the width of column in order from left to right. Use 0 for auto default sizing.',
      of: [{ type: 'colWidth' }],
    },
    {
      name: 'table',
      type: 'table',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
