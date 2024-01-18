// sanityClient.js
import { createClient } from '@sanity/client';


export default createClient({
  projectId: 'gqak00qu', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: true, // set to false if you want to fetch data from the Sanity API
  apiVersion: '2022-03-03', // Specify the desired API version
});
