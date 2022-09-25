export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentJob',
      title: 'IsCurrentJob',
      type: 'boolean',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'keyLearnings',
      title: 'KeyLearnings',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
}
