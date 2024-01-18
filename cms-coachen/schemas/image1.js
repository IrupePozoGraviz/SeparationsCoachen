import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pictureSectionOne',
  title: 'pictureSectionOne',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageDescription',
      title: 'Image Description',
      type: 'text',
      description: 'Description for the main image',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});

