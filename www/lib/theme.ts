const htmlFontSize = 16
const fontSize = 14
const coef = fontSize / 14;
const pxToRem = size => `${(size / htmlFontSize) * coef}rem`;

const space = 10

export default {
  space: {
    xs: space / 4,
    sm: space / 2,
    md: space,
    lg: space * 2,
    xl: space * 4
  },
  pxToRem
}
