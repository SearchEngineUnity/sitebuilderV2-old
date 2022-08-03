export default {
  name: 'tableImage',
  title: 'Table Image',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'captionPT',
      title: 'Caption Text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'align',
      type: 'string',
      title: 'Horizontal Alignment',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
        isHighlighted: true, // <-- make this field easily accessible
      },
      initialValue: 'flex-start',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
