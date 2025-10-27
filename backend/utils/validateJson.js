// utils/validateJson.js
export function validateJson(formData) {
  if (!formData.title || !formData.sections) return false;

  for (const section of formData.sections) {
    if (!section.title || !Array.isArray(section.questions)) return false;

    for (const q of section.questions) {
      if (!q.question || !q.type) return false;
      if (
        ["multipleChoice", "checkbox", "dropdown"].includes(q.type) &&
        (!q.options || q.options.length === 0)
      )
        return false;
    }
  }
  return true;
}

