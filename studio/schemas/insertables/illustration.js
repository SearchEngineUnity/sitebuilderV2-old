export default {
  name: 'illustration',
  title: 'Illustration',
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
      name: 'maxWidth',
      type: 'number',
      title: 'Image Max Width',
      description: `You can enter a width in pixels. If the image's native width is smaller it will be used instead.`,
      // options: {
      //   isHighlighted: true, // <-- make this field easily accessible
      // },
    },
    {
      name: 'maxHeight',
      type: 'number',
      title: 'Image Max Height',
      description: `You can enter a height in pixels. If the image's native height is smaller it will be used instead.`,
      // options: {
      //   isHighlighted: true, // <-- make this field easily accessible
      // },
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
