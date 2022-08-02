import { BsViewStacked } from 'react-icons/bs';
import * as blocks from '../blocks';

export default {
  name: 'stackFlex',
  title: 'Stack - Flex',
  type: 'object',
  icon: BsViewStacked,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Add ID to the section. Please only use alphanumeric characters and hypen.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of one. The block(s) will appear in order.',
      of: [
        ...Object.values(blocks)
          .filter((block) => block.name !== 'heroBlock')
          .filter((block) => block.name !== 'heroImageBlock')
          .map(({ name, title }) => ({
            type: name,
            title,
          })),
      ],
      validation: (Rule) => Rule.min(1).error('Minimum 1 block required'),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'blockWidth',
      type: 'string',
      title: 'Block Width',
      fieldset: 'presentation',
      description: 'This determines the width of the blocks in this section.',
      options: {
        list: [
          { title: 'full width', value: '12' },
          { title: '10/12', value: '10' },
          { title: '8/12', value: '8' },
          { title: '6/12', value: '6' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '12',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'colorSettings',
      title: 'Color Settings',
      type: 'reference',
      to: [{ type: 'sectionColorSet' }],
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
