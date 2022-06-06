import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Block Form Netlify',
  name: 'blockFormNetlify',
  type: 'object',
  icon: FaWpforms,
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
      name: 'title',
      title: 'Form Title',
      type: 'string',
      description: 'This is the title of the form that will appear on top of the form fields.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'formNetlify',
      title: 'Form Netlify',
      type: 'reference',
      to: [
        {
          type: 'formNetlify',
        },
      ],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'titleAlignment',
      title: 'Title Alignment',
      type: 'string',
      description: 'This only apply to the form title.',
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
      name: 'formStyle',
      title: 'Form Style',
      type: 'reference',
      to: [{ type: 'formStyle' }],
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'formNetlify.name',
    },
  },
};
