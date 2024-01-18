// schemas/text1.js
export default {
    name: 'Tappning',
    title: 'Tappnings terapi',
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