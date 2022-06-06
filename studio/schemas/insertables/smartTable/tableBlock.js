export default {
  title: 'Table Block',
  name: 'tableBlock',
  type: 'object',
  fields: [
    {
      name: 'copy',
      title: 'Cell Content',
      type: 'tableBlockContent',
    },
  ],
  preview: {
    select: {
      content: 'copy',
      subtitle: '_type',
    },
    prepare({ content, subtitle }) {
      switch (content[0]._type) {
        case 'block':
          return {
            title: content[0].children[0].text,
            subtitle,
          };

        default:
          return {
            title: `This list item start with '${content[0]._type}''`,
            subtitle,
          };
      }
    },
  },
};
