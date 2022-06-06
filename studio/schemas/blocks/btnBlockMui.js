import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'btnBlockMui',
  title: 'Button - MUI',
  type: 'object',
  icon: BsBootstrap,
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
      title: 'Button ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        { type: 'jumpLink' },
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
      ],
      validation: (Rule) => [
        Rule.length(1).error('Must contain only one item'),
        Rule.required().error('Field is required'),
      ],
    },
    {
      name: 'btnAlignment',
      title: 'Button Alignment',
      type: 'string',
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
      name: 'design',
      title: 'Button Design Option',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      text: 'text',
      id: 'idTag',
    },
    prepare({ text, id }) {
      return {
        title: text,
        subtitle: `ID: ${id}`,
      };
    },
  },
};
