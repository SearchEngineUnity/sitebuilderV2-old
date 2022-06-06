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
      name: 'align',
      type: 'string',
      title: 'Horizontal Alignment',
      description:
        'This only affects alignment for illustrations in portable text and smart table.',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
        // isHighlighted: true, // <-- make this field easily accessible
      },
      initialValue: 'flex-start',
    },
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
