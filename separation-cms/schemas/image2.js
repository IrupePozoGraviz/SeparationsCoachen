// schemas/image.js
// schemas/image.js
export default {
    name: 'image2',
    title: 'Image2',
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
  