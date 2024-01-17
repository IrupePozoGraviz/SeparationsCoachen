import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import schemaTypes  from './schemas/index'

console.log('Configuring Sanity Studio...');

console.log('Imported schemaTypes:', schemaTypes);

export default defineConfig({
  title: "",
  projectId: "s4bk2wv5",
  dataset: "production",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
console.log('Sanity Studio configuration:', defineConfig);