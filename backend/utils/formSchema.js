const { Type } = require("@google/genai");

const formSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    description: { type: Type.STRING },
    sections: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                type: {
                  type: Type.STRING,
                  enum: [
                    "short",
                    "paragraph",
                    "multipleChoice",
                    "checkbox",
                    "dropdown",
                    "scale",
                    "grid",
                    "date",
                    "time",
                  ],
                },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                required: { type: Type.BOOLEAN },
                jumpToSection: {
                  type: Type.STRING,
                  description:
                    "If user selects a certain option, jump to another section title or 'END'.",
                },
              },
              propertyOrdering: [
                "question",
                "type",
                "options",
                "required",
                "jumpToSection",
              ],
            },
          },
        },
        propertyOrdering: ["title", "description", "questions"],
      },
    },
  },
  propertyOrdering: ["title", "description", "sections"],
};

exports.modules = formSchema;
