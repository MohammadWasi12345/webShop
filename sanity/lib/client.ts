import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'


export const client = createClient({
  projectId:'hp3war5t',
  apiVersion :"2024-05-24",
  dataset:'production',
  useCdn :true,
});



