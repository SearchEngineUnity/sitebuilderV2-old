import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'submitBtn',
  title: 'Submit Button',
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
      title: 'text',
      subtitle: 'idTag',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
