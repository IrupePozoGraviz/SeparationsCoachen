// schemas/index.js
console.log('Importing schemas...');
import text1 from './text1';
import text2 from './text2';
import text3 from './text3';
import text4 from './text4';
import image1 from './image1';
import image2 from './image2';
import image3 from './image3';
console.log('Schemas imported:', [text1, text2, text3, text4, image1, image2, image3]);
const schemaTypes = [text1, text2, text3, text4, image1, image2, image3];
console.log('Exporting schemaTypes:', schemaTypes);
export default schemaTypes;
