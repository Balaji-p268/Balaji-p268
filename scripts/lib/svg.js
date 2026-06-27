function svg(width, height, body) {
  return `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}"
     height="${height}"
     viewBox="0 0 ${width} ${height}">
${body}
</svg>`;
}

function rect(x, y, width, height, fill, rx = 0) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}" />`;
}

function text(x, y, value, size, color, weight = "normal") {
  return `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="Segoe UI" font-weight="${weight}">${value}</text>`;
}

module.exports = {
  svg,
  rect,
  text
};