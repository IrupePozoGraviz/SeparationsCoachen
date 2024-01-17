// schemas/image.js
export default {
    name: 'image1',
    title: 'Image1',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
  