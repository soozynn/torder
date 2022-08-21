export function getProductDescription(str) {
  const text = str.replace(
    /(\r\n|\r|\n)\/\/(\r\n|\r|\n)|\/\/(\r\n|\r|\n)|(\r\n|\r|\n)\/\/|\/\/|(\r\n|\r|\n)/g,
    "<br />"
  );

  return text;
}
