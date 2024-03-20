import sanitizeHtml from "sanitize-html";
export const generatePagination = (currentPage, totalPages) => {
  if (currentPage <= 3) {
    return [1, 2, 3, "..."];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "..."];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1];
};

// Sanitize HTML content
export const sanitizedHtml = (unsanitized) =>
  sanitizeHtml(unsanitized, {
    allowedTags: ["a"],
    allowedAttributes: {
      a: ["href"],
    },
  });
