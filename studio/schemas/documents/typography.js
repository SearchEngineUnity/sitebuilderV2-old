export default {
  name: 'typography',
  type: 'document',
  title: 'Typography',
  __experimental_actions: ['create', 'update', 'publish'],
  fieldsets: [
    {
      name: 'general',
      title: 'General',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      description: 'Please include units for font sizes (px, em, or rem).',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'htmlFontSize',
      title: 'HTML Font Size (Root)',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'general',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightLight',
      title: 'Font Weight Light',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightRegular',
      title: 'Font Weight Regular',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightMedium',
      title: 'Font Weight Medium',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightBold',
      title: 'Font Weight Bold',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'h1',
      title: 'T1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h2',
      title: 'T2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h3',
      title: 'T3',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h4',
      title: 'T4',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h5',
      title: 'T5',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h6',
      title: 'T6',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'subtitle1',
      title: 'Subtitle 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'subtitle2',
      title: 'Subtitle 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'body1',
      title: 'Body 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'body2',
      title: 'Body 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },

    {
      name: 'caption',
      title: 'Caption',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'overline',
      title: 'Overline',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    // {
    //   name: 'button',
    //   title: 'Button',
    //   type: 'muiTypeStyleSetBtn',
    //   fieldset: 'variants',
    // },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Typography`,
      };
    },
  },
};
