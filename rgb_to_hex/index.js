function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(c) {
  let value;
  if (c < 0) value = "00";
  else if (c > 255) value = "FF";
  else {
    value = c.toString(16);
    if (value.length === 1) value = value.concat(value);
  }
  return value.toUpperCase();
}
