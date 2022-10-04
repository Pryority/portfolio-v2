import { Rule } from "postcss"

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'An app that I use',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
}
