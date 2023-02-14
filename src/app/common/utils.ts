export const converter = (str: string) => {
  const clearStr = str
    .replace(/[()]/g, '')
    .replace(/€\/Liter/, '')
    .replace(',', '.');

  return Number(clearStr);
};
