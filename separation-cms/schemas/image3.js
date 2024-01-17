// schemas/image.js
export default {
  name: 'image3',
  title: 'Image3',
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

  