// schemas/text1.js
export default {
    name: 'JuridiskHjalp',
    title: 'Juridisk hjälp',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
    ],
  };