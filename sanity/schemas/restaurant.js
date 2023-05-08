import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Restaurant Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Restaurant Longitute',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value between 1 to 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }]
    }),
  ],

})
