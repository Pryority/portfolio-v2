export default {
  name: 'pageInfo',
  title: 'PageInfod',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'MainImage',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }]
    }
  ],
}
