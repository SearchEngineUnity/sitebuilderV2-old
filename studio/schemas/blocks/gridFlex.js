import { FiGrid } from 'react-icons/fi';

export default {
  name: 'gridFlex',
  title: 'Grid - Flex',
  type: 'object',
  icon: FiGrid,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please enter a short name to describe the contents of the grid.',
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description: 'Please enter in the format of value/value/value for desktop/tablet/mobile.',
      type: 'string',
      initialValue: '3/2/1',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [{ type: 'tileInfo' }],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    },
    {
      name: 'tileOption',
      title: 'Tile output option',
      type: 'string',
      options: {
        list: [
          { title: 'image-only-rectangle/square', value: '1' },
          { title: 'image-only-circle', value: '2' },
          { title: 'image-title-border', value: '3' },
          { title: 'image-title-text-base', value: '4' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      name: 'name',
      tileOption: 'tileOption',
    },
    prepare({ name, tileOption }) {
      switch (tileOption) {
        case '1':
          return { title: name || 'Grid Flex', subtitle: 'display: image-only-rectangle/square' };
        case '2':
          return { title: name || 'Grid Flex', subtitle: 'display: image-only-circle' };
        case '3':
          return { title: name || 'Grid Flex', subtitle: 'display: image-title-border' };
        case '4':
          return { title: name || 'Grid Flex', subtitle: 'display: image-title-text-base' };
        default:
          return { title: 'Error' };
      }
    },
  },
};
