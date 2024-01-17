// sanityClient.js
import { createClient } from 'sanity';

const client = createClient({
  projectId: 's4bk2wv5', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: true, // set to false if you want to fetch data from the Sanity API
});

export default client;