export const getRgbValue = (hexadecimal: string) => {
  const matches = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexadecimal);
  if (!matches) {
    throw new Error("Unvalid hexadecimal format");
  }

  const r = parseInt(matches[1], 16);
  const g = parseInt(matches[2], 16);
  const b = parseInt(matches[3], 16);

  return { r, g, b };
};

export const getRgbaStringValue = (hexadecimal: string, opacity: number) => {
  const { r, g, b } = getRgbValue(hexadecimal);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
