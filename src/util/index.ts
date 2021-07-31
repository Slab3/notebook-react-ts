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


export default randomUniqueString;
