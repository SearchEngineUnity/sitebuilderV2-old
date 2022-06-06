export default {
  name: 'rowPlus',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [
        { type: 'tableBlock' },
        { type: 'tableImage' },
        { type: 'emptyCell' },
        { type: 'splitCell' },
      ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `row`,
      };
    },
  },
};
