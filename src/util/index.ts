export function genId() {
  return Math.random().toString(16).slice(-4)
}

export function randomUniqueString(prefix: any) {
  return (prefix || '').concat([
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId(),
    genId()
  ].join(''))
}

export function generateColor() {
  return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' +
    (85 + 10 * Math.random()) + '%)'
}


const exportUtil = {
  randomUniqueString,
  generateColor
};

export default exportUtil;
