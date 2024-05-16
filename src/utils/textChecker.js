export const textChecker = (text) => {
  return text.length > 26 ? text.slice(0, 26) + '...' : text;
};
