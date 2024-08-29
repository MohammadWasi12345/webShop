import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import heroimg from './heroimg'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,heroimg],
}
