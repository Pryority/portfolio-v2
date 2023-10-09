export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      description: "Project Title",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      description: "Project Status",
      type: "string",
    },
    {
      name: "demoImage",
      title: "DemoImage",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};
