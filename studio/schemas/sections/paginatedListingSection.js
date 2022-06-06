import { ImBooks } from 'react-icons/im';

export default {
  name: 'paginatedListingSection',
  title: 'Paginated Listing Section',
  type: 'object',
  icon: ImBooks,
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
      name: 'seuID',
      title: 'seuID',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'hashID',
      title: 'Hash ID',
      type: 'string',
      description: 'Please only use alphanumeric characters and hypen',
    },
    {
      name: 'listItemType',
      title: 'List Item Type',
      type: 'string',
      options: {
        list: ['Solo Guide Page'],
      },
      initialValue: 'Solo Guide Page',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'count',
      type: 'number',
      title: 'Count',
      fieldset: 'presentation',
      description: 'Number of tiles per page',
      initialValue: 12,
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.integer().error('Value must be an integer'),
      ],
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
      id: 'seuID',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
