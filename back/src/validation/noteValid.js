export const noteValid = {
  body: {
    type: "object",
    required: ["title", "description", "category"],
    properties: {
      title: {
        type: "string",
        minLength:2
      },
      description: {
        type: "string",
        minLength:2
      },
      category: {
        type: "string",
        minLength:2
      },
    },
  },
};
