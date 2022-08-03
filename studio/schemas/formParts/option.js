export default {
  name: 'option',
  type: 'object',
  title: 'Option',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'This is the visible label for the form.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'value',
      title: 'Recorded Value',
      type: 'string',
      description: 'This is the value recorded by the form submission.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Option label',
        subtitle,
      };
    },
  },
};
