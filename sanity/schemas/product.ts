import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL Path)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (GHS)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Dresses", value: "Dresses" },
          { title: "Tops", value: "Tops" },
          { title: "Bottoms", value: "Bottoms" },
          { title: "Outerwear", value: "Outerwear" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details & Care (Bullet points)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
